import { UserProgressGetParams } from '@rest-typing/params/UserProgressGetParams';
import { UserProgressSaveParams } from '@rest-typing/params/UserProgressSaveParams';

import type { DeckInfoWithProgress, PerguntaProgressoDB } from '@typing';

export type UserProgressEndpoints = {
    '/user/progress/get': {
        GET: (params: UserProgressGetParams) => PerguntaProgressoDB[];
    };

    '/user/progress/save': {
        POST: (params: UserProgressSaveParams) => void;
    };

    '/user/progress/deck': {
        GET: (params: void) => (DeckInfoWithProgress['progress'] & {
            deckId: string;
        })[];
    };
};
