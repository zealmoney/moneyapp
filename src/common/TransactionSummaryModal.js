import { Button, Grid, Header, Modal } from "semantic-ui-react"

export const TransactionSummaryModal = ({open, size, close}) => {

    return(
        <Modal
            open={open}
            size={size}
        >
            <Modal.Header style={{textAlign: 'center'}}>
                Transaction Summary
            </Modal.Header>
            <Modal.Content>
                <Grid textAlign="center">
                    <Grid.Row>
                        <Grid.Column>
                            <Header 
                                as='h3'
                                content='Please make sure all informations provided are correct.'
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            Are you sure you want to proceed?
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Button
                                color="youtube"
                                onClick={() => close()}
                            >
                                NO
                            </Button>
                            <Button
                                color="green"
                            >
                                YES
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Modal.Content>
        </Modal>
    )
}