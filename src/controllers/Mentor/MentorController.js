import MentorView from '../../views/mentor/MentorView.js';
import MentorResource from '../../models/resource/MentorResource.js';

export default class MentorController {
    async execute(req, res) {
        const mentorView = new MentorView();
        const mentorResource = new MentorResource();
        const id = req.query.id;

        if (!id) {
            res.redirect('/mentors');

            return;
        }

        const mentorRes = await mentorResource.getMentorById(id);
        const mentor = mentorRes[0];

        mentorView.setMentor(mentor);

        res.send(`
            Mentor Name: ${mentor.First_Name} <br/>
            Mentor Email: ${mentor.Email} <br/>
            Mentor Contact: ${mentor.Phone_No} <br/>
        `);
    }
}
