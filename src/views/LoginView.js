import AbstractView from './AbstractView.js';

export default class LoginView extends AbstractView {
    cookie = null;

    setCookie(cookie) {
        this.cookie = cookie;
        // return this;
    }
    
    getCookie() {
        return this.cookie;
    }
}