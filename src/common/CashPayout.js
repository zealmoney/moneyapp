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
            <Segment vertical size="massive" style={{padding: '4em 8em', backgroundColor: '#f6f6f6'}}>
                    <Grid textAlign="center" stackable>
                        <Grid.Row>
                            <Grid.Column>
                                <Header as='h1' content='Countries where you can send money' />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column style={{maxWidth: 1200}}>
                                <Grid>
                                    <Grid.Row>
                                        {
                                            countries.map((country) => (
                                                <>
                                                    <Grid.Column textAlign="left" key={country.countryCode} width={4}>
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
            </Segment>
        </>
    )
}