import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { GroupTravelComponent } from './group-travel/group-travel.component';
import { GroupTrainingComponent } from './group-training/group-training.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'group-travel', component: GroupTravelComponent },
  { path: 'group-training', component: GroupTrainingComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'no-page-found', component: NoPageFoundComponent } 
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
