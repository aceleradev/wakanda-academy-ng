import { WakanderTribeGoalDTO } from "./wakander-tribe-dto";

export interface WakanderGoal {
    wakanderCode:string,
    weeklyGoalStudyHours: number,
    nextTribeGoal: WakanderTribeGoalDTO
}
