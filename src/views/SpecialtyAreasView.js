import AbstractView from './AbstractView.js';

export default class SpecialtyAreasView extends AbstractView{
    constructor() {
        super();
        
        this.template = 'specialty-area';
        this.specialtyAreas = [
            {
                id: 1,
                title: 'Frontend',
                desc: 'Proin posuere arcu at est pharetra, eu vehicula purus rhoncus. Suspendisse luctus ex libero, fringilla ullamcorper mi porttitor vitae. Pellentesque a sagittis massa, ut porta leo. Aliquam sed nunc ac quam posuere pretium in at nulla. Integer id dolor et massa pharetra luctus. Nunc tempus augue eu massa ullamcorper suscipit'
            },
            {
                id: 2,
                title: 'Backend',
                desc: 'Proin posuere arcu at est pharetra, eu vehicula purus rhoncus. Suspendisse luctus ex libero, fringilla ullamcorper mi porttitor vitae. Pellentesque a sagittis massa, ut porta leo. Aliquam sed nunc ac quam posuere pretium in at nulla. Integer id dolor et massa pharetra luctus. Nunc tempus augue eu massa ullamcorper suscipit'
            }
        ];
    }

    getSpecialtyAreas() {
        return this.specialtyAreas;
    }
}