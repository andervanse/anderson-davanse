import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import { fadeInOutAnimation } from 'src/app/services/animation';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService
        .obterArtigos()
        .subscribe((resp) => {
           this.articles = resp;
        }
    );    
  }

}