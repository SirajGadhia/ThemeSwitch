import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }  from '../home';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, data: { name: "home"}},
    { path: 'about', loadChildren: 'app/pages/about/about.module#AboutModule' },
    { path: '', redirectTo: '/home', pathMatch: 'full' , data: { name: "redirect to home"}},
    { path: '**', component: HomeComponent , data: { name: "all other to home"}},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
 
  ]
})
export class AppRouteModule {}
