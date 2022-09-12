import HomeView from '../views/HomeView.js';

export default class HomeController {
    execute(req, res) {
        const homeView = new HomeView();

        const homeTemplate = homeView.getTemplate();
        
        res.render( homeTemplate, { 'this': homeView });
    }
}