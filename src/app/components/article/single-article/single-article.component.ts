import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/Models/article.model';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {

  article :Article;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((params) => {
      this.articleService.obterArtigo(params['id']).subscribe((resp) => {
        this.article = resp;
      });

    });
  }

}
