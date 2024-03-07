import { Modal } from "react-native"
import { Container } from "../container/Style"
import { Confirmation } from "../confirmation/Confirmation"
import { useState } from "react"
import { ButtonSecondaryModal, ButtonSecondaryTitle, Button } from "../button/Style"
import { ButtonText } from "../appointmentCard/Style"
import { ButtonTittle } from "../buttonTitle/Style"

export const ConfirmModal = ({ visible, navigation, setShowConfirmationModal, ...rest }) => {

    const [statusLista, setStatusLista] = useState(false)

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <Confirmation navigation={navigation}/>
        </Modal>
    )
}