import { Field } from "./field";

export interface IErrorResponse {
    title?: string;
    code?: string;
    message?: string;
    details?: string;
    messageCode?: string;
    fields: Field[];
}