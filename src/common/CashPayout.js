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
    { name: 'Azerbaijan', countryCode: 'az' },
    { name: 'Bahamas', countryCode: 'bs' },
    { name: 'Bahrain', countryCode: 'bh' },
    { name: 'Belgium', countryCode: 'be' },
    { name: 'Benin', countryCode: 'bj' },
    { name: 'Bhutan', countryCode: 'bt' },
    { name: 'Bolivia', countryCode: 'bo' },
    { name: 'Bosnia', countryCode: 'ba' },
    { name: 'Botswana', countryCode: 'bw' },
    { name: 'Bouvet Island', countryCode: 'bv' },
    { name: 'Brunei', countryCode: 'bn' },
    { name: 'Bulgaria', countryCode: 'bg' },
    { name: 'Cambodia', countryCode: 'kh' },
    { name: 'Canada', countryCode: 'ca' },
    { name: 'Chile', countryCode: 'cl' },
    { name: 'Colombia', countryCode: 'co' },
    { name: 'Costa Rica', countryCode: 'cr' },
    { name: 'Cote Divoire', countryCode: 'ci' },
    { name: 'Croatia', countryCode: 'hr' },
    { name: 'Czech Republic', countryCode: 'cz' },
    { name: 'Denmark', countryCode: 'dk' },
    { name: 'Dominican Republic', countryCode: 'do' },
    { name: 'Ecuador', countryCode: 'ec' },
    { name: 'Egypt', countryCode: 'eg' },
    { name: 'El Salvador', countryCode: 'sv' },
    { name: 'Estonia', countryCode: 'ee' },
    { name: 'Ethiopia', countryCode: 'et' },
    { name: 'Finland', countryCode: 'fi' },
    { name: 'France', countryCode: 'fr' },
    { name: 'Gabon', countryCode: 'ga' },
    { name: 'Gambia', countryCode: 'gm' },
    { name: 'Germany', countryCode: 'de' },
    { name: 'Ghana', countryCode: 'gh' },
    { name: 'Greece', countryCode: 'gr' },
    { name: 'Guatemala', countryCode: 'gt' },
    { name: 'Guyana', countryCode: 'gy' },
]

export const CashPayout = () => {

    const flagRenderer = (item) => 
        <Flag name={item.countryCode} />

    return(
        <>
            <Segment vertical size="massive" style={{padding: '4em 8em', backgroundColor: '#f6f6f6'}}>
                    <Grid textAlign="center">
                        <Grid.Row>
                            <Grid.Column>
                                <Header as='h1' content='Countries where you can send money' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid columns={3}>
                        <Grid.Row>
                            
                            {
                                countries.map((country) => (
                                    <Grid.Column key={country.countryCode}>
                                        <p style={{fontSize: '0.8em'}}>
                                            {flagRenderer(country)}{country.name}
                                        </p>
                                                              
                                    </Grid.Column>                                                        
                                ))
                            }
                                    
                        </Grid.Row>
                    </Grid>
            </Segment>
        </>
    )
}