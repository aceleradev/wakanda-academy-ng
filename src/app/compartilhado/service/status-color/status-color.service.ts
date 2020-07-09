import { Injectable } from '@angular/core';
import { status } from '../../interface/status.enum';

@Injectable({
  providedIn: 'root'
})
export class StatusColorService {

  status: string;

  constructor() { }

  checkStatus(status: status) {
    
    switch (status.toString()) {
      case "DOING":
        return {"bg-primary": true};
      case "DONE":
        return {"bg-success": true};
      case "CLOSED":
        return {"bg-danger": true};
    }
  }
}
