import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'article/:id', component: ArticlePageComponent },
    { path: 'workshops', component: WorkshopsComponent },
    { path: '**', component: NotFoundComponent},
];
