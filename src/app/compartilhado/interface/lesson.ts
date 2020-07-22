import { status } from "./status.enum";

export interface Lesson {

    lessonCode: string,
    lessonName: string,
    description: string,
    status: status,
    link: string
    
}
