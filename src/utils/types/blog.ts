export interface BlogPostDB {
    _id: string
    title: string
    slug: string
    date: string
    content: string
    excerpt: string
    cover: string
}

export interface BlogPost extends BlogPostDB { }