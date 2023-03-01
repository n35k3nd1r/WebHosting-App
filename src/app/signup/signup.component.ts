import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgForm } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  user: User = new User();

  constructor() {
    constructor(private translate: TranslateService) { }
  }
  
  onSubmit() {
    console.log('User:', this.user);
  }
}
