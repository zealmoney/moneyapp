import { Button, Container, Flag, Form, Grid, Header, Input, Label, Radio, Segment } from "semantic-ui-react"
import { TransactionNavbar } from "./TransactionNavbar"

export const TransactionComponent = () => {

    return(
        <>
            <TransactionNavbar />
            <Segment vertical style={{marginTop: '0em'}}>
                <Container>
                    <Grid textAlign="center">
                        <Grid.Row>
                            <Grid.Column style={{maxWidth: 500}}>
                                <Segment style={{padding: '4em 2em'}}>
                                    <Form size="huge">
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <label>You Send</label>
                                            <Input 
                                                type="text"
                                                placeholder='0.00'
                                                labelPosition="right"    
                                            >
                                                <Label basic><Flag name="us" /></Label>
                                                <input />
                                                <Label basic>USD</Label>
                                            </Input>
                                        </Form.Field>
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <label>They Receive</label>
                                            <Input 
                                                type="text"
                                                placeholder='0.00'
                                                labelPosition="right"    
                                            >
                                                <Label basic><Flag name="ng" /></Label>
                                                <input />
                                                <Label basic>NGN</Label>
                                            </Input>
                                        </Form.Field>
                                    </Form>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column style={{maxWidth: 500}}>
                                <Segment>
                                    <Header as='h2' content='Delivery speed' textAlign="left" />
                                    <Form size="huge">
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <Radio toggle label='Express, 1 USD = 852.02 NGN' />
                                        </Form.Field>
                                        <Form.Field style={{textAlign: 'left'}}>
                                            <Radio toggle label='Economy, 1 USD = 852.02 NGN' />
                                        </Form.Field>
                                        
                                    </Form>
                                </Segment>
                                <Button fluid size="huge" color="green">
                                    Continue
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </>
    )
}