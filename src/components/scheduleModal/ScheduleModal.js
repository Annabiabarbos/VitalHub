import { Modal } from "react-native"
import { ModalContent, ModalSchedule, ModalText, PatientModal } from "../cancelationModal/Style"
import { TextInput, TextInputModal, Title, TitleModal } from "../title/Style"
import { Button, ButtonModal, ButtonSecondary, ButtonSecondaryTitle } from "../button/Style"
import { ButtonTittle } from "../buttonTitle/Style"
import { FilterAppointament } from "../../sceens/home/style"
import { AbsListAppointament } from "../absListAppointment/absListAppointment"
import { useState } from "react"
import { Schedule } from "../schedule/Schedule"
import {Input} from "../input/Style"

export const ScheduleModal = ({ visible, navigation, setShowScheduleModal, ...rest }) => {

    const [statusLista , setStatusLista] = useState(false)
    return (

        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            <PatientModal>
                <ModalSchedule>

                    <TitleModal>Agendar consulta</TitleModal>

                    <TextInputModal>Qual o nível da consulta  </TextInputModal>



                    <FilterAppointament>

                        <Schedule
                            textButton={"Rotina"}
                            clickButton={statusLista === "pendente"}
                            onPress={() => setStatusLista("Rotina")}
                        />

                        <Schedule
                            textButton={"realizadas"}
                            clickButton={statusLista === "realizado"}
                            onPress={() => setStatusLista("realizado")}
                        />

                        <Schedule
                            textButton={"canceladas"}
                            clickButton={statusLista === "cancelado"}
                            onPress={() => setStatusLista("cancelado")}
                        />

                    </FilterAppointament>


                    <TextInputModal>Informe a localização desejada</TextInputModal>


                    <Input
                    placeholder={"Informe a localização"}
                    />

                    <ButtonModal onPress={() => {
                        //ao clicar no botão continuar ele irá fechar o modal
                        setShowScheduleModal(false)
                        //E aqui levará para a página de selecionar cliníca
                            navigation.navigate("ChoiceClinic")
                    }}>
                        <ButtonTittle>Continuar</ButtonTittle>
                    </ButtonModal>

                    <ButtonSecondary onPress={() => setShowScheduleModal(false)}>
                        <ButtonSecondaryTitle>
                            Cancelar
                        </ButtonSecondaryTitle>
                    </ButtonSecondary>

                </ModalSchedule>
            </PatientModal>

        </Modal>
    )
}