export default class MentorsController {

    execute(req, res) {
        res.sendFile(`${__dirname}/views/mentors.html`);
    }
}