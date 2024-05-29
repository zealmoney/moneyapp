import { Container, Grid, Header, Segment } from "semantic-ui-react"
import { NavbarDesktop } from "../desktop/NavbarDesktop"
import { Footer } from "./Footer"

export const About = () => {

    return(
        <>
            <NavbarDesktop />
            <Segment vertical style={{padding: '4em 1em'}}>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column textAlign="center">
                                <Header as='h1' content='About Us' />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <p style={{lineHeight: '2em', fontSize: '1.3em'}}>
                                    IDT Corporation launched its BOSS Revolution branded 
                                    international long-distance calling service in 2008. 
                                    Utilizing PIN-less technology, IDT’s new offering quickly 
                                    became the go-to service for immigrant families who wanted 
                                    an affordable and reliable way to call back home. 
                                    Over time, IDT has developed additional services for the 
                                    brand, and today customers trust BOSS Revolution for money 
                                    transfer and mobile top-up as well as for international 
                                    long distance calling.
                                </p>
                                <p style={{lineHeight: '2em', fontSize: '1.3em'}}>
                                    Today, the highly-rated BOSS Revolution calling and BOSS Money 
                                    apps and websites provide the same trusted services with all the 
                                    convenience of digital. Customers who prefer to transact in cash 
                                    utilize our nationwide network of BOSS Revolution retailers and 
                                    BOSS Money transfer agents that connect to us through our retailer portal.
                                    Across all of our offerings and channels, the key to BOSS Revolution’s 
                                    continued popularity is our singular focus on serving immigrant communities. 
                                    For millions of cus
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