import { IResource, QueryResponseData } from "../../abstracts/Common";

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

    // I tried using 'queryData: T extends QueryResponseData' here but it keeps asking me for a '?' and I couldn't understand where to place it
  
    public escapeHtmlFromSingleDataSet<T>(queryData: any): T {
        for(let key in queryData) {
            if(typeof queryData[key] === 'string') {
                queryData[key] = this.escapeHtml(queryData[key]);
            }
        }

        return queryData;
    }

    public escapeHtmlFromDataSet<T>(queryData : T[]): T[] {
        const escapedDataSet: T[] = queryData.map((dataSet:  T) => {
            return this.escapeHtmlFromSingleDataSet(dataSet);
        });
    
        return escapedDataSet;
    }
}