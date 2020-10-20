import { status } from "./status.enum"
import { Skill } from "./skill";

export interface WakandaTribe {
    
    tribeCode: string,
    nameTribe: string,
    descriptionTribe: string,
    status: status,
    icon_url: string,
    completedPercentageTribe:number,
    wakanderTribeSkills: Skill[]

}
