import { IResource, IObjectStringIndex } from "../../abstracts/Common";

export default class AbstractResource implements IResource{
    public escapeHtml(unsafe: string): string {
        return unsafe.replace(/[&<>'"]/g, char => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&apos;',
                '"': '&quot;'
              }[char] || char)
        );
    }

    public escapeHtmlFromQueryData(queryData: any): any {
        if(typeof queryData !== 'string') {
            return queryData;
        }
            
        this.escapeHtmlFromDataSet(queryData);
    }

    public escapeHtmlFromDataSet(queryData: any): any {
        const escapedDataSet = queryData.map((dataSet: IObjectStringIndex) => {
            const newDataSet: IObjectStringIndex = {};

            for(let key in dataSet) {
                newDataSet[key] = this.escapeHtml(dataSet[key]);
            }

            return newDataSet;
        });
    
        return escapedDataSet;
    }
}