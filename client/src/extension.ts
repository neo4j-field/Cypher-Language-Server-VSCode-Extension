import * as path from 'path';
import { workspace, ExtensionContext } from 'vscode';

import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
    TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;


export function activate(context: ExtensionContext) {
    const serverModule = context.asAbsolutePath(
        path.join('server', 'out', 'server.js')
    );

    const serverOptions: ServerOptions = {
        run: { module: serverModule, transport: TransportKind.ipc },
        debug: {  // debug server options are used if ext launched in debug mode
            module: serverModule,
            transport: TransportKind.ipc,
            // --inspect=6009: runs server in Node's Inspector mode so VS Code can attach to the server for debugging
            // 6009 referenced in .vscode/launch.json
            options: { execArgv: ['--nolazy', '--inspect=6009'] }
        }
    };

    const clientOptions: LanguageClientOptions = {
        documentSelector: [
            { scheme: 'untitled', language: 'cypher' }, // unsaved files in cypher mode
            { scheme: 'file', language: 'cypher' },     // cypher files
        ],
        synchronize: {
            // Notify server about file changes to '.clientrc files contained in the workspace
            fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
        }
    };

    // Create and start client.
    client = new LanguageClient(
        'languageServerExample',
        'Language Server Example',
        serverOptions,
        clientOptions
    );
    client.start();  // This will also launch the server
}


export function deactivate(): Thenable<void> | undefined {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
