"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linked_list_typescript_1 = require("linked-list-typescript");
const interpreter_1 = require("./interpreter");
const singleton_1 = require("./singleton");
class Command {
    constructor() {
        this.commandStack = new linked_list_typescript_1.LinkedList();
        this.redoStack = new linked_list_typescript_1.LinkedList();
    }
    execute(context) {
        var me = new interpreter_1.MasterExpression();
        if (!me.interpret(context)) {
            this.redraw();
            console.log("Error interpreting command! Redrawing previous state");
            return;
        }
        var currentCommand;
        if (this.commandStack.length == 0)
            currentCommand = new Memento(context);
        else
            currentCommand = new Memento(context, this.commandStack.head);
        this.commandStack.prepend(currentCommand);
        this.redoStack = new linked_list_typescript_1.LinkedList();
    }
    undo() {
        if (this.commandStack.length == 0)
            return;
        var m = this.commandStack.removeHead();
        console.log("going to eliminate state: ", m);
        console.log("new stack: ", this.commandStack);
        this.redoStack.prepend(m);
        this.redraw();
    }
    redo() {
        if (this.redoStack.length == 0)
            return;
        var m = this.redoStack.removeHead();
        this.commandStack.prepend(m);
        this.redraw();
    }
    getCurrentState() {
        return this.commandStack.head;
    }
    redraw() {
        //limpar o canvas primeiro
        singleton_1.AppInfo.getRenderingSystem().cleanDrawBoard();
        var m = this.commandStack.head;
        var me = new interpreter_1.MasterExpression();
        for (var context of m.getContextList()) {
            console.log("GOING TO RERUN INSTRUCTION: ", context);
            me.interpret(context);
        }
    }
}
exports.Command = Command;
class Memento {
    constructor(context, previous) {
        this.contextList = [];
        if (previous != null)
            this.contextList = previous.getContextList();
        this.contextList.push(context);
    }
    getContextList() {
        return this.contextList;
    }
}
