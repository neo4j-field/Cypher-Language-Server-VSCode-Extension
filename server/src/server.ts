import {
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult
} from 'vscode-languageserver/node';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';

import { CharStream, CommonTokenStream, InputStream, ErrorListener, RecognitionException, Recognizer, Token }  from 'antlr4';
import CypherParser from './CypherParser';
import CypherLexer from './CypherLexer';


// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

connection.onInitialize((params: InitializeParams) => {
	const capabilities = params.capabilities;

	// Does the client support the `workspace/configuration` request?
	// If not, we fall back using global settings.
	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// Tell the client that this server supports code completion.
			completionProvider: {
				resolveProvider: true
			}
		}
	};
	if (hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		};
	}
	return result;
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});

// The example settings
interface ExampleSettings {
	maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
const documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// Reset all cached document settings
		documentSettings.clear();
	} else {
		globalSettings = <ExampleSettings>(
			(change.settings.languageServerExample || defaultSettings)
		);
	}

	// Revalidate all open text documents
	documents.all().forEach(validateTextDocument);
});


function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'languageServerExample'
		});
		documentSettings.set(resource, result);
	}
	return result;
}


// Only keep settings for open documents
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});


// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
	validateTextDocument(change.document);
});


/**
 * Syntax check the document text
 * @param textDocument 
 */
async function validateTextDocument(textDocument: TextDocument): Promise<void> {
	// settings for every validate run.
	const settings = await getDocumentSettings(textDocument.uri);
	
	const text = textDocument.getText();

	// CYPHER PARSER
	const lexer = new CypherLexer(new CharStream(text))
	lexer.removeErrorListeners();
	lexer.addErrorListener(new LexerErrorListener());
	const parser = new CypherParser(new CommonTokenStream(lexer));
	parser.buildParseTrees = true;
	const parseErrList = new ParserErrorListener();
	parser.removeErrorListeners();
	parser.addErrorListener(parseErrList);
	parser.cypher()

	const diagnostics: Diagnostic[] = [];
	if (!parseErrList.errors) {
		connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
		return;
	}

	let problems = 0;
	for (let error of parseErrList.errors) {
		problems++;
		if (problems >= settings.maxNumberOfProblems) {
			break;
		}
		
		console.log('end > textlength', error.stop, text.length);
		if (error.stop > text.length) {
			console.log('assertion fail')
		}

		const diagnostic: Diagnostic = {
			severity: DiagnosticSeverity.Warning,
			range: {
				start: textDocument.positionAt(error.start),
				end: textDocument.positionAt(error.stop),
			},
			message: error.msg,
			source: 'Cypher Lang'
		};
		
		if (hasDiagnosticRelatedInformationCapability) {
			diagnostic.relatedInformation = [
				{
					location: {
						uri: textDocument.uri,
						range: Object.assign({}, diagnostic.range)
					},
					message: 'Additional details 1'
				},
				{
					location: {
						uri: textDocument.uri,
						range: Object.assign({}, diagnostic.range)
					},
					message: 'Additional details 2'
				}
			];
		}
		
		diagnostics.push(diagnostic);
	}

	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}


// Monitored files have change in VSCode
connection.onDidChangeWatchedFiles(_change => {
	connection.console.log('We received an file change event');
});


// This handler provides the initial list of the completion items.
connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		// The pass parameter contains the position of the text document in
		// which code complete got requested. For the example we ignore this
		// info and always provide the same completion items.
		return [
			{
				label: 'TypeScript',
				kind: CompletionItemKind.Text,
				data: 1
			},
			{
				label: 'JavaScript',
				kind: CompletionItemKind.Text,
				data: 2
			}
		];
	}
);


// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		if (item.data === 1) {
			item.detail = 'TypeScript details';
			item.documentation = 'TypeScript documentation';
		} else if (item.data === 2) {
			item.detail = 'JavaScript details';
			item.documentation = 'JavaScript documentation';
		}
		return item;
	}
);


class LexerErrorListener extends ErrorListener<number> {
	syntaxError(rec: Recognizer<number>, sym: number, line: number, col: number, msg: string, e: RecognitionException) {
		console.log('here in cyphererrorlistener')
	}
}


interface CypherError {
	line: number;
	col: number;
	msg: string; 
	start: number; 
	stop: number;
}


class ParserErrorListener extends ErrorListener<Token> {
	errors: CypherError[] = [];
	syntaxError(rec: Recognizer<Token>, sym: Token, line: number, col: number, msg: string, e: RecognitionException) {
		console.log('here in parserrerrorlistener')

		const { start, stop } = sym || {};
		if (msg === "mismatched input '<EOF>' expecting {';', SP}") {
			// suppress error about missing semicolon at the end of a query
			return;
		}
		if (msg === "missing ';' at '<EOF>'") {
			return;
		}
		// if (msg === "mismatched input '<EOF>' expecting {':', CYPHER, EXPLAIN, PROFILE, USING, CREATE, DROP, LOAD, WITH, OPTIONAL, MATCH, UNWIND, MERGE, SET, DETACH, DELETE, REMOVE, FOREACH, RETURN, START, CALL}"
		// ) {
		// 	return;
		// }
		this.errors.push({ line, col, msg, start, stop });
	}
}


// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
