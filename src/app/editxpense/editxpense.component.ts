import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { XpenseDataService } from '../xpense-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editxpense',
  templateUrl: './editxpense.component.html',
  styleUrls: ['./editxpense.component.css']
})
export class EditxpenseComponent implements OnInit {
  userForm: FormGroup;

  constructor(private activateRoute:ActivatedRoute,
    private xpenseDataService:XpenseDataService,
    private router:Router,) {

    this.userForm = new FormGroup({
      category: new FormControl(''),
      amount: new FormControl(''),
      date: new FormControl(''),
    });
const data = this.xpenseDataService.getUserById
(this.activateRoute.snapshot.params['id']);
  this.userForm.setValue(data);
   }

  ngOnInit(): void {
  }

update(){
this.xpenseDataService.updateUser
(this.activateRoute.snapshot.params['id'],this.userForm.value);
this.router.navigate(['/dashboard']);
}
}
