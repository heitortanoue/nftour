import Ajv from 'ajv';
import { BlogPostDB } from '@typing';

const ajv = new Ajv({
    coerceTypes: true
});

ajv.addKeyword({
    keyword: 'isNotEmpty',
    validate: function validate(schema, data) {
        if (schema) {
            const valid = typeof data === 'string' && data.trim() !== '';
            if (!valid) {
                (validate as any).errors = [
                    {
                        keyword: 'isNotEmpty',
                        message: 'this field should not be empty',
                        params: { keyword: 'isNotEmpty' }
                    }
                ];
                return false;
            }
            return true;
        } else return true;
    },
    errors: true
});

export type BlogPostNewParams = Omit<BlogPostDB, '_createdAt' | '_updatedAt' | '_id'>;

const BlogPostNewParamsSchema = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
            isNotEmpty: true
        },
        slug: {
            type: 'string',
            isNotEmpty: true
        },
        description: {
            type: 'string',
            isNotEmpty: true
        },
        authorId: {
            type: 'string',
            isNotEmpty: true
        },
        topic: {
            type: 'string',
            isNotEmpty: true
        },
        cover: {
            type: 'string',
            isNotEmpty: true
        },
        content: {
            type: 'string',
            isNotEmpty: true
        },
        status: {
            type: 'string',
            enum: ['published', 'draft']
        },
        questions: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    question: {
                        type: 'string',
                        isNotEmpty: true
                    },
                    answer: {
                        type: 'string',
                        isNotEmpty: true
                    }
                },
                required: ['question', 'answer'],
                additionalProperties: false
            }
        }
    },
    required: ['title', 'slug', 'description', 'authorId', 'topic', 'cover', 'content'],
    additionalProperties: false
};

export const validateBlogPostNewParams = ajv.compile<BlogPostNewParams>(BlogPostNewParamsSchema);
