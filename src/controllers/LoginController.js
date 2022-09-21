import AbstractController from './AbstractController.js';

import LoginView from '../views/LoginView.js';

export default class LoginController extends AbstractController {
    async handleGet(req, res) {
        const loginView = new LoginView();

        loginView.setTemplate('login');
        this.renderPage(res, loginView);
    }

    async handlePost(req, res) {
        // приняли post параметры
        // проверили на соответствии email и пароль через запрос в бд
        // если неверно, вывели ошибку
        // если верно - сохранили данные о пользователе в сессию, и дальше работаетм с ней.
        
        req.session.isLoggedIn = true;
        req.session.userId = 30;
        res.redirect('/');
    }
}