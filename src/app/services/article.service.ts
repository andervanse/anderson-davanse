import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../Models/article.model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { isNullOrUndefined } from 'util';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) { }

  obterArtigo(articleId :number): Observable<Article> {
    return this.http.get<Article[]>(`${environment.apiBaseUrl}/assets/articles.json`)
        .pipe(
            map((res: any) => {                
                let article = res.map(article => this.addBaseUrlToImage(article)).filter(x => x.id == articleId)[0];

                while (!isNullOrUndefined(article) && !article.visible) {
                  article = res.map(a => this.addBaseUrlToImage(a)).filter(x => x.id == article.nextArticle.id)[0];                                    
                }

                return article;
            })
        );
  }

  obterArtigos(): Observable<Article[]> {
    return this.http.get<Article[]>(`${environment.apiBaseUrl}/assets/articles.json`)
        .pipe(
            map((res: Article[]) => {
                return res.map(article => this.addBaseUrlToImage(article)).filter(x => x.visible == true);
            })
        );
  }
  
  private addBaseUrlToImage(article: Article) : Article {

    if (article['imageUrl'] !== undefined) 
       article['imageUrl'] = environment.apiBaseUrl + article['imageUrl'];

    return article;
  }

}
