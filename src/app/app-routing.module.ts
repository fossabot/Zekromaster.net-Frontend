import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageManagerComponent } from './page-manager/page-manager/page-manager.component';
import { PageManagerModule } from './page-manager/page-manager.module';
import { NotFoundComponent } from './core/notfound/notfound.component';
import { IndexPageComponent } from './core/index-page/index-page.component';

const routes: Routes = [
  { path: '', component: IndexPageComponent, pathMatch: 'full'},
  { path: '404', component: NotFoundComponent },
  { path: ':id', component: PageManagerComponent },
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PageManagerModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
