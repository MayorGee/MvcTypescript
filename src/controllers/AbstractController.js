import Database from '../database.js';

export default class AbstractController {
    constructor () {
        this.view = '';
        this.query = '';
    }

    async execute(req, res) {

        const data = await Database.runQuery(this.query);      

        this.setData(data);

        res.render(this.view.getTemplate(), { 'this': this.view});
    }

    async setData() { }
}