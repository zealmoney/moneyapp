import { Button, Container, Form, Grid, Header, Message, Segment } from "semantic-ui-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { updateAccountInfo } from "../features/api/transactionSlice"
import { TransactionNavbarMobile } from "./TransactionNavbarMobile"
import { Footer } from "../common/Footer"

export const AccountInfoMobile = () => {

    const [accountNumber, setAccountNumber] = useState('')
    const [retypeAccountNumber, setretypeAccountNumber] = useState('')
    const [checking, setChecking] = useState(false)
    const [savings, setSavings] = useState(false)
    const [loading, setLoading] = useState(false)

    const [msg, setMsg] = useState(false)
    const [msg1, setMsg1] = useState(false)
    const [msg2, setMsg2] = useState(false)
    const [msg3, setMsg3] = useState(false)

    const navigate = useNavigate()
    const dispatch_reducer = useDispatch()

    const [accountNumberError, setAccountNumberError] = useState(false)
    const [retypeAccountNumberError, setretypeAccountNumberError] = useState(false)

    const handleAccountNumberChange = e => {
        setAccountNumber(e.target.value)
        setMsg1(false)
    }
    const handleretypeAccountNumberChange = e => {
        setretypeAccountNumber(e.target.value)
        setMsg2(false)
        setMsg3(false)
    }

    const handleCheckingChange = () => {
        setChecking(true)
        setSavings(false)
        setMsg(false)
        setMsg1(false)
        setMsg2(false)
        setMsg3(false)
    }

    const handleSavingsChange = () => {
        setSavings(true)
        setChecking(false)
        setMsg(false)
        setMsg1(false)
        setMsg2(false)
        setMsg3(false)
    }
    

    const accountInfoClick = () => {
        if(checking === false && savings === false){
            setMsg(true)
        }
        else if(accountNumber === ''){
            setMsg1(true)
        }else if(retypeAccountNumber === ''){
            setMsg2(true)
        }else if(accountNumber !== retypeAccountNumber){
            setMsg3(true)
        }else{
            setLoading(true)
            dispatch_reducer(updateAccountInfo(accountNumber, retypeAccountNumber, checking, savings))
            setTimeout(() => {
                navigate('/recepientsinfo')
                //navigate('/transactionsummary')        
            }, 300)
        }
    }


    return(
        <>
            <TransactionNavbarMobile />
                <Segment vertical style={{padding: '4em 2em'}}>
                        <Grid textAlign="center">
                            <Grid.Row>
                                <Grid.Column style={{maxWidth: 600}}>
                                    <Header as='h1' content='Account Information' />
                                    <Segment
                                        style={{padding: '2em 2em'}}
                                    >
                                        {
                                            msg ?
                                            <Message 
                                                style={{textAlign: 'left'}}
                                                error
                                                header='Account type error'
                                                
                                                list={['Please select either Checking or Savings']}
                                            /> : ''
                                        }
                                        {
                                            msg1 ?
                                            <Message 
                                                style={{textAlign: 'left'}}
                                                error
                                                header='Account number error!!'
                                                
                                                list={['Please type in your account number']}
                                            /> : ''
                                        }
                                        {
                                            msg2 ?
                                            <Message 
                                                style={{textAlign: 'left'}}
                                                error
                                                header='Account number error!!'
                                                
                                                list={['Please retype your account number']}
                                            /> : ''
                                        }
                                        {
                                            msg3 ?
                                            <Message 
                                                style={{textAlign: 'left'}}
                                                error
                                                header='Account number error!!'
                                                
                                                list={['Account numbers does not match']}
                                            /> : ''
                                        }
                                        <Form size="huge">
                                            <Header textAlign="left" as='h4' content='Account Type' />
                                            <Form.Field style={{textAlign: 'left'}}>                                                
                                                <input 
                                                    type="radio"  
                                                    name="acctype"
                                                    onChange={handleCheckingChange} 
                                                /> &nbsp;&nbsp;&nbsp;
                                                <span>
                                                    <label>Checking</label>
                                                </span>                                               
                                            </Form.Field>
                                            <Form.Field style={{textAlign: 'left'}}>
                                                <input 
                                                    type="radio" 
                                                    name="acctype" 
                                                    onChange={handleSavingsChange}
                                                /> &nbsp;&nbsp;&nbsp;
                                                <span>
                                                    <label>Savings</label>
                                                </span>                                
                                            </Form.Field>
                                            <Form.Field style={{textAlign: 'left'}}>
                                                <label>Account Number</label>
                                                <Form.Input 
                                                    value={accountNumber}
                                                    error={accountNumberError}
                                                    onChange={handleAccountNumberChange}
                                                    onClick={() => setAccountNumberError(false)}
                                                />
                                            </Form.Field>
                                            <Form.Field style={{textAlign: 'left'}}>
                                                <label>Re-type Account Number</label>
                                                <Form.Input 
                                                    value={retypeAccountNumber}
                                                    error={retypeAccountNumberError}
                                                    onChange={handleretypeAccountNumberChange}
                                                    onClick={() => setretypeAccountNumberError(false)}
                                                />
                                            </Form.Field>
                                            <Form.Field>
                                                <Button 
                                                    color="green" 
                                                    size="huge"
                                                    fluid
                                                    loading={loading}
                                                    onClick={() => accountInfoClick()}
                                                >
                                                    Continue
                                                </Button>
                                            </Form.Field>
                                        </Form>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                </Segment>
            <Footer />
        </>
    )
}