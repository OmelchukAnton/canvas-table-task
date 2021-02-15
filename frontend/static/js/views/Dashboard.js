import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }
    async getHtml() {
        return `
            <h1>Welcome</h1>
            <p>this is result my test task</p>
            <div>
                <a href="/canvas" data-link>Canvas task</a>
            </div>
            <div>
                <a href="/table" data-link> Table task</a>
            </div>
        `;
    }

}