import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  mode = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    //test
    // this.authService.login('kamilkasprzak1999@gmail.com', 'toster').subscribe();
  }

  onMode() {
    this.mode = !this.mode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    if (this.mode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }
    authObs.subscribe(
      (response) => {
        console.log(response);
      },
      (errorMessage) => {}
    );
    form.reset();
  }
}
