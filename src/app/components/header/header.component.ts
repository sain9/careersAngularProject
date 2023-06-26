import { Component } from '@angular/core';
import { AddedprofileService } from 'src/app/services/addedprofile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public totalItem: number = 0;
  public searchTerm: string = '' ;

  constructor(private profileService: AddedprofileService ) {}
  
  ngOnInit(): void {
    this.profileService.getProfile().subscribe(res => {
      this.totalItem = res.length;
    })
  }

  search = (event:any) => {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.profileService.search.next(this.searchTerm)
    
  }

}
