import { IView } from '../abstracts/Contract.js';
import AbstractView from './AbstractView.js';

export default class HomeView extends AbstractView implements IView {
    protected template = 'home';
}