import { useNavigate } from "react-router-dom"
import { Button, Grid, Header, Icon, Modal } from "semantic-ui-react"

export const ErrorModal = ({open, size, close}) => {

    const navigate = useNavigate()

    const reloadClick = () => {
        close()
    }

    return(
        <Modal
            open={open}
            size={size}
        >
            <Modal.Header>
               Message!!
            </Modal.Header>
            <Modal.Content>
                <Grid textAlign="center">
                    <Grid.Row divided>
                        <Grid.Column>
                            <Header as="h3" content="Your data might not be saved"/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row divided>
                        <Grid.Column>
                            <Button 
                                color="youtube"
                                onClick={() => reloadClick()}
                            >
                                OK
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Modal.Content>
        </Modal>
    )
}