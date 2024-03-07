import { ScrollView } from "react-native"
import { Container } from "../../components/container/Style"
import { Title } from "../../components/title/Style"
import { ButtonChoiceDoctor, ContCard, DoctorCard, ImageCard, TextArea, TitleCard } from "./Style"
import { Button, ButtonSecondary, ButtonSecondaryTitle } from "../../components/button/Style"
import { ButtonTittle } from "../../components/buttonTitle/Style"

export const ChoiceDoctor = ({navigation}) => {
    return (
        <Container>

            <Title>Selecionar médico</Title>
            <ScrollView>

                <DoctorCard>
                    <ContCard>
                        <ImageCard source={require("../../../assets/Doctor1.png")} />
                        <TitleCard>Dra Alessandra</TitleCard>
                    </ContCard>
                    <TextArea>Dermatologia, Esteticista</TextArea>
                </DoctorCard>
                <DoctorCard>
                    <ContCard>
                        <ImageCard  source={require("../../../assets/Doctor2.png")}/>
                        <TitleCard>Dr Kumushiro</TitleCard>
                    </ContCard>
                    <TextArea>Cirurgião, Cardiologista</TextArea>
                </DoctorCard>
                <DoctorCard>
                    <ContCard>
                        <ImageCard source={require("../../../assets/Doctor3.png")}/>
                        <TitleCard>Dr Rodrigo Santos</TitleCard>
                    </ContCard>
                    <TextArea>Clínico, Pediatra</TextArea>
                </DoctorCard>

               <ButtonChoiceDoctor onPress={() => navigation.navigate("TelaCalendars")}>
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