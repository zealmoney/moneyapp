import { Button, Container, Divider, Grid, Header, Segment } from "semantic-ui-react"
import { TransactionNavbar } from "./TransactionNavbar"
import { SideMenu } from "./SideMenu"
import { Footer } from "./Footer"
import { useGetRecepientsQuery } from "../features/api/apiSlice"
import { useDispatch } from "react-redux"
import { updateRecepientsInfo } from "../features/api/transactionSlice"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Recepients = () => {

    const  [loading, setLoading] = useState(false)

    const dispatch_reducer = useDispatch()
    const navigate = useNavigate()

    const {data: recepients, isSuccess} = useGetRecepientsQuery()
    let recepientList
    if(isSuccess){
        let recepient = recepients.find(e => e.account_email === sessionStorage.getItem('userId'))
        if(recepient){
            recepientList = recepients.map((r) => {
                if(r.account_email === recepient.account_email){
                    return(
                        <>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Header as='h3' content={r.fname + ' ' + r.lname} />
                                    <span>
                                        {r.street + ' ' + r.city + ' ' + r.region}
                                    </span><br/>
                                    <span>
                                        {r.email}
                                    </span>
                                </Grid.Column>
                                <Grid.Column width={8} textAlign="right" verticalAlign="middle">
                                    <Button 
                                        color="green" 
                                        size="large"
                                        loading={loading}
                                        onClick={() => sendMoneyClick(r.fname, r.mname, r.lname, r.slname, r.country,
                                            r.email, r.street, r.street2, r.region, r.city, r.postal
                                            )}
                                    >
                                        Send Money
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                            <Divider />
                        </>
                    )
                }
            })
        }
    }

    const sendMoneyClick = (
        fname, mname, lname, slname, country, email, street, street2,
            region, city, postal 
    ) => {
        dispatch_reducer(updateRecepientsInfo(
            fname, mname, lname, slname, country, email, street, street2,
            region, city, postal 
        ))
        navigate('/transaction')
        
    }

    return(
        <>
            <TransactionNavbar />
            <Segment vertical style={{padding: '4em 0em'}}>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <SideMenu />
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Segment style={{padding: '2em 2em'}}>
                                    <Header as='h2' content='Recepients' textAlign="center" />
                                    <Grid>
                                        {recepientList}
                                    </Grid>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
            <Footer />
        </>
    )
}