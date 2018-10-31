export type PaymentModel = {
    card_number: number,
    holder_name: string,
    expire_month: number,
    expire_year: number,
    cvv: number,
    amount: number
};