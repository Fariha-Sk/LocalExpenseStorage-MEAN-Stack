import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { XpenseDataService } from '../xpense-data.service';

@Component({
  selector: 'app-addxpense',
  templateUrl: './addxpense.component.html',
  styleUrls: ['./addxpense.component.css']
})
export class AddxpenseComponent implements OnInit {
  userForm: FormGroup;

  constructor(private xpenseDataService: XpenseDataService, private router: Router) {
    this.userForm = new FormGroup({
      category: new FormControl(''),
      amount: new FormControl(''),
      date: new FormControl(''),

    });

  }

  ngOnInit(): void { }

  submit() {
    if (this.userForm.value) {
      this.xpenseDataService.createUser(this.userForm.value);
      this.router.navigate(['/dashboard']);
    }
    else {
      alert('Please fill all the fields');
    }
  }
}
