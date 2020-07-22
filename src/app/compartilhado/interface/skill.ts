import { status } from "./status.enum";
import { Lesson } from "./lesson";

export interface Skill {

    skillCode: string,
    skillName: string,
    description: string,
    skillStatus: status,
    wakanderTribeSkillLessons: Lesson[]
    
}
