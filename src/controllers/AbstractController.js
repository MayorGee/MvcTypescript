export default class AbstractController {
    
    renderPage(res, viewClass) {
        res.render(viewClass.getTemplate(), { 'this': viewClass });
    }    
}