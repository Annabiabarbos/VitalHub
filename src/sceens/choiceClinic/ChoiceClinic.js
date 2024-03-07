import { ScrollView } from "react-native"
import { Container } from "../../components/container/Style"
import { Title, TitleClinic } from "../../components/title/Style"
import { ButtonChoiceDoctor } from "../choiceDoctor/Style"
import { ButtonTittle } from "../../components/buttonTitle/Style"
import { Button, ButtonSecondary, ButtonSecondaryTitle } from "../../components/button/Style"
import { CalendarImage, ClassificationClinic, ContainerClinic, HourClinic, ImageClassification, StarText, TitleHour } from "./Style"
import { ClinicCard, ProfileData, ProfileNameClinic, TextBold } from "../../components/appointmentCard/Style"
import { Text } from "../../components/texts/Style"

export const ChoiceClinic = ({ navigation }) => {
    return (
        <Container>

            <TitleClinic>Selecionar clínica</TitleClinic>


            <ClinicCard>
                <ProfileNameClinic>Clinica Natureh</ProfileNameClinic>
                <ClassificationClinic>
                    <StarText>
                        <ImageClassification source={require('../../../assets/star.png')} />
                        <Text>4,5</Text>
                    </StarText>

                </ClassificationClinic>
                <ProfileData>
                    <TextBold>São Paulo, SP</TextBold>
                    <HourClinic>
                        <CalendarImage source={require('../../../assets/CalendarIcon.png')} />
                        <TitleHour>Seg-Sex</TitleHour>
                    </HourClinic>
                </ProfileData>
            </ClinicCard>

            <ClinicCard>
                <ProfileNameClinic>Diamond Pró-Mulher</ProfileNameClinic>
                <ClassificationClinic>
                    <StarText>
                        <ImageClassification source={require('../../../assets/star.png')} />
                        <Text>4,8</Text>
                    </StarText>

                </ClassificationClinic>
                <ProfileData>
                    <TextBold>São Paulo, SP</TextBold>
                    <HourClinic>
                        <CalendarImage source={require('../../../assets/CalendarIcon.png')} />
                        <TitleHour>Seg-Sex</TitleHour>
                    </HourClinic>
                </ProfileData>
            </ClinicCard>

            <ClinicCard>
                <ProfileNameClinic>Clinica Villa Lobos</ProfileNameClinic>
                <ClassificationClinic>
                    <StarText>
                        <ImageClassification source={require('../../../assets/star.png')} />
                        <Text>4,2</Text>
                    </StarText>

                </ClassificationClinic>
                <ProfileData>
                    <TextBold>Taboão, SP</TextBold>
                    <HourClinic>
                        <CalendarImage source={require('../../../assets/CalendarIcon.png')} />
                        <TitleHour>Seg-Sex</TitleHour>
                    </HourClinic>
                </ProfileData>
            </ClinicCard>

            <ClinicCard>
                <ProfileNameClinic>SP Oncologia Clínica</ProfileNameClinic>
                <ClassificationClinic>
                    <StarText>
                        <ImageClassification source={require('../../../assets/star.png')} />
                        <Text>4,2</Text>
                    </StarText>

                </ClassificationClinic>
                <ProfileData>
                    <TextBold>Taboão, SP</TextBold>
                    <HourClinic>
                        <CalendarImage source={require('../../../assets/CalendarIcon.png')} />
                        <TitleHour>Seg-Sex</TitleHour>
                    </HourClinic>
                </ProfileData>
            </ClinicCard>

            <ScrollView>

                <Button onPress={() => navigation.navigate("ChoiceDoctor")}>
                    <ButtonTittle>Continuar</ButtonTittle>
                </Button>

                <ButtonSecondary onPress={() => navigation.navigate("Main")}>
                    <ButtonSecondaryTitle>
                        Cancelar
                    </ButtonSecondaryTitle>
                </ButtonSecondary>

            </ScrollView>

        </Container>
    )
}