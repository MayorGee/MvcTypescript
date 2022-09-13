import HomeView from '../views/HomeView.js';

export default class HomeController {
    execute(req, res) {
        const homeView = new HomeView();
        
        res.render( homeView.getTemplate(), { 'this': homeView });
    }
}