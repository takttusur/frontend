export class Article {
    constructor(
        text: string,
        originalUrl: string,
        date: Date,
        imageUrl?: string
    ) {
        this.imageUrl = imageUrl
        this.text = text
        this.originalUrl = originalUrl
        this.date = date
    }

    public imageUrl?: string

    public text: string

    public originalUrl: string

    public date: Date
}
