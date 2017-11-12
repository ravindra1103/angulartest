import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { routing } from './app.routing';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
