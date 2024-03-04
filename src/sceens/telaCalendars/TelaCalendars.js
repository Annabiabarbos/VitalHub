
import { Container } from "../../components/container/Style";
import CustomCalendar from "../../components/calendars/Calendars";
import { Title } from "../../components/title/Style";
import { InputSelect } from "../../components/input/Style";
import { Button, ButtonSecondary, ButtonSecondaryTitle } from "../../components/button/Style";
import { ButtonText, ButtonTextProfile } from "../../components/appointmentCard/Style";
import { ConfirmModal } from "../../components/confirmModal/ConfirmModal";
import { useEffect, useState } from "react"


export const TelaCalendars = ({ navigation }) => {

    const [showConfirmationModal, setShowConfirmationModal] = useState(false)

    return (
        <Container>
            <Title> Selecionar Data </Title>
            <CustomCalendar />
            <InputSelect />

            <ConfirmModal
                visible={showConfirmationModal}
                setShowConfirmationModal={setShowConfirmationModal}
                navigation={navigation}
            />
            <Button onPress={() => { setShowConfirmationModal(true) }}>
                <ButtonTextProfile>Continuar</ButtonTextProfile>
            </Button>

            <ButtonSecondary onPress={() => navigation.navigate("ChoiceDoctor")}>
                <ButtonSecondaryTitle>
                    Cancelar
                </ButtonSecondaryTitle>
            </ButtonSecondary>

        </Container>
    )
}