import { ButtonText } from "../appointmentCard/Style"
import { Button } from "../button/Style"
import { ModalText } from "../cancelationModal/Style"
import { ModalConfirmation } from "../confirmModal/Style"
import { Container } from "../container/Style"
import { ButtonTabsStyleSchedule, ButtonTextStyleSchedule } from "../schedule/Style"
import { TextInputModal, Title } from "../title/Style"
import { ContainerModalContainer } from "./Style"

export const Confirmation = ({ textButton, clickButton = false, onPress }) => {
    return (
        <ModalConfirmation>

            <Title>Agendar consulta</Title>
            <ModalText>Consulte os dados selecionados para a sua consulta</ModalText>

            <TextInputModal>Data da consulta</TextInputModal>
        </ModalConfirmation>
    )
}