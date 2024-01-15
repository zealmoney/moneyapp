import { Link } from "react-router-dom"
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
                                    <Link to={'/'} style={{color: 'black'}}>MONEY APP</Link>
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </>
    )
}