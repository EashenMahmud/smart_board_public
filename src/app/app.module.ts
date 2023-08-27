import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { PodiumComponent } from './podium/podium.component';
import { SignageComponent } from './signage/signage.component';
import { Panel65Component } from './panel65/panel65.component';
import { Panel75Component } from './panel75/panel75.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    PodiumComponent,
    SignageComponent,
    Panel65Component,
    Panel75Component,
    ContactComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
