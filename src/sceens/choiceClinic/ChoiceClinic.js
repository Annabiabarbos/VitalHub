import { ScrollView, Text } from "react-native"
import { Container } from "../../components/container/Style"
import { Title, TitleClinic } from "../../components/title/Style"
import { ButtonText, ClinicCard, DataProfileCard, ProfileData, ProfileName, ProfileNameClinic, TextAge, TextBold } from "../../components/appointmentCard/Style"
import { CalendarImage, ClassificationClinic, ContainerClinic, FilterAppointamentClinic, HourClinic, ImageClassification, TitleHour } from "./Style"
import { FilterAppointament } from "../home/style"
import { Button, ButtonClinic, ButtonSecondary, ButtonSecondaryTitle } from "../../components/button/Style"
import { ButtonTittle } from "../../components/buttonTitle/Style"

export const ChoiceClinic = ({navigation}) => {
    return (
        <ContainerClinic>
            <TitleClinic>Selecionar clínica</TitleClinic>
            <ScrollView>
                

                     <ClinicCard>
                        <ProfileNameClinic>Clinica Natureh</ProfileNameClinic>
                        <ClassificationClinic>
                            <ImageClassification source={{ uri: "../../../assets/star.png" }} />
                        </ClassificationClinic>
                        <ProfileData>
                            <TextBold>São Paulo, SP</TextBold>
                            <HourClinic>
                                <CalendarImage source={{ uri: "../../../assets/CalendarIcon.png" }} />
                                <TitleHour>Seg-Sex</TitleHour>
                            </HourClinic>
                        </ProfileData>
                    </ClinicCard>

                    <ClinicCard>
                        <ProfileNameClinic>Diamond Pró-Mulher</ProfileNameClinic>
                        <ClassificationClinic>
                            <ImageClassification source={{ uri: "../../../assets/Star" }} />
                        </ClassificationClinic>
                        <ProfileData>
                            <TextBold>São Paulo, SP</TextBold>
                            <HourClinic>
                                <CalendarImage source={{ uri: "../assets/CalendarIcon.png" }} />
                                <TitleHour>Seg-Sex</TitleHour>
                            </HourClinic>
                        </ProfileData>
                    </ClinicCard>
                    <ClinicCard>
                        <ProfileNameClinic>Clinica Villa Lobos</ProfileNameClinic>
                        <ClassificationClinic>
                            <ImageClassification source={{ uri: "../../../assets/Star" }} />
                        </ClassificationClinic>
                        <ProfileData>
                            <TextBold>Taboão, SP</TextBold>
                            <HourClinic>
                                <CalendarImage source={{ uri: "../assets/CalendarIcon.png" }} />
                                <TitleHour>Seg-Sab</TitleHour>
                            </HourClinic>
                        </ProfileData>
                    </ClinicCard>
                    <ClinicCard>
                        <ProfileNameClinic>SP Oncologia Clínica</ProfileNameClinic>
                        <ClassificationClinic>
                            <ImageClassification source={{ uri: "../../../assets/Star" }} />
                        </ClassificationClinic>
                        <ProfileData>
                            <TextBold>Taboão, SP</TextBold>
                            <HourClinic>
                                <CalendarImage source={{ uri: "../assets/CalendarIcon.png" }} />
                                <TitleHour>Seg-Sab</TitleHour>
                            </HourClinic>
                        </ProfileData>
                    </ClinicCard>

                
                <ButtonClinic onPress={() => navigation.navigate("ChoiceDoctor")}>
                    <ButtonTittle>Continuar</ButtonTittle>
                </ButtonClinic>
                <ButtonSecondary onPress={() => navigation.navigate("Home")}>
                    <ButtonSecondaryTitle>
                        Cancelar
                    </ButtonSecondaryTitle>
                </ButtonSecondary>  

            </ScrollView>
        </ContainerClinic>
    )
}