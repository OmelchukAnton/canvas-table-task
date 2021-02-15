import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Table");
    }
    async getHtml() {
        return `
            <h1>Table</h1>
            <div class="container">
                <table id="tableData">
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Edit</th>
                        <th>Del</th>
                    </tr>
                </table>
                <div>
                    <button>Add</button>
                </div>
            </div>
            <div id="data">
                <input type="text" id="name" placeholder="Enter Name">
                <input type="tel" id="phone" placeholder="Enter Phone">
                <span id="notice"></span>
            </div>
        `;
    }

}