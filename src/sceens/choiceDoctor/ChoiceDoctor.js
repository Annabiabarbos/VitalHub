import { ScrollView } from "react-native"
import { Container } from "../../components/container/Style"
import { FilterAppointamentDoctor } from "../../components/doctorCard/Style"
import { Title } from "../../components/title/Style"
import { DoctorCard, ImageCard, TitleCard } from "./Style"
import { TextAge, TextBold } from "../../components/appointmentCard/Style"

export const ChoiceDoctor = () => {
    return (
        <Container>

            <Title>Selecionar médico</Title>
            <ScrollView>
                <FilterAppointamentDoctor>
                    <DoctorCard>
                        <ImageCard source={{ uri: "../../../assets/Doctor1.png" }} />
                        <TitleCard>Dra Alessandra</TitleCard>
                    </DoctorCard>
                    <DoctorCard />
                </FilterAppointamentDoctor>
            </ScrollView>



        </Container>
    )
}