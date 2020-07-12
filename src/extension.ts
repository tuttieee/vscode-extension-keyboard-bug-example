import * as vscode from 'vscode';

const delay = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

export function activate(context: vscode.ExtensionContext) {
	console.log('activated');

	context.subscriptions.push(vscode.commands.registerCommand('type', async (...args) => {
		console.log('type', ...args);
		await delay(1000);	// Some heavy logic
		return vscode.commands.executeCommand('default:type', ...args);
	}));

	context.subscriptions.push(vscode.commands.registerCommand('replacePreviousChar', (...args) => {
		console.log('replacePreviousChar', ...args);
		return vscode.commands.executeCommand('default:replacePreviousChar', ...args);
	}));
}

export function deactivate() {}
