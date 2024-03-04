import { ButtonText } from "../appointmentCard/Style"
import { Button, ButtonSecondary, ButtonSecondaryModal, ButtonSecondaryTitle } from "../button/Style"
import { ButtonTittle } from "../buttonTitle/Style"
import { ModalText } from "../cancelationModal/Style"
import { ModalConfirmation } from "../confirmModal/Style"
import { Container } from "../container/Style"
import { ButtonTabsStyleSchedule, ButtonTextStyleSchedule } from "../schedule/Style"
import { Informationsmodal, TextInputModal, TextModalConfirmation, Title } from "../title/Style"
import { ContainerModalContainer, ViewInformationModal } from "./Style"

export const Confirmation = ({ textButton, clickButton = false, onPress, setShowConfirmationModal }) => {
    return (
        <ModalConfirmation>

            <Title>Agendar consulta</Title>
            <ModalText>Consulte os dados selecionados para a sua consulta</ModalText>

            <TextModalConfirmation>Data da consulta</TextModalConfirmation>
            <Informationsmodal>01 de novembro de 2023</Informationsmodal>

            <TextModalConfirmation>Médico(a) da consulta</TextModalConfirmation>
            <ViewInformationModal>
                <Informationsmodal>Dra Alessandra</Informationsmodal>
                <Informationsmodal>Demartologa, Esteticista</Informationsmodal>
            </ViewInformationModal>



            <TextModalConfirmation>Local da consulta</TextModalConfirmation>
            <ViewInformationModal>
                <Informationsmodal>São Paulo, SP</Informationsmodal>
            </ViewInformationModal>



            <TextModalConfirmation>Tipo da consulta</TextModalConfirmation>
            <ViewInformationModal>
                <Informationsmodal>Rotina</Informationsmodal>
            </ViewInformationModal>

            <Button>
                <ButtonTittle>Confirmar</ButtonTittle>
            </Button>

        </ModalConfirmation>
    )
}