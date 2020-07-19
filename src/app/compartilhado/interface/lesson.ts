import { status } from "./status.enum";

export interface Lesson {

    code: string,
    nome: string,
    description: string,
    status: status,
    url: string
    
}
