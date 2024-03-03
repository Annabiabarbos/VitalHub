import { Modal } from "react-native"
import { Container } from "../container/Style"
import { Confirmation } from "../confirmation/Confirmation"
import { useState } from "react"
import { ModalConfirmation } from "./Style"
import { ButtonSecondary, ButtonSecondaryTitle } from "../button/Style"

export const ConfirmModal = ({ visible, navigation, setShowScheduleModal, ...rest }) => {

    const [statusLista, setStatusLista] = useState(false)

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ModalConfirmation>
                <Confirmation />
                <ButtonSecondary onPress={() => setShowModalAppointment(false)}>
                    <ButtonSecondaryTitle>
                        Cancelar
                    </ButtonSecondaryTitle>
                </ButtonSecondary>
            </ModalConfirmation>


        </Modal>
    )
}