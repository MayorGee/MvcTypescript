export default class InternshipsController {

    execute(req, res) {
        res.sendFile(`${__dirname}/views/internships.html`);
    }
}