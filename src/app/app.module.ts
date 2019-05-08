import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppNavbarComponent } from './components/navbar/navbar.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleService } from './services/article.service';
import { ArticleListComponent } from './components/article/article-list/article-list.component';
import { SingleArticleComponent } from './components/article/single-article/single-article.component';
import { ContactComponent } from './components/contact/contact.component';


const appRouter = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'articles', component: ArticleListComponent },
  { path:'articles/:id', component: SingleArticleComponent },
  { path:'contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent, 
    HomeComponent,
    ArticleComponent,
    ArticleListComponent,
    SingleArticleComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
