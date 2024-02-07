import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    moneySent: 0,
    moneyReceived: 0,
    currencySent: '',
    currencyReceived: '',
    fee: 0,
    total: 0
}

export const transactionSlice = createSlice({
    name: 'transactions',
    initialState,

    reducers: {
        updateTransaction: {
            reducer(state, action){

            },
            prepare(money_sent, money_received, currency_sent, currency_received, p_fee, p_total){
                return{
                    payload: {
                        money_sent: money_sent,
                        money_received: money_received,
                        currency_sent: currency_sent,
                        currency_received: currency_received,
                        p_fee: p_fee,
                        p_total: p_total

                    }
                }
            }
        }
    }
})

export const { updateTransaction } = transactionSlice.actions
export default transactionSlice.reducer