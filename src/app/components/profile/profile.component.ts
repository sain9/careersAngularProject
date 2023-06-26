import { Component } from '@angular/core';
import { AddedprofileService } from 'src/app/services/addedprofile.service';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  public profileList: any;
  public filterCategory: any;
  searchKey: string = "";

  constructor(private api: ApiService, private profileService: AddedprofileService){ }
  
  ngOnInit(): void {
    this.api.getProfile().subscribe(res => {
      this.profileList = res;
      this.filterCategory = res;

      this.profileList.forEach((a: any)=> {
        //renaming the category from men's/women's clothing to fashion
       
        // assiging new fields to the api quantity and total 
       // Object.assign(a, {quantity: 1, total: a.price}); 
        if(a.registered.age <= 5){
          a.jobrole = "software dev Intern"
          // console.log(a.registered.age);  
        }
        else if(a.registered.age > 5 && a.registered.age <= 10){
          a.jobrole = "junior software dev"
          
        }
        else if(a.registered.age > 10 && a.registered.age <= 15){
          a.jobrole = "senior software dev"
          
        }
        else if(a.registered.age > 15 && a.registered.age <= 20){
          a.jobrole = "devOps"  
        }
        else{
          a.jobrole = "devOps,experienced dev" 
        }
         
      });
      console.log(this.profileList);
    });

    this.profileService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
    
  }

  addtoProfile = (item: any) => {
    this.profileService.addToProfileList(item);
  }

  //clicking and navigating to a particular category such as fashion,jewellery etc
  filterForCategories = ( category: string) => {
    this.filterCategory = this.profileList.filter((a: any) => {
      if(a.category == category || category == ''){
        return a;
      }
    });
  }
  

  
}
