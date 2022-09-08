export default class SpecialtyAreasController {

    execute(req, res) {
        res.sendFile(`${__dirname}/views/specialty-areas.html`);
    }
}