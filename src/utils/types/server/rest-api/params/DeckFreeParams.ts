import Ajv from 'ajv';

const ajv = new Ajv({
    coerceTypes: true
});

export type DeckFreeParams = {
    deckSlug: string;
};

const DeckFreeParamsSchema = {
    type: 'object',
    properties: {
        deckSlug: {
            type: 'string'
        }
    },
    required: ['deckSlug'],
    additionalProperties: false
};

export const validateDeckFreeParams = ajv.compile<DeckFreeParams>(DeckFreeParamsSchema);
