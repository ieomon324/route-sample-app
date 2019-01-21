import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisListComponent } from "./crisis/crisis-list/crisis-list.component";
const appRoutes1: Routes = [
  { path: 'crisis-center', component: CrisisListComponent }

 // { path: 'hero/:id',      component: HeroDetailComponent },
 /*  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent } */
];

@NgModule({
  //imports: [RouterModule.forRoot(appRoutes1)],
  //exports: [RouterModule]
})
export class AppRoutingModule { } 
