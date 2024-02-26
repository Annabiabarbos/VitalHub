import { Modal } from "react-native";
import { AppointmentModalpront, ImageProfile, ImagePront, Informations, ModalContentpront, ProfileImagePront, TextsInformations } from "./Style";
import { Age, Email, TextInput, Title } from "../title/Style";
import { Button, ButtonSecondary, ButtonSecondaryTitle, ButtonTitle, TextButtonPront } from "../button/Style";
import { Input, InputPront, InputProntBig } from "../input/Style";
import { ButtonTittle } from "../buttonTitle/Style";
import { Container } from "../container/Style";
import { ModalContent, ModalText } from "../cancelationModal/Style";
import { ImageUser } from "../header/Style";
import { TextsProfile } from "../../sceens/profile/Style";



const AppointmentModal = ({visible, navigation, setShowModalAppointment,  ...rest }) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <AppointmentModalpront>

                <ModalContent>

                    <ImagePront source={{ uri: "https://github.com/ojuaum1.png" }} />
                    <Title>João Oliveira</Title>

                    <Informations>
                        <Age>19 anos</Age>
                        <Email>joao.oliveiira.pda@gmail.com</Email>
                    </Informations>

                    <Button onPress={() => navigation.navigate("MedicalRecord")}>
                        <TextButtonPront>Inserir prontuário</TextButtonPront>
                    </Button>

                    <ButtonSecondary onPress={() => setShowModalAppointment(false)}>
                        <ButtonSecondaryTitle>
                            Cancelar
                        </ButtonSecondaryTitle>
                    </ButtonSecondary>

                </ModalContent>

            </AppointmentModalpront>
        </Modal>
    );
};

export default AppointmentModal;