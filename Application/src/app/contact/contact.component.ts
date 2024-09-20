import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email: string = '';
  password: string = '';

  constructor(private itemService: ItemService, private router: Router) { }

  onSubmit(): void {
    const user = { email: this.email, password: this.password };
    this.itemService.login(user).subscribe(
      response => {
        console.log('Logged in successfully', response);
        // Save user information or token to session storage
        sessionStorage.setItem('user', JSON.stringify(response));
        // Redirect to note-form component upon successful login
        this.router.navigate(['/note-form']);
      },
      error => {
        console.error('Error logging in', error);
        // Handle login error, e.g., display an error message
      }
    );
  }
}
