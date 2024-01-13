import { Container, Grid, Header, Menu, Segment } from "semantic-ui-react"

export const AuthenticationHeader = () => {

    return(
        <>
            <Segment
                vertical
            >
                <Container>
                    <Grid textAlign="center">
                        <Grid.Row>
                            <Grid.Column>
                                <Header style={{fontFamily: 'AGRESSIVE', fontWeight: 'bold', fontSize: '25px'}}>
                                    MONEY APP
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </>
    )
}