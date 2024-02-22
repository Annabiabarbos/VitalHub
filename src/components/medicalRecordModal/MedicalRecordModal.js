import { Modal } from "react-native"
import { ButtonSecondary, ButtonSecondaryTitle } from "../button/Style"
import { MedicalRecordImage } from "../appointmentCard/Style"
import { ModalContentMed, ModalMedRecord } from "./Style"
import { ModalContent } from "../cancelationModal/Style"

export const MedicalRecordModal = (visible, setShowModalAppointment, ...rest) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <ModalMedRecord>
                <ModalContentMed>
                    <ButtonSecondary onPress={() => setShowModalAppointment(false)}>
                        <ButtonSecondaryTitle>
                            Cancelar
                        </ButtonSecondaryTitle>
                    </ButtonSecondary>
                    <MedicalRecordImage source={{ uri: "https://github.com/ojuaum1.png" }} />
                </ModalContentMed>
            </ModalMedRecord>
        </Modal>
    )
}