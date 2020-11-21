import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BookModule,
    AuthorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
