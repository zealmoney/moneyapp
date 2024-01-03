import 'semantic-ui-css/semantic.min.css'
import '../AGRESSIVE.otf'
import { Button, Container, Header, Icon, Menu, Segment } from 'semantic-ui-react'

export const NavbarDesktop = () => {
    return(
        <Segment vertical>
            <Menu 
                size='huge'
                secondary
                pointing
                
            >
                <Container>
                    <Menu.Item
                        as='a'
                        inverted
                        style={{fontFamily: 'AGRESSIVE', fontWeight: 'bold', fontSize: '20px'}}
                    >
                        MONEY APP
                    </Menu.Item>
                    <Menu.Item position='right'>
                        <Button size='mini' circular color='green'>
                            <Icon name='sign in alternate' />
                            Sign In
                        </Button> 
                    </Menu.Item>
                    <Menu.Item>
                        <Button size='mini' circular color='green'>
                            <Icon name="signup" />
                            Register
                        </Button> 
                    </Menu.Item>
                </Container>
            </Menu>
        </Segment>
    )
}
