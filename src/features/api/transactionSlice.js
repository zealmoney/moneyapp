import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    moneySent: 0,
    moneyReceived: 0,
    currencySent: '',
    currencyReceived: '',
    fee: 0,
    total: 0,

    deliveryBank: '',
    deliveryCash: '',
    bankname: '',
    

    accountNumber: '',
    retypeAccountNumber: '',
    checking: '',
    savings: '',

    fname: '',
    mname: '',
    lname: '',
    slname: '',
    country: '',
    email: '',
    street: '',
    street2: '',
    region: '',
    city: '', 
    postal: '',

    cardNumber: '',
    expiration: '',
    securityCode: '',
    b_fname: '',
    nickname: '',
    streetAd: '',
    apartment: '',
    b_city: '',
    b_region: '',
    zipcode: ''
}

export const transactionSlice = createSlice({
    name: 'transactions',
    initialState,

    reducers: {
        updateTransaction: {
            reducer(state, action){
                state.moneySent = action.payload.money_sent
                state.moneyReceived = action.payload.money_received
                state.currencySent = action.payload.currency_sent
                state.currencyReceived = action.payload.currency_received
                state.fee = action.payload.p_fee
                state.total = action.payload.p_total
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
        },
        updateBank: {
            reducer(state, action){
                state.deliveryBank = action.payload.delivery_bank
                state.deliveryCash = action.payload.delivery_cash
                state.bankname = action.payload.p_bankName
            
            }, 
            prepare(delivery_bank, delivery_cash, p_bankName){
                return{
                    payload: {
                        delivery_bank: delivery_bank,
                        delivery_cash: delivery_cash,
                        p_bankName: p_bankName
                    }
                }
            }
        },
        updateAccountInfo: {
            reducer(state, action){
                state.accountNumber = action.payload.account_number
                state.retypeAccountNumber = action.payload.retypeaccount_number
                state.checking = action.payload.p_checking
                state.savings = action.payload.p_savings
            },
            prepare(account_number, retypeaccount_number, p_checking, p_savings){
                return{
                    payload: {
                        account_number: account_number,
                        retypeaccount_number: retypeaccount_number,
                        p_checking: p_checking,
                        p_savings: p_savings
                    }
                }
            }
        },
        updateRecepientsInfo: {
            reducer(state, action){
                state.fname = action.payload.p_fname
                state.mname = action.payload.p_mname
                state.lname = action.payload.p_lname
                state.slname = action.payload.p_slname
                state.country = action.payload.p_country
                state.email = action.payload.p_email
                state.street = action.payload.p_street
                state.street2 = action.payload.p_street2
                state.region = action.payload.p_region
                state.city = action.payload.p_city
                state.postal = action.payload.p_postal
            },
            prepare(
                p_fname, p_mname, p_lname, p_slname, p_country, p_email,
                p_street, p_street2, p_region, p_city, p_postal
            ){
                return{
                    payload: {
                        p_fname: p_fname,
                        p_mname: p_mname,
                        p_lname: p_lname,
                        p_slname: p_slname,
                        p_country: p_country,
                        p_email: p_email,
                        p_street: p_street,
                        p_street2: p_street2,
                        p_region: p_region,
                        p_city: p_city,
                        p_postal: p_postal
                    }
                }
            }
        },
        updatePayment: {
            reducer(state, action){
                state.cardNumber = action.payload.card_number
                state.expiration = action.payload.p_expiration
                state.securityCode = action.payload.security_code
                state.b_fname = action.payload.pb_fname
                state.nickname = action.payload.nick_name
                state.streetAd = action.payload.street_ad
                state.apartment = action.payload.p_apartment
                state.b_city = action.payload.pb_city
                state.b_region = action.payload.pb_region
                state.zipcode = action.payload.zip_code
            },
            prepare(card_number, p_expiration, security_code, 
                pb_fname, nick_name, street_ad, p_apartment, pb_region,
                pb_city, zip_code)
            {
                return{
                    payload: {
                        card_number: card_number,
                        p_expiration: p_expiration,
                        security_code: security_code,
                        pb_fname: pb_fname,
                        nick_name: nick_name,
                        street_ad: street_ad,
                        p_apartment: p_apartment,
                        pb_region: pb_region,
                        pb_city: pb_city,
                        zip_code: zip_code
                    }
                }
            }
        }   
        
    }   
})

export const { 
    updateTransaction,
    updateBank, 
    updateAccountInfo, 
    updateRecepientsInfo, 
    updatePayment
} = transactionSlice.actions
export default transactionSlice.reducer