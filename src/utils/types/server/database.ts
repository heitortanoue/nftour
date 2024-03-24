export interface UsuarioDB {
    _id: string;
    email: string;
    photo?: string;

    _createdAt: Date;
    _updatedAt: Date;
}

export interface QRCodeDB {
    _id: string;
    location: string;

    _createdAt: Date;
    _updatedAt: Date;
}

export interface CouponDB {
    _id: string;
    code: string;
    promotion: string;

    _createdAt: Date;
}

export interface PromotionDB {
    _id: string;
    title: string;
    photo: string;
    description: string;
    cost: number;

    _createdAt: Date;
}