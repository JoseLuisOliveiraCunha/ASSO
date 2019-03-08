/// <reference path="interpreter.ts" />
var InterpreterPattern;
(function (InterpreterPattern) {
    function test(str) {
        var instruction = new InterpreterPattern.InstructionExpression();
        return instruction.interpret(str);
    }
    InterpreterPattern.test = test;
    function greeter(person) {
        return "Hello, " + person;
    }
    var user = "Jane User";
    document.body.innerHTML = String(test("draw square 2 2 4"));
})(InterpreterPattern || (InterpreterPattern = {}));
