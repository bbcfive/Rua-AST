/* eslint-disable no-unused-vars */
const fs = require('fs');
const ohm = require('ohm-js');
const ast = require('./ast.js');
const myGrammar = ohm.grammar(String.raw`Rua {
  Program   = Statement+
  Statement = let id "=" Exp                  --variable
            | id "=" Exp                      --assign
            | print Exp                       --print
  instruction = "[" instruction* "]"                 -- loop
              | simpleInstruction
  simpleInstruction =  "," | "." | "+" | "-" | "<" | ">"
  Exp       = Exp ("+" | "-") Term            --binary
            | Term
  Term      = Term ("*"| "/") Factor          --binary
            | Factor
  Factor    = id
            | num
            | "(" Exp ")"                     --parens
            | ("-" | abs | sqrt) Factor       --unary
  num       = digit+ ("." digit+)?
  let       = "let" ~alnum
  print     = "print" ~alnum
  abs       = "abs" ~alnum
  sqrt      = "sqrt" ~alnum
  keyword   = let | print | abs | sqrt
  id        = ~keyword letter alnum*
  space    += "//" (~"\n" any)* ("\n" | end)  --comment
}`);

const astBuilder = myGrammar.createSemantics().addOperation("ast", {
  Program(body) {
    return new ast.Program(body.ast())
  },
  Statement_variable(_let, id, _eq, initializer) {
    return new ast.VariableDeclaration(id.sourceString, initializer.ast())
  },
  Statement_print(_print, argument) {
    return new ast.PrintStatement(argument.ast())
  },
  Exp_binary(left, op, right) {
    return new ast.BinaryExpression(op.sourceString, left.ast(), right.ast())
  },
  Term_binary(left, op, right) {
    return new ast.BinaryExpression(op.sourceString, left.ast(), right.ast())
  },
  id(id, source) {
    return new ast.IdentifierExpression(this.sourceString)
  },
  num(_whole, _point, _fraction) {
    return new ast.NumericExpression(this.sourceString)
  },
  Factor_unary(op, operand) {
    return new ast.UnaryExpression(op.sourceString, operand.ast())
  },
  Factor_parens(_open, expression, _close) {
    return expression.ast()
  },
});

const parse = (sourceCode) => {
  const match = myGrammar.match(sourceCode);
  if (!match.succeeded()) {
    throw new Error(match.message);
  }

  return astBuilder(match).ast();
}

module.exports = parse;