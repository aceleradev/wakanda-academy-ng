import { status } from "./status.enum"
import { Skill } from "./skill";

export interface WakandaTribe {
    
    tribeCode: string,
    nome: string,
    description: string,
    status: status,
    icon_url: string,
    wakanderTribeSkills: Skill[]
    
}
