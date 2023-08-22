import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { PodiumComponent } from './podium/podium.component';
import { SignageComponent } from './signage/signage.component';
import { ContactComponent } from './contact/contact.component';
import { Panel65Component } from './panel65/panel65.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'podium', component: PodiumComponent },
  { path: 'signage', component: SignageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'panel65', component: Panel65Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
