import { Button, Container, Form, Grid, Header, Message, Segment } from "semantic-ui-react"
import { TransactionNavbar } from "./TransactionNavbar"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const AccountInfo = () => {

    const [accountNumber, setAccountNumber] = useState('')
    const [retypeAccountNumber, setretypeAccountNumber] = useState('')
    const [checking, setChecking] = useState(false)
    const [savings, setSavings] = useState(false)
    const [loading, setLoading] = useState(false)

    const [msg, setMsg] = useState(false)

    const navigate = useNavigate()

    const [accountNumberError, setAccountNumberError] = useState(false)
    const [retypeAccountNumberError, setretypeAccountNumberError] = useState(false)

    const handleAccountNumberChange = e => setAccountNumber(e.target.value)
    const handleretypeAccountNumberChange = e => setretypeAccountNumber(e.target.value)

    const handleCheckingChange = () => {
        setChecking(true)
        setSavings(false)
        setMsg(false)
    }

    const handleSavingsChange = () => {
        setSavings(true)
        setChecking(false)
        setMsg(false)
    }
    

    const accountInfoClick = () => {
        if(checking === false && savings === false){
            setMsg(true)
        }
        else if(accountNumber === ''){
            setAccountNumberError({content: 'Empty Fields'})
        }else if(retypeAccountNumber === ''){
            setretypeAccountNumberError({content: 'Empty Fields'})
        }else if(accountNumber !== retypeAccountNumber){
            setretypeAccountNumberError({content: 'Account numbers does not match'})
        }else{
            setLoading(true)
            setTimeout(() => {
                navigate('/recepientsinfo')        
            }, 300)
        }
    }


    return(
        <>
            <TransactionNavbar />
                <Segment vertical>
                    <Container>
                        <Grid textAlign="center">
                            <Grid.Row>
                                <Grid.Column style={{maxWidth: 600}}>
                                    <Segment>
                                        <Header as='h4' content='Account Information' />
                                        {
                                            msg ?
                                            <Message 
                                                style={{textAlign: 'left'}}
                                                error
                                                header='Account type error'
                                                
                                                list={['Please select either Checking or Savings']}
                                            /> : ''
                                        }
                                        <Form>
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
                    </Container>
                </Segment>
        </>
    )
}