import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component Routes
import { JoblistingComponent } from './core/joblisting/joblisting.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: JoblistingComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
