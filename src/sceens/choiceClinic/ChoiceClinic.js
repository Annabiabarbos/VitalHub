import { ScrollView, Text } from "react-native"
import { Container } from "../../components/container/Style"
import { Title, TitleClinic } from "../../components/title/Style"
import { ButtonText, ClinicCard, DataProfileCard, ProfileData, ProfileName, ProfileNameClinic, TextAge, TextBold } from "../../components/appointmentCard/Style"
import { CalendarImage, ClassificationClinic, ContainerClinic, FilterAppointamentClinic, HourClinic, ImageClassification, StarText, TitleHour } from "./Style"
import { FilterAppointament } from "../home/style"
import { Button, ButtonClinic, ButtonSecondary, ButtonSecondaryTitle } from "../../components/button/Style"
import { ButtonTittle } from "../../components/buttonTitle/Style"
import { ScrollClinic } from "../../components/scrollView/ScrollView"

export const ChoiceClinic = ({ navigation }) => {
    return (
        <ContainerClinic>
            <TitleClinic>Selecionar clínica</TitleClinic>
            <ScrollClinic>
                <ClinicCard>
                    <ProfileNameClinic>Diamond e cash</ProfileNameClinic>
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
                    <ProfileNameClinic>Diamond e cash</ProfileNameClinic>
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
                    <ProfileNameClinic>Diamond e cash</ProfileNameClinic>
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
            </ScrollClinic>

            <ButtonClinic onPress={() => navigation.navigate("ChoiceDoctor")}>
                <ButtonTittle>Continuar</ButtonTittle>
            </ButtonClinic>
            <ButtonSecondary onPress={() => navigation.navigate("Home")}>
                <ButtonSecondaryTitle>
                    Cancelar
                </ButtonSecondaryTitle>
            </ButtonSecondary>

        </ContainerClinic>
    )
}