export class Article {
    constructor(text: string, originalUrl: string, imageUrl?: string) {
        this.imageUrl = imageUrl
        this.text = text
        this.originalUrl = originalUrl
    }

    public imageUrl?: string

    public text: string

    public originalUrl: string
}
