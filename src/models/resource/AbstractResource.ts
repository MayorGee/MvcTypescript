import { IResource } from "../../abstracts/Contract";

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
  
    public escapeHtmlFromSingleDataSet<T>(queryData: T): T {
        for(let key in queryData) {
            if(typeof queryData[key] === 'string') {
                // @ts-ignore
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