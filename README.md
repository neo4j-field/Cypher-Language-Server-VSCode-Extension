# Cypher Language Server VSCode Extension
- Based off sample code for https://code.visualstudio.com/api/language-extensions/language-server-extension-guide
- Leverages the grammar .g4 source from the cypher-editor project, credit to https://github.com/neo4j/cypher-editor

## Functionality

This Language Server works for cypher files (.cql, .cyp, .cypher). Main feature is syntax checking. 
# TODOTODODO

It also includes an End-to-End test.

## Structure

```
.
├── client // Language Client
│   ├── src
│   │   ├── test // End to End tests for Language Client / Server
│   │   └── extension.ts // Language Client entry point
├── package.json // The extension manifest.
└── server // Language Server
    └── src
        └── server.ts // Language Server entry point
```

## Running the Sample

- Run `npm install` in this folder. This installs all necessary npm modules in both the client and server folder
- Open VS Code on this folder.
- Press Ctrl+Shift+B (or Cmd+Shift+P > Tasks: Run Task > `npm watch` to start compiling the client and server in [watch mode](https://code.visualstudio.com/docs/editor/tasks#:~:text=The%20first%20entry%20executes,the%20HelloWorld.js%20file.).
- Run and Debug > Select `Launch Client`
- In the [Extension Development Host](https://code.visualstudio.com/api/get-started/your-first-extension#:~:text=Then%2C%20inside%20the%20editor%2C%20press%20F5.%20This%20will%20compile%20and%20run%20the%20extension%20in%20a%20new%20Extension%20Development%20Host%20window.) instance of VSCode, open a document in 'Cypher' language mode, or a cypher file.
- Enter valid or non-valid cypher.
- To debug the server code, additionally Run and Debug > Select `Attach to Server`

# Antlr
* To regenerate the antlr lexer and parser files, run `npm run generate`.