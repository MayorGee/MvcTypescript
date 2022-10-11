import { IView } from '../abstracts/Common.js';
import AbstractView from './AbstractView.js';

export default class HomeView extends AbstractView implements IView {
    protected template = 'home';
}