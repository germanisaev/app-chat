import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: 'login', pathMatch:'full' },
  { path: "login", component: LoginComponent },
  { path: "room", component: ContentComponent, canActivate: [AuthGuard] },
  { path: "room/:id", component: ContentComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
