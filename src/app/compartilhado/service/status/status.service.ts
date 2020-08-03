import { Injectable } from '@angular/core';
import { status } from '../../interface/status.enum';
import { Lesson } from '../../interface/lesson';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  status: string;

  constructor() { }

  checkStatus(status: status) {
    
    switch (status.toString()) {
      case "DOING":
        return {"bg-primary": true};
      case "DONE":
        return {"bg-success": true};
      case "TODO":
        return {"bg-warning": true};
    }
  }
  isDoing(lesson:Lesson):boolean {
    return lesson.status == status.DOING;
  }

  isDone(lesson:Lesson):boolean {
    return lesson.status == status.DONE;
  }

  isTodo(lesson:Lesson):boolean {
    return lesson.status == status.TODO;
  }
}
