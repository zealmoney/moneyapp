import { Link } from "react-router-dom"
import { Container, Grid, Header, List, Placeholder, Segment } from "semantic-ui-react"

export const Footer = () => {

    return(
        <>
            <Segment vertical inverted color="teal">
                <Container>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Header content="Our Company" style={{fontFamily: 'Poppins', fontSize: '20px', fontWeight: 'bold'}} />
                                <List>
                                    <List.Item as='a' style={{color: "white", fontSize: '1.3em'}}>
                                        About Us
                                    </List.Item>
                                    <List.Item as='a' style={{color: "white", fontSize: '1.3em'}}>
                                        Careers
                                    </List.Item>
                                    <List.Item as='a' style={{color: "white", fontSize: '1.3em'}}>
                                        Press
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Header content="Services" style={{color: "white"}} />
                                <List>
                                    <List.Item as='a' style={{color: "white", fontSize: '1.3em'}}>
                                        Login
                                    </List.Item>
                                    <List.Item as='a' style={{color: "white", fontSize: '1.3em'}}>
                                        Sign Up
                                    </List.Item>
                                    <List.Item as='a' style={{color: "white", fontSize: '1.3em'}}>
                                        Rates and Fees
                                    </List.Item>
                                    <List.Item as='a' style={{color: "white", fontSize: '1.3em'}}>
                                        Refer Friends and Relatives
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={4}>
                            <Header content="Support" style={{color: "white"}} />
                                <List>
                                    <List.Item as='a' style={{color: "white", fontSize: '1.3em'}}>
                                        Help
                                    </List.Item>
                                    <List.Item as='a' style={{color: "white", fontSize: '1.3em'}}>
                                        Contact Us
                                    </List.Item>
                                    <List.Item as='a' style={{color: "white", fontSize: '1.3em'}}>
                                        User Feedback
                                    </List.Item>
                                    <List.Item as='a' style={{color: "white", fontSize: '1.3em'}}>
                                        FAQ
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={4}>
                            <Header content="Security" style={{color: "white"}} />
                                <List>
                                    <List.Item as='a' style={{color: "white", fontSize: '1.3em'}}>
                                        Report a Suspicious Activity
                                    </List.Item>
                                    <List.Item as='a' style={{color: "white", fontSize: '1.3em'}}>
                                        Privacy Policy
                                    </List.Item>
                                    <List.Item as='a' style={{color: "white", fontSize: '1.3em'}}>
                                        User Agreement
                                    </List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={4}></Grid.Column>
                            <Grid.Column width={4}>
                                <Placeholder style={{height: 50, width: 90}}>
                                    <Placeholder.Image />
                                </Placeholder>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Placeholder style={{height: 50, width: 90}}>
                                    <Placeholder.Image />
                                </Placeholder>
                            </Grid.Column>
                            <Grid.Column width={4}></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                Scan the QR code to download the App
                                <Placeholder style={{height: 50, width: 90}}>
                                    <Placeholder.Image />
                                </Placeholder>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column textAlign="right">
                                MONEY APP LLC, All rights reserved &copy;2023
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </>
    )
}