import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../Models/article.model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) { }

  obterArtigo(articleId :number): Observable<Article> {
    return this.http.get<Article[]>(`${environment.apiBaseUrl}/assets/articles.json`)
        .pipe(
            map((res: any) => {                
                return res.filter(x => x.id == articleId)[0];
            })
        );
  }

  obterArtigos(): Observable<Article[]> {
    return this.http.get<Article[]>(`${environment.apiBaseUrl}/assets/articles.json`)
        .pipe(
            map((res: Article[]) => {
                return res;
            })
        );
  }  
}
