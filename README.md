# Rua 
This is a super tiny compiler for language Rua.

## Tech Stack

- [Ohm-js](https://github.com/harc/ohm)

## Useful Tools
- [AST](https://esprima.org/demo/parse.html#)
- [ohmlang](https://ohmlang.github.io/editor/)
  
## Available Scripts
##### `npm run install`
Install the necessary packages.

##### `npm run start`
Runs the /src/rua.js and draw AST tree in console.

#### `npm run test`
Launches the test runner in the interactive watch mode.

#### `npm run lint`
Run the linter for all files alongside with code autoformatting (via [prettier](https://prettier.io/)).

## Project structure diagram
```
Rua
│─ src
│  ├── ast.js
│  ├── astBuilder.js
│  ├── compiler.js
│  ├── parser.js
│  ├── rua.js
│  └── myGrammar.ohm
│─ examples
│  ├── ex1.rua
│  ├── ...
│  └── ex4.rua
│─ tests
│  ├── parser.test.js
│  ├── compiler.test.js
│  └── astBuilder.test.js
├── .eslintrc.js
└── package.json
```
