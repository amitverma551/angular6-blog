import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:"", component:BlogListComponent},
  {path:"blog-detail/:id", component:BlogDetailComponent},
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"sign-in", component:SignInComponent},
  {path:"sign-up", component:SignUpComponent},
  {path:"contact", component:ContactComponent},
  {path:"**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
                                 BlogListComponent,
                                 BlogDetailComponent,
                                 PageNotFoundComponent,
                                 AboutComponent,
                                 ContactComponent,
                                 SignInComponent,
                                 SignUpComponent
                                ]
