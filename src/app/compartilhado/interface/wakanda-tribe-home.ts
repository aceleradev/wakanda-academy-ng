import { Skill } from "./skill";
import { status } from "./status.enum";

export interface WakandaTribeHome {
    
    tribeCode: string,
    name: string,
    description: string,
    status: status,
    iconUrl: string,
    
}