import { Container, Grid, Header, Segment } from "semantic-ui-react"
import { NavbarDesktop } from "../desktop/NavbarDesktop"
import { Footer } from "./Footer"

export const Privacy = () => {

    return(
        <>
            <NavbarDesktop />
            <Segment vertical style={{padding: '4em 1em'}}>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column textAlign="center">
                                <Header as='h1' content='Privacy Policy' />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <p>
                                    <Header as='h2' content='ABOUT THIS POLICY' />
                                    <span style={{lineHeight: '2em', fontSize: '1.3em'}}>
                                        This Privacy Policy ("Policy") applies to the websites located at MoneyApp.com, 
                                        the MoneyApp mobile applications and through any other programs (including MoneyApp Research programs), 
                                        websites, or applications owned and operated by MoneyApp that direct you to this Policy.
                                        This Policy, together with our User Agreement (and any additional terms of use mentioned in our User Agreement) 
                                        applies to your use of our Services.
                                        Where we use other capitalised words and phrases in this Policy (such as Agreement, Profile, Services and Transaction), 
                                        these have the same meaning as given to them in our User Agreement, unless we have defined them differently in this Policy.
                                    </span>
                                </p>
                                <p></p>
                                <p>
                                    <Header as='h2' content='NOTICE TO CALIFORNIA RESIDENTS' />
                                    <span style={{lineHeight: '2em', fontSize: '1.3em'}}>
                                        Notice at Collection of personal information: We list the categories of personal information that we collect below under 
                                        "What Personal Data Do We Collect." We collect personal information about you for business and commercial purposes as 
                                        described below under "How Do We Use or Process Your Personal Data." For more information, including on how to opt-out 
                                        of the sale or sharing of personal information, please see "US State Privacy Rights" section below.
                                    </span>
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
            <Footer />
        </>
    )
}