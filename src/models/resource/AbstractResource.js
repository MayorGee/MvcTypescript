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

    async escapeHtmlFromQueryData(queryData) {
        if(typeof queryData === 'string') {
            if(queryData.length > 1) {
                await this.escapeHtmlForMultipleDataSet(queryData);
            } else {
                await this.escapeHtmlForSingleDataSet(queryData);
            }
        } else {
            return queryData;
        }

    }

    escapeHtmlForSingleDataSet(queryData) {
        for(let property  in queryData) {
            queryData[property] = this.escapeHtml(queryData[property]);
        }

        return queryData;
    }

    async escapeHtmlForMultipleDataSet(queryData) {
        await queryData.forEach(dataSet => dataSet = this.escapeHtmlForSingleDataSet(dataSet));
    
        return queryData;
    }





}