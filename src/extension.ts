import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('activated');

	// context.subscriptions.push(vscode.commands.registerCommand('type', (...args) => {
  //   console.log('type', ...args);
	// 	vscode.commands.executeCommand('default:type', ...args);
  // }));

	context.subscriptions.push(vscode.commands.registerCommand('replacePreviousChar', (...args) => {
    console.log('replacePreviousChar', ...args);
		vscode.commands.executeCommand('default:replacePreviousChar', ...args);
	}));
}

export function deactivate() {}
