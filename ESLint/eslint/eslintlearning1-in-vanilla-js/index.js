// const express = require('express');

// SOURCE for following notes:- https://www.youtube.com/watch?v=SydnKbGc7W8

// OUTPUT: express is faded with message "'express' is declared but its value is never read." in the tooltip

// First Step: Install
// i) ESLint, and
// ii) Prettier: Code formatter extensions in VS Code

// OUTPUT: express is faded with message "'express' is declared but its value is never read." in the tooltip

// Second Step:
// Create package.json file by command:- "npm init -y"
// Install dependencies by command:-  npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier
// Install airbnb dependencies by command:- npx install-peerdeps --dev eslint-config-airbnb
// Find eslint-config-airbnb in https://www.npmjs.com/package/eslint-config-airbnb or just google it.
// Create config files:-
//      i)  Create .prettierrc (For any prettier rules like 'singleQuote', go to prettier site).
//      ii) Create .eslintrc.json file manually or generate it via installing eslint by command:-
//          npx eslint --init
//          Choose any options because anyway we are going to change the eslintrc file.
//          Still choose:- To check syntax and find problems, CommonJS (require/exports) for node, None of these, No for Typescript,
//                         Browser and Node(But i chose Only Browser bymistake), JSON

// console.log("hello"); Doesn't throw 'no-console' warning yet, until we generate eslintrc file.
// And It doesn't throw 'singleQuote' whereever we have added singleQuote rule already
// It is because In order to enforce error from prettier we have to add "prettier/prettier": "error" in eslintrc file.

// OUTPUT: express is red underlined also

// In 'problems' tab in vscode terminal:- 'express' is assigned a value but never used. eslint(no-unused-vars) [1, 7]

// Modify eslintrc file, Replace everything with:-
// {
//     "extends": ["airbnb", "prettier"],
//     "plugins": ["prettier"],
//     "rules": {
//     }
// }

// OUTPUT: express is red underlined in require('express')
// Reason:- Unable to resolve path to module 'express'. eslint(import/no-unresolved) [1, 25].
// Also, console.log("hello"); is yellow underlined with 'no-console' warning

// Do 'npm i express' in terminal, Error:- Unable to resolve path to module 'express' goes away.

// ********************************************************************************************************************** //

const express = require('express');

// const x = 1;
// let y = 5;

// Add const x = 1; after require line
// OUTPUT: Expected 1 empty line after require statement not followed by another require. eslint(import/newline-after-import)

// Add one blank line after require statement
// OUTPUT: import/newline-after-import goes away

// Add let y = 5;
// OUTPUT: 'y' is never reassigned. Use 'const' instead.eslint(prefer-const)

// Add "prettier/prettier": "error" in eslintrc file.
// console.log("hello");
// console.log('hello');
// OUTPUT: singleQuote error works now.
// On adding this, it also throws many Delete `␍` eslint(prettier/prettier) [1, 39]
// To solve this, Use like this
// "prettier/prettier": ["error", {
//     "endOfLine":"auto"
// }]
