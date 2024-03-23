import { PlanoDB } from '../server/database';

export interface ICheckout {
    plan: IPlanCheckout;
    paymentData: Partial<IAsaasPayload>;
    userAddress: IUserAddressCheckout;
    returnData: IReturnDataCheckout;
}

export interface IPlanCheckout extends PlanoDB {
    couponCode?: string;
}

export interface IUserAddressCheckout {
    bairro: string;
    cep: string;
    complemento?: string;
    localidade: string;
    logradouro: string;
    numero: string;
    uf: string;
}

// PAYLOADS PARA O ASAAS
// ========================================

export interface IAsaasCustomer {
    name: string;
    email: string;
    phone: string;
    cpfCnpj: string;
    postalCode: string;
    address: string;
    province: string;
    addressNumber: string;
    complement?: string;
}

export type IAsaasPayload = IAsaasPayloadBasic | IAsaasPayloadCreditCard;

interface IAsaasPayloadBasic {
    customer: string; // required
    billingType: 'BOLETO' | 'PIX' | 'CREDIT_CARD'; // required with default
    value: number; // required
    dueDate: string; // required in a date format, e.g. 'YYYY-MM-DD'
    description?: string; // optional, max 500 characters
    externalReference?: string; // optional, free field for search
    installmentCount?: number; // optional, only for installment billing
    totalValue?: number; // optional, total value for installment billing, if provided installmentValue is not needed
    installmentValue?: number; // optional, value of each installment
    postalService?: boolean; // optional
}

// Credit card information interfaces
interface IAsaasCreditCard {
    holderName: string;
    number: string;
    expiryMonth: string;
    expiryYear: string;
    ccv: string;
}

interface IAsaasCreditCardHolderInfo {
    name: string;
    email: string;
    cpfCnpj: string;
    postalCode: string;
    addressNumber: string;
    addressComplement?: string;
    phone: string;
    mobilePhone?: string;
    creditCardToken?: string;
    authorizeOnly?: boolean;
}

// Specific interface for credit card payment payload that extends the base interface
export interface IAsaasPayloadCreditCard extends IAsaasPayloadBasic {
    billingType: 'CREDIT_CARD';
    creditCard: IAsaasCreditCard;
    creditCardHolderInfo: IAsaasCreditCardHolderInfo;
    remoteIp: string;
}

export interface IReturnDataCheckout {
    id: string;
    invoiceNumber: string;
    invoiceUrl: string;
    dueDate: string;
    billingType: 'BOLETO' | 'PIX' | 'CREDIT_CARD';
    value: number;
    installmentNumber: number;
    installmentValue: number;

    [billingType: string]: {};
}

// RESPONSES DO ASAAS
// ========================================

interface IAsaasPIXResponse {
    encodedImage: string;
    payload: string;
    expirationDate: string;
}

interface IAsaasBoletoResponse {
    bankSlipUrl: string;
}

export interface IAsaasPaymentResponse {
    object: string;
    id: string;
    dateCreated: string;
    customer: string;
    paymentLink: string | null;
    dueDate: string;
    value: number;
    netValue: number;
    billingType: 'BOLETO' | 'PIX' | 'CREDIT_CARD';
    canBePaidAfterDueDate: boolean;
    pixTransaction: string | null;
    status: string;
    description: string;
    externalReference: string;
    originalValue: number | null;
    interestValue: number | null;
    originalDueDate: string;
    paymentDate: string | null;
    clientPaymentDate: string | null;
    installmentNumber: number | null;
    transactionReceiptUrl: string | null;
    nossoNumero: string;
    invoiceUrl: string;
    bankSlipUrl: string;
    invoiceNumber: string;
    deleted: boolean;
    postalService: boolean;
    anticipated: boolean;
    anticipable: boolean;

    installment?: string;
    PIX?: IAsaasPIXResponse;
    BOLETO?: IAsaasBoletoResponse;
}
