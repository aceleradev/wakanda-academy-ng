import { status } from "./status.enum"
import { Skill } from "./skill";

export interface WakandaTribe {
    
    code: string,
    nome: string,
    description: string,
    status: status,
    icon_url: string,
    skills: Skill[]
    
}
