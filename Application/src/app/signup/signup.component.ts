import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  constructor(private itemService: ItemService, private router: Router) { }

  onSubmit(): void {
    const user = { email: this.email, password: this.password };
    this.itemService.signup(user).subscribe(
      response => {
        console.log('Signed up successfully', response);
        // Redirect to home component upon successful signup
        this.router.navigate(['/']);
      },
      error => {
        console.error('Error signing up', error);
        // Handle signup error, e.g., display an error message
      }
    );
  }
}
