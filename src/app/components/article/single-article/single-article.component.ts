import { Component, OnInit, Output, Input } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/Models/article.model';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {

  article: Article;
  @Input() identificador: number;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('identificador: ', this.identificador);
    if (this.identificador > 0) {
      this.obterArtigo(this.identificador);
    } else {
      this.route.params.subscribe((params) => {
        this.obterArtigo(params['id']);
      });
    }

  }

  private obterArtigo(identificador: number) {
    this.articleService.obterArtigo(identificador).subscribe((resp) => {
      this.article = resp;
    });

  }

}
