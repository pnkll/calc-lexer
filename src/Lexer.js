import { tokenTypesList } from "./TokenType"

export default class Lexer {
    constructor(command, pos, tokenList){
        this.command = command,
        this.pos = pos,
        this.tokenList = tokenList
    }

    lexAnalysis(){
        while (this.nextToken()){
            console.log('Token')
        }
        return this.tokenList
    }

    nextToken(){
        if (this.pos >= this.command.length){
            return false
        }

        const tokenTypesValues = Object.values(tokenTypesList)

        for (let i = 0; i < tokenTypesValues.length; i++){
            const tokenType = tokenTypesValues[i];
            const regex = new RegExp('^' + tokenType.regex);
            const result = this.command.substr(this.pos).match(regex)
            console.log(this.pos)
        }
    }
}