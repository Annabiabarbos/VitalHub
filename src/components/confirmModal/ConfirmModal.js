import { Modal } from "react-native"
import { Container } from "../container/Style"
import { Confirmation } from "../confirmation/Confirmation"
import { useState } from "react"
import { ButtonSecondary, ButtonSecondaryModal, ButtonSecondaryTitle } from "../button/Style"

export const ConfirmModal = ({ visible, navigation, setShowConfirmationModal, ...rest }) => {

    const [statusLista, setStatusLista] = useState(false)

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <Confirmation />

            <ButtonSecondaryModal onPress={() => setShowConfirmationModal(false)}>
                <ButtonSecondaryTitle>
                    Cancelar
                </ButtonSecondaryTitle>
            </ButtonSecondaryModal>
        </Modal>
    )
}