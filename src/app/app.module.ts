import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { SkilldComponent } from './components/skilld/skilld.component';
import { ExpComponent } from './components/exp/exp.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HobbiesComponent,
    SkilldComponent,
    ExpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'about',component:AboutComponent},
      {path:'contact',component:ContactComponent},
      {path:'hobbies',component:HobbiesComponent},
      {path:'skills',component:SkilldComponent},
      {path:'exp',component:ExpComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
