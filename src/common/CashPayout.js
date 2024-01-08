import { Container, Divider, Flag, Grid, Header, Segment, Table } from "semantic-ui-react"

const countries = [
    { name: 'Albania', countryCode: 'al'},
    { name: 'Algeria', countryCode: 'dz'},
    { name: 'Angola', countryCode: 'ao'},
    { name: 'Antigua', countryCode: 'ag'},
    { name: 'Argentina', countryCode: 'ar' },
    { name: 'Armenia', countryCode: 'am' },
    { name: 'Australia', countryCode: 'au' },
    { name: 'Austria', countryCode: 'at' },
    { name: 'Azerbaijan', countryCode: 'az' }
]

export const CashPayout = () => {

    const flagRenderer = (item) => 
        <Flag name={item.countryCode} />

    return(
        <>
            <Segment vertical size="massive" style={{padding: '4em 0em'}}>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column textAlign="center">
                                <Header as='h1' content='Countries where you can send money' />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Grid>
                                    <Grid.Row>
                                        {
                                            countries.map((country) => (
                                                <>
                                                    <Grid.Column  textAlign="center" key={country.countryCode} width={4}>
                                                        {flagRenderer(country)}{country.name}
                                                    </Grid.Column>
                                                    <br/><br/>
                                                </>
                                            ))
                                        }
                                    </Grid.Row>
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </>
    )
}