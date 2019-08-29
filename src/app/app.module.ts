import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MovdisplayComponent } from './movdisplay/movdisplay.component';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
import {Routes,RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';

const appRoutes:Routes=[
  {path:'',component:MovdisplayComponent},
  {path:'view',component:ViewComponent},
  {path:'search',component:SearchComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    MovdisplayComponent,
    ViewComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }
