import { Link } from "react-router-dom"
import { Container, Divider, Grid, Header, Image, List, Placeholder, Segment } from "semantic-ui-react"

export const Footer = () => {

    return(
        <>
            <Segment vertical inverted>
                <Container>
                    <Grid stackable inverted divided>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Header as='h4' inverted content="Our Company"  />
                                <List link inverted>
                                    <List.Item as='a'>
                                        About Us
                                    </List.Item>
                                    <List.Item as='a'>
                                        Careers
                                    </List.Item>
                                    <List.Item as='a'>
                                        Press
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Header as='h4' inverted content="Services" />
                                <List link inverted>
                                    <List.Item as='a'>
                                        Login
                                    </List.Item>
                                    <List.Item as='a'>
                                        Sign Up
                                    </List.Item>
                                    <List.Item as='a'>
                                        Rates and Fees
                                    </List.Item>
                                    <List.Item as='a'>
                                        Refer Friends and Relatives
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={4}>
                            <Header as='h4' inverted content="Support" />
                                <List link inverted>
                                    <List.Item as='a'>
                                        Help
                                    </List.Item>
                                    <List.Item as='a'>
                                        Contact Us
                                    </List.Item>
                                    <List.Item as='a'>
                                        User Feedback
                                    </List.Item>
                                    <List.Item as='a'>
                                        FAQ
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={4}>
                            <Header as='h4' inverted content="Security" />
                                <List link inverted>
                                    <List.Item as='a'>
                                        Report a Suspicious Activity
                                    </List.Item>
                                    <List.Item as='a'>
                                        Privacy Policy
                                    </List.Item>
                                    <List.Item as='a'>
                                        User Agreement
                                    </List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width={8}>
                                            <Image rounded src='/images/applestore.svg' />
                                        </Grid.Column>
                                        <Grid.Column width={8}>
                                            <Image rounded src='/images/googleplay.png' />
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Grid.Column> 
                        </Grid.Row>
                        <Divider />
                        <Grid.Row>
                            <Grid.Column>
                                MONEY APP LLC, All rights reserved &copy;2023
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </>
    )
}