import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Canvas");
    }
    async getHtml() {
        return `
            <h1>Canvas Task</h1>
            <canvas id="firstCanvas" width="600" height="600" style="border: 1px solid #000"></canvas>
            <canvas id="secondCanvas" width="600" height="50" style="border: 1px solid #000"></canvas>
        `;
    }
}