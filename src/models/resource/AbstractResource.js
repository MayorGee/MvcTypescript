export default class AbstractResource {
    escapeHtml(unsafe) {
        let lookup = {
            '&': "&amp;",
            '"': "&quot;",
            '\'': "&apos;",
            '<': "&lt;",
            '>': "&gt;"
        };

        return unsafe.replace( /[&"'<>]/g, char => lookup[char] );
    }

    escapeHtmlFromQueryData(queryData) {
        if(typeof queryData !== 'string') {
            return queryData;
        }
            
        this.escapeHtmlFromDataSet(queryData);
    }

    escapeHtmlFromDataSet(queryData) {
        const escapedDataSet = queryData.map(obj => {
            const newDataSet = {};

            for(let key  in obj) {
                newDataSet[key] = this.escapeHtml(obj[key]);
            }

            return newDataSet;
        });
    
        return escapedDataSet;
    }
}