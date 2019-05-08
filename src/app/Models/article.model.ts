export class Article {
    id: number;
    imageUrl: string;
    visible: boolean;
    title: string;
    summary: string;
    body: string;
    nextArticle: NextArticle;
}

export class NextArticle {
    id: number;
    title: string;
}