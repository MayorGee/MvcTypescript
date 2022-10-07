import { IStringIndex } from "../../abstracts/Common";

export default class AbstractResource {
    escapeHtml(unsafe: string): string {
        return unsafe.replace(/[&<>'"]/g, char => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&apos;',
                '"': '&quot;'
              }[char] || char)
        );
    }

    escapeHtmlFromQueryData(queryData: any): any {
        if(typeof queryData !== 'string') {
            return queryData;
        }
            
        this.escapeHtmlFromDataSet(queryData);
    }

    escapeHtmlFromDataSet(queryData: any): any {
        const escapedDataSet = queryData.map((dataSet: IStringIndex) => {
            const newDataSet: IStringIndex = {};

            for(let key in dataSet) {
                newDataSet[key] = this.escapeHtml(dataSet[key]);
            }

            return newDataSet;
        });
    
        return escapedDataSet;
    }
}