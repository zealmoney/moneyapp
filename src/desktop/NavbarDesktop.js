import 'semantic-ui-css/semantic.min.css'
import '../AGRESSIVE.otf'
import { Button, Container, Header, Icon, Menu, Segment } from 'semantic-ui-react'

export const NavbarDesktop = () => {
    return(
        <Segment vertical inverted color='teal'>
            <Menu 
                size='large'
                secondary
            >
                <Container>
                    <Menu.Item
                        as='a'
                        inverted
                        style={{color: 'white'}}
                    >
                        MONEY APP
                    </Menu.Item>
                    <Header content='About Us' style={{fontFamily: 'AGRESSIVE', fontWeight: 'bold', fontSize: '30px'}} />
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
