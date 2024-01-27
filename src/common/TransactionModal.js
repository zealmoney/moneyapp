import { Grid, Icon, Modal } from "semantic-ui-react"

export const TransactionModal = ({open, size, close}) => {

    return(
        <Modal
            open={open}
            size={size}
        >
            <Modal.Header>
                Fees
                <Icon 
                    style={{float: 'right'}} 
                    name="close" 
                    onClick={() => close()}
                />
            </Modal.Header>
            <Modal.Content>
                <Grid>
                    <Grid.Row divided>
                        <Grid.Column>
                            <span style={{textAlign: "left"}}>Transfer amount</span>
                            <span style={{textAlign: "left"}}>0.00 USD</span>
                            
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Modal.Content>
        </Modal>
    )
}