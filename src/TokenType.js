export default class TokenType {
    constructor(name, regex){
        this.name = name,
        this.regex = regex
    }
}

export const tokenTypesList = {
    'SPACE': new TokenType('SPACE', '\\n\\t\\r'),
    'VAR': new TokenType('VAR', 'var'),
    'LET': new TokenType('LET', 'let'),
    'FUNCTION': new TokenType('FUNCTION', 'fn'),
    'PRINT': new TokenType('PRINT', 'print'),
    'PRINTVARS': new TokenType('PRINTVARS', 'printvars'),
    'PRINTFNS': new TokenType('PRINTFNS', 'printfns'),
    'ASSIGN': new TokenType('ASSIGN', '='),
    'PLUS': new TokenType('PLUS', '+'),
    'MINUS': new TokenType('MINUS', '-'),
    'MULTIPLY': new TokenType('MULTIPLY', '*'),
    'DIVISION': new TokenType('DIVISION', '/'),
    'VARIABLE': new TokenType('VARIABLE', '[a-z]*')
}