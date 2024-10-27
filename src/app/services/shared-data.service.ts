import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { personal } from '../personal';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  dataSubject = new BehaviorSubject<personal>({} as personal);

  data$ = this.dataSubject.asObservable();

  updateData( data : personal){
    this.dataSubject.next(data);
  }
  
}
