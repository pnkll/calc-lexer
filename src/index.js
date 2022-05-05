import Lexer from "./Lexer.js"
import Token from "./Token.js"

console.log('Сервер запущен')

const command = 'let x=3'

const lexer = new Lexer(command, 0, Token)

lexer.lexAnalysis()