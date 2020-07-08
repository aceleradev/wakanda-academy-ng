import { status } from "./status.enum";
import { Lesson } from "./lesson";

export interface Skill {

    code: string,
    nome: string,
    description: string,
    status: status,
    lessons: Lesson[]
    
}
