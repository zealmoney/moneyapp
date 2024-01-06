import { Container, Flag, Grid, Header, Segment, Table } from "semantic-ui-react"

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
            <Segment vertical>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column textAlign="center">
                                <Header style={{fontSize: '3.2em'}} content='Countries where you can send money' />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Table>
                                    <Table.Body>
                                        {
                                            countries.map((country) => (
                                                <Table.Row key={country.countryCode}>
                                                    <Table.Cell>{flagRenderer(country)}{country.name}</Table.Cell>
                                                </Table.Row>
                                            ))
                                            
                                        }
                                    </Table.Body>
                                </Table>     
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </>
    )
}