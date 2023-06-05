 export type PaymentMethod= "creditCard" | "debitCard" | "cash" | "paypal";
 export interface Payment {
    recipientName: string;
    amount: number;
    paymentMethod: PaymentMethod;
    time: Date;
    senderName: string;
    organizationName?: string;
    organizationId?: string;
 }