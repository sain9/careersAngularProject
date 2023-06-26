import { Component } from '@angular/core';
import { AddedprofileService } from 'src/app/services/addedprofile.service';

@Component({
  selector: 'app-addedprofile',
  templateUrl: './addedprofile.component.html',
  styleUrls: ['./addedprofile.component.scss']
})
export class AddedprofileComponent {

  public profiles : any = [];
 

  constructor(private profileService: AddedprofileService){}
  ngOnInit(): void {
    this.profileService.getProfile().subscribe(res => {
      this.profiles = res;
    })
  }

  removeItem(profile: any){
    this.profileService.removeProfile(profile);
  }

  emptycart(){
    this.profileService.removeAllProfile();
  }

}
