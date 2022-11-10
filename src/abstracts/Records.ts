import { Intern } from './entities/Intern.js';
import { Internship } from './entities/Internship.js';
import { Mentor } from './entities/Mentor.js';
import { Module } from './entities/Module.js';
import { SpecialtyArea } from './entities/SpecialtyArea.js';
import { Task } from './entities/Task.js';

export type QueryDataType = string | number | Date;
export type QueryPropertyType = any;

export type QueryData = Record<QueryPropertyType,QueryDataType>

export type ResponseDataType = any;
export type ResponsePropertyType = string;

export type ResponseData = Record<ResponsePropertyType,ResponseDataType>

export type Entity = Intern | Internship | Mentor | Task | Module | SpecialtyArea;
export type EntityById = Record<number, Entity | undefined>