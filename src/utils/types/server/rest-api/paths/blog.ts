import { BlogPostNewParams } from '@rest-typing/params/BlogPostNewParams';
import { BlogPostEditParams } from '@rest-typing/params/BlogPostEditParams';

export type BlogEndpoints = {
    '/blog/post/new': {
        POST: (param: BlogPostNewParams) => void;
    };

    '/blog/post/edit': {
        POST: (param: BlogPostEditParams) => void;
    };
};
