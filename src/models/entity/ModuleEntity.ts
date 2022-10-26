import { Module } from "../../abstracts/entities/Module";

export default class ModuleEntity {
    private id: number;
    private task: string;
    
    constructor({
        id,
        task
    }: Module) {
        this.id = id;
        this.task = task;

    }

    public getId(): number {
        return this.id;
    }

    public getTask(): string {
        return this.task;
    }

    public getModuleSummary(): string {
        return `
            ${this.task}'s info:

            Identification - ${this.id}
            Task - ${this.task}       
        `
    }
}