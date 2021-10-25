import { rendererTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { XpenseDataService } from '../xpense-data.service';

@Component({
  selector: 'app-xpenselist',
  templateUrl: './xpenselist.component.html',
  styleUrls: ['./xpenselist.component.css']
})
export class XpenselistComponent implements OnInit {
data=[];


  constructor(private xpenseDataService:XpenseDataService) {
    this.data = this.xpenseDataService.getUser();
   }

  ngOnInit(): void {
  }

  deleteUser(id){
this.xpenseDataService.deleteUser(id);
  }

}


