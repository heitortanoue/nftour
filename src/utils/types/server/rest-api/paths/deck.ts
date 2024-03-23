import { DeckFreeParams } from "@rest-typing/params/DeckFreeParams";

export type DeckEndpoints = {
    '/deck/free': {
        GET: (param: DeckFreeParams) => boolean;
    };
};
