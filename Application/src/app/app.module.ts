import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { NotelistComponent } from './notelist/notelist.component';
import { ItemService } from './item.service';
import { NoteService } from './note.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    AboutComponent,
    ContactComponent,
    NoteFormComponent,
    NotelistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ItemService, NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
