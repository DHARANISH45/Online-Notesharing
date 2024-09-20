import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { NotelistComponent } from './notelist/notelist.component'; // Import NotelistComponent

const routes: Routes = [
  { path: '', component: HomeComponent }, // Home route
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'note-form', component: NoteFormComponent },
  { path: 'notelist', component: NotelistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
