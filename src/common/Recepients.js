import { Button, Container, Divider, Grid, Header, Segment } from "semantic-ui-react"
import { TransactionNavbar } from "./TransactionNavbar"
import { SideMenu } from "./SideMenu"
import { Footer } from "./Footer"

export const Recepients = () => {

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
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header as='h3' content='Saheed Alao' />
                                                <span>
                                                    26 Ifelodun Street, Ikotun, Lagos 23401
                                                </span><br/>
                                                <span>
                                                    +2348033337231
                                                </span>
                                            </Grid.Column>
                                            <Grid.Column width={8} textAlign="right" verticalAlign="middle">
                                                <Button color="green" size="large">
                                                    Send Money
                                                </Button>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Divider />
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header as='h3' content='Idris Portable' />
                                                <span>
                                                    26 Ifelodun Street, Ikotun, Lagos 23401
                                                </span><br/>
                                                <span>
                                                    +2348033337231
                                                </span>
                                            </Grid.Column>
                                            <Grid.Column width={8} textAlign="right" verticalAlign="middle">
                                                <Button color="green" size="large">
                                                    Send Money
                                                </Button>
                                            </Grid.Column>
                                        </Grid.Row>
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