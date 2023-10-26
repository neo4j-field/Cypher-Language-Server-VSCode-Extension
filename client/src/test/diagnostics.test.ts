/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as vscode from 'vscode';
import * as assert from 'assert';
import { getDocUri, activate } from './helper';

suite('Should get diagnostics', () => {
	const docUri = getDocUri('diagnostics1.cql');

	test('Diagnoses an error 1', async () => {
		await testDiagnostics(docUri, [
			{ 
				message: `no viable alternative at input '{id,'`, 
				range: toRange(4, 23, 4, 23), 
				severity: vscode.DiagnosticSeverity.Warning, 
				source: 'Cypher Lang' 
			},
			{ 
				message: `mismatched input 'isEnd' expecting ')'`, 
				range: toRange(4, 40, 4, 44), 
				severity: vscode.DiagnosticSeverity.Warning, 
				source: 'Cypher Lang' 
			},
			{ 
				message: `mismatched input 'false' expecting {<EOF>, ';'}`, 
				range: toRange(4, 47, 4, 51), 
				severity: vscode.DiagnosticSeverity.Warning, 
				source: 'Cypher Lang' 
			},
		]);
	});
});

function toRange(sLine: number, sChar: number, eLine: number, eChar: number) {
	const start = new vscode.Position(sLine, sChar);
	const end = new vscode.Position(eLine, eChar);
	return new vscode.Range(start, end);
}

async function testDiagnostics(docUri: vscode.Uri, expectedDiagnostics: vscode.Diagnostic[]) {
	await activate(docUri);

	const actualDiagnostics = vscode.languages.getDiagnostics(docUri);

	assert.equal(actualDiagnostics.length, expectedDiagnostics.length);

	for (let i = 0; i < expectedDiagnostics.length; i++) {
		const expectedDiagnostic = expectedDiagnostics[i];
		const actualDiagnostic = actualDiagnostics[i];
		assert.equal(actualDiagnostic.message, expectedDiagnostic.message);
		assert.deepEqual(actualDiagnostic.range, expectedDiagnostic.range);
		assert.equal(actualDiagnostic.severity, expectedDiagnostic.severity);
	}
}