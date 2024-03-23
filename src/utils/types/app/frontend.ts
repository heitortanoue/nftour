export interface IMessageBox {
    message?: string;
    type?: "error" | "success";
}

export interface ICalendarDeck {
    deckSlug: string;
    deckTitle: string;
    deckSubject: string;
    averageGrade: number;

    reviewQuestionsCount?: number;
    lastReviewDate?: Date;
}

export interface ICalendarWeek {
    [key: string]: ICalendarDeck[];
}