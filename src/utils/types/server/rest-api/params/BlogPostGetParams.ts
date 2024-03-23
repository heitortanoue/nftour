import Ajv from 'ajv';

const ajv = new Ajv({
    coerceTypes: true
});

export type BlogPostGetParams = {
    slug: string;
};

const BlogPostGetParamsSchema = {
    type: 'object',
    properties: {
        slug: {
            type: 'string'
        }
    },
    required: ['slug'],
    additionalProperties: false
};

export const validateBlogPostGetParams = ajv.compile<BlogPostGetParams>(BlogPostGetParamsSchema);
