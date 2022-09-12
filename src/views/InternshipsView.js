import AbstractView from './AbstractView.js';

export default class InternshipsView extends AbstractView {
    constructor() {
        super();
        
        this.template = 'internships';
        this.internships = [
            {
                id: 1,
                year: '2015',
                startDate: '2nd june',
                endDate: '3rd Dec'
            },
            {
                id: 2,
                year: '2017',
                startDate: '5th May',
                endDate: '6th Oct'
            },
            {
                id: 3,
                year: '2019',
                startDate: '14th February',
                endDate: '10th Aug'
            },
            {
                id: 4,
                year: '2021',
                startDate: '10th August',
                endDate: '28th Dec'
            }
        ];
    }

    getInternships() {
        return this.internships;
    }
}