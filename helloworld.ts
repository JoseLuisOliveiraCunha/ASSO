/// <reference path="interpreter.ts" />
namespace InterpreterPattern {

    export function test(str : String){
        var instruction : InstructionExpression = new InstructionExpression();
        return instruction.interpret(str);
    }

    function greeter(person) {
        return "Hello, " + person;
    }

    let user = "Jane User";

    document.body.innerHTML = String(test("draw square 2 2 4"));

}