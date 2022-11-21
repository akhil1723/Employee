import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistraionComponent } from './registraion/registraion.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistraionComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
