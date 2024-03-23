import Ajv from 'ajv';
import { PerguntaProgressoDB } from '../../database';

const ajv = new Ajv({
    coerceTypes: true
});

export type UserProgressSaveParams = {
    deckId: string;
    questions: PerguntaProgressoDB[];
    percentage: number;
    average: number;
};

const UserProgressSaveParamsSchema = {
    type: 'object',
    properties: {
        deckId: {
            type: 'string'
        },
        questions: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    blockId: {
                        type: 'string'
                    },
                    spacedRepetition: {
                        type: 'object',
                        properties: {
                            interval: {
                                type: 'number'
                            },
                            repetition: {
                                type: 'number'
                            },
                            eFactor: {
                                type: 'number'
                            },
                            nextReviewDate: {
                                type: ['string', 'null'],
                            }
                        },
                        required: ['interval', 'repetition', 'eFactor'],
                        additionalProperties: false
                    },
                    lastAnswer: {
                        type: 'number'
                    }
                },
                required: ['blockId', 'spacedRepetition', 'lastAnswer'],
                additionalProperties: false
            }
        },
        percentage: {
            type: 'number'
        },
        average: {
            type: 'number'
        }
    },
    required: ['deckId', 'questions', 'percentage', 'average'],
    additionalProperties: false
};



export const validateUserProgressSaveParams = ajv.compile<UserProgressSaveParams>(
    UserProgressSaveParamsSchema
);
