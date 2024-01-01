import { Link } from "react-router-dom"
import { Container, Grid, Header, List, Placeholder, Segment } from "semantic-ui-react"

export const Footer = () => {

    return(
        <>
            <Segment vertical inverted color="black">
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Header content="Our Company" style={{color: "white"}} />
                                <List>
                                    <List.Item as='a' style={{color: "white"}}>
                                        About Us
                                    </List.Item>
                                    <List.Item as='a' style={{color: "white"}}>
                                        Careers
                                    </List.Item>
                                    <List.Item as='a' style={{color: "white"}}>
                                        Press
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Header content="Services" style={{color: "white"}} />
                                <List>
                                    <List.Item as='a' style={{color: "white"}}>
                                        Login
                                    </List.Item>
                                    <List.Item as='a' style={{color: "white"}}>
                                        Sign Up
                                    </List.Item>
                                    <List.Item as='a' style={{color: "white"}}>
                                        Rates and Fees
                                    </List.Item>
                                    <List.Item as='a' style={{color: "white"}}>
                                        Refer Friends and Relatives
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={4}>
                            <Header content="Support" style={{color: "white"}} />
                                <List>
                                    <List.Item as='a' style={{color: "white"}}>
                                        Help
                                    </List.Item>
                                    <List.Item as='a' style={{color: "white"}}>
                                        Contact Us
                                    </List.Item>
                                    <List.Item as='a' style={{color: "white"}}>
                                        User Feedback
                                    </List.Item>
                                    <List.Item as='a' style={{color: "white"}}>
                                        FAQ
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={4}>
                            <Header content="Security" style={{color: "white"}} />
                                <List>
                                    <List.Item as='a' style={{color: "white"}}>
                                        Report a Suspicious Activity
                                    </List.Item>
                                    <List.Item as='a' style={{color: "white"}}>
                                        Privacy Policy
                                    </List.Item>
                                    <List.Item as='a' style={{color: "white"}}>
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