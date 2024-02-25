import { Modal } from "react-native";
import { AppointmentModalpront, Informations, ModalContentpront, ProfileImagePront, TextsInformations } from "./Style";
import { Age, Email, TextInput, Title } from "../title/Style";
import { Button, ButtonSecondary, ButtonSecondaryTitle, ButtonTitle } from "../button/Style";
import { Input, InputPront, InputProntBig } from "../input/Style";
import { ButtonTittle } from "../buttonTitle/Style";
import { Container } from "../container/Style";



const AppointmentModal = ({ visible, setShowModalAppointment, setShowModalCancel, ...rest }) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <AppointmentModalpront>

                <ModalContentpront>

                    <ProfileImagePront source={{ uri: "https://github.com/ojuaum1.png" }} />

                    <Title> João Oliveira </Title>


                    <Informations>
                        <Age>19 anos</Age>
                        <Email>joao.oliveiira.pda@gmail.com</Email>
                    </Informations>

                    <TextInput>
                        Descrição da consulta
                    </TextInput>

                    <InputProntBig
                        placeholder='Descrição'
                    />

                    <TextInput>
                        Diagnóstico do paciente
                    </TextInput>

                    <InputPront
                        placeholder="Diagnóstico"
                    />

                    <TextInput>
                        Prescrição médica
                    </TextInput>

                    <InputProntBig
                        placeholder="Prescrição médica"
                    />

                     {/* <Button>
                        <ButtonTitle>Salvar</ButtonTitle>
                    </Button> */}

                     {/* <Button>
                        <ButtonTitle>Editar</ButtonTitle>
                    </Button> */}
                    
                    <ButtonSecondary onPress={() => setShowModalAppointment(false)}>
                        <ButtonSecondaryTitle>
                            Cancelar
                        </ButtonSecondaryTitle>
                    </ButtonSecondary>

                </ModalContentpront>

            </AppointmentModalpront>
        </Modal>
    );
};

export default AppointmentModal;