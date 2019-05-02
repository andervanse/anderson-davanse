import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/Models/article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  article :Article;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService
        .obterArtigo(1)
        .subscribe((resp) => {
           this.article = resp;
        }
    );

  }

}
