/* eslint-disable no-undef */
const astBuilder = require('../src/astBuilder');
const testTokens = require('./compiler.test');
const testAst = {
  body: [
    {
      declarations: [
        {
          id: { name: 'a', type: 'Identifier' },
          init: { type: 'Literal', value: 1, row: '1' },
          type: 'variableDeclarator',
        },
      ],
      kind: 'let',
      type: 'VariableDeclaration',
    },
  ],
  sourceString: 'script',
  type: 'Program',
};

const testTokens2 = [
  {
      "type": "Keyword",
      "value": "let"
  },
  {
      "type": "Identifier",
      "value": "a"
  },
  {
      "type": "Punctuator",
      "value": ";"
  }
];

const testAst2 = {
  type: 'Program',
  body: [
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          id: {
            name: 'a',
            type: 'Identifier',
          },
          init: null,
          type: 'variableDeclarator',
        },
      ],
      kind: 'let',
    },
    { type: 'BinaryExpression', operator: ';' },
  ],
  sourceString: 'script',
};

const testTokens3 = [
  {
      "type": "Keyword",
      "value": "fake"
  },
  {
      "type": "Identifier",
      "value": "a"
  },
  {
      "type": "Punctuator",
      "value": ";"
  }
];

describe('astBuilder', () => {
  it('test astBuilder with rightVar', () => {
    const ast = astBuilder(testTokens);
    expect(ast).toEqual(testAst);
  });

  it('test astBuilder without rightVar', () => {
    const ast2 = astBuilder(testTokens2);
    expect(ast2).toEqual(testAst2);
  });

  it('test astBuilder with invalid char', () => {
    const ast3 = () => {
      astBuilder(testTokens3);
    };
    expect(ast3).toThrow(TypeError);
  });
});