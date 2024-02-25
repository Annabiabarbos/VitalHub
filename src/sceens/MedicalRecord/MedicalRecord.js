import { Informations, ProfileImagePront } from "../../components/appointmentModal/Style"
import { Button, ButtonSecondary, ButtonSecondaryTitle, ButtonTitle } from "../../components/button/Style"
import { Container } from "../../components/container/Style"
import { InputPront, InputProntBig } from "../../components/input/Style"
import { Age, Email, TextInput, Title } from "../../components/title/Style"

export const MedicalRecord = () => {
    return (
        <Container>
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

            <Button>
                <ButtonTitle>Salvar</ButtonTitle>
            </Button>

            <Button>
                <ButtonTitle>Editar</ButtonTitle>
            </Button>

            <ButtonSecondary onPress={() => setShowModalAppointment(false)}>
                <ButtonSecondaryTitle>
                    Cancelar
                </ButtonSecondaryTitle>
            </ButtonSecondary>
        </Container>
    )
}