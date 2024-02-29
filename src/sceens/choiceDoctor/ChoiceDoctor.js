import { ScrollView } from "react-native"
import { Container } from "../../components/container/Style"
import { Title } from "../../components/title/Style"
import { ButtonChoiceDoctor, ContCard, DoctorCard, FilterAppointamentDoctor, ImageCard, TextArea, TextButtonDoctor, TitleCard } from "./Style"
import { Button, ButtonSecondary, ButtonSecondaryTitle } from "../../components/button/Style"
import { ButtonText } from "../../components/appointmentCard/Style"
import { ButtonTittle } from "../../components/buttonTitle/Style"

export const ChoiceDoctor = ({navigation}) => {
    return (
        <Container>

            <Title>Selecionar médico</Title>
            <ScrollView>

                <DoctorCard>
                    <ContCard>
                        <ImageCard source={{ uri: "../../../assets/Doctor1.png" }} />
                        <TitleCard>Dra Alessandra</TitleCard>
                    </ContCard>
                    <TextArea>Dermatologia, Esteticista</TextArea>
                </DoctorCard>
                <DoctorCard>
                    <ContCard>
                        <ImageCard source={{ uri: "../../../assets/Doctor1.png" }} />
                        <TitleCard>Dr Kumushiro</TitleCard>
                    </ContCard>
                    <TextArea>Cirurgião, Cardiologista</TextArea>
                </DoctorCard>
                <DoctorCard>
                    <ContCard>
                        <ImageCard source={{ uri: "../../../assets/Doctor1.png" }} />
                        <TitleCard>Dr Rodrigo Santos</TitleCard>
                    </ContCard>
                    <TextArea>Clínico, Pediatra</TextArea>
                </DoctorCard>

               <ButtonChoiceDoctor>
               <ButtonTittle>Continuar</ButtonTittle>
               </ButtonChoiceDoctor>

               <ButtonSecondary onPress={() => navigation.navigate("ChoiceClinic")}>
                    <ButtonSecondaryTitle>
                        Cancelar
                    </ButtonSecondaryTitle>
                </ButtonSecondary> 

            </ScrollView>



        </Container>
    )
}