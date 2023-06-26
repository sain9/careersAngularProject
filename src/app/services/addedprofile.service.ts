import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddedprofileService {

  public addedProfileList : any = [];
  public profileList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }

  getProfile() {
    return this.profileList.asObservable();
  }

  setProfile(profile: any){
    this.addedProfileList.push(...profile);
    this.profileList.next(profile);
  }

  addToProfileList(profile: any){
    this.addedProfileList.push(profile);
    this.profileList.next(this.addedProfileList);
    
    console.log(this.addedProfileList);
    
  }

  

  removeProfile(profile: any){
    this.addedProfileList.map((a: any, index: any) => {
      if(profile.id === a.id){
        this.addedProfileList.splice(index, 1);
      }
    });
    this.profileList.next(this.addedProfileList);
  }

  removeAllProfile() {
    this.addedProfileList = [];
    this.profileList.next(this.addedProfileList);
  }
 
}
