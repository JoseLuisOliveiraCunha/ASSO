"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strategy_1 = require("./strategy");
class AppInfo {
    // private constructor so that no instance is created
    constructor() {
    }
    // This is how we create a singleton object
    static getInstance() {
        // check if an instance of the class is already created
        if (!AppInfo.singleton) {
            // If not created create an instance of the class
            // store the instance in the variable
            AppInfo.singleton = new AppInfo();
        }
        // return the singleton object
        return AppInfo.singleton;
    }
    static getRenderingSystem() {
        return this.renderingSystem;
    }
    static setCanvas() {
        this.renderingSystem = new strategy_1.Canvas();
        this.renderingSystem.replaceHTMLRenderingArea();
    }
    static setSVG() {
        this.renderingSystem = new strategy_1.SVG();
        this.renderingSystem.replaceHTMLRenderingArea();
    }
}
AppInfo.renderingSystem = new strategy_1.Canvas(); //Rendering occurs in canvas, by default
exports.AppInfo = AppInfo;
