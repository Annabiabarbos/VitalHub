import { Modal } from "react-native"
import { ModalContent, ModalText, PatientModal } from "../cancelationModal/Style"
import { Title } from "../title/Style"
import { Button, ButtonSecondary, ButtonSecondaryTitle } from "../button/Style"
import { ButtonTittle } from "../buttonTitle/Style"

export const CancellationModal = ({ visible, setShowModalCancel, ...rest}) => {
    return(

        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            <PatientModal>
                <ModalContent>

                    <Title>Cancelar consulta</Title>

                    <ModalText>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</ModalText>

                    <Button>
                        <ButtonTittle>Confirmar</ButtonTittle>
                    </Button>

                    <ButtonSecondary onPress={() => setShowModalCancel(false)}>
                        <ButtonSecondaryTitle>
                            Cancelar
                        </ButtonSecondaryTitle>
                    </ButtonSecondary> 

                </ModalContent>
            </PatientModal>
  
        </Modal>
    )
}