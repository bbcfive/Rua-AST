class Program {
  constructor(statements) {
    this.statements = statements;
  }
}

class VariableDeclaration {
  constructor(name, initializer) {
    Object.assign(this, { name, initializer })
  }
}

class PrintStatement {
  constructor(argument) {
    this.argument = argument;
  }
}

class NumericExpression {
  constructor(name) {
    this.name = name;
  }
}

class IdentifierExpression {
  constructor(name) {
    this.name = name;
  }
}

class BinaryExpression {
  constructor(op, left, right) {
    Object.assign(this, { op, left, right });
  }
}

class UnaryExpression {
  constructor(op, operand) {
    Object.assign(this, { op, operand })
  }
}

module.exports = {
  Program,
  VariableDeclaration,
  PrintStatement,
  NumericExpression,
  IdentifierExpression,
  BinaryExpression,
  UnaryExpression
}