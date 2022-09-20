export default class AbstractController {
    async execute(req, res) {
        if (req.method === 'GET') {
            this.handleGet(req, res);
        } else if (req.method === 'POST') {
            this.handlePost(req, res);
        }
    }

    handleGet() { }

    handlePost() { }
    
    renderPage(res, viewClass) {
        res.render(viewClass.getTemplate(), { 'this': viewClass });
    }
    
    async isIdNumber(id) {
        console.log(id);
        return (typeof id === 'number');   
    }

    async handleIdError(id, res) {
        let errorText = 'Invalid id entered';
        console.log('A');
        if (!id) {
            console.log('B');
            errorText = 'No Id entered';
        }

        console.log('C');

        res.status(500).send(errorText);

        console.log('D');
    }
}