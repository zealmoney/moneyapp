import { Button, Container, Divider, Grid, Header, Icon, Segment } from "semantic-ui-react"
import { useGetRecepientsQuery } from "../features/api/apiSlice"
import { useDispatch } from "react-redux"
import { updateRecepientsInfo } from "../features/api/transactionSlice"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { TransactionNavbarMobile } from "./TransactionNavbarMobile"
import { Footer } from "../common/Footer"

export const RecepientsMobile = () => {

    const  [loading, setLoading] = useState(false)

    const dispatch_reducer = useDispatch()
    const navigate = useNavigate()

    const {data: recepients, isSuccess} = useGetRecepientsQuery()
    let recepientList
    let count = 0
    if(isSuccess){
        let recepient = recepients.find(e => e.account_email === sessionStorage.getItem('userId'))
        if(recepient){
            recepientList = recepients.map((r) => {
                if(r.account_email === recepient.account_email){
                    ++count
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
                                        size="small"
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

    if(count > 0){
    return(
        <>
            <TransactionNavbarMobile />
            <Segment vertical style={{padding: '4em 0em 12em'}}>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
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
    }else{
        return(
            <>
                <TransactionNavbarMobile />
                <Segment vertical style={{padding: '4em 0em 23em'}}>
                    <Container>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                    <Header textAlign="center" as='h1' content='Recepients' />
                                    <Segment 
                                        tertiary raised 
                                        inverted color="green" secondary
                                        style={{padding: '2em 2em'}}
                                    >
                                        <Grid textAlign="center">
                                            <Header
                                               as='h3' 
                                               icon
                                               inverted
                                            >
                                                 <Icon name="user outline" circular inverted color="green" />
                                                No recipients available yet
                                            </Header>
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
}