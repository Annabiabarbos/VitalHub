
import { Informations, ProfileImagePront } from "../../components/appointmentModal/Style"
import { ButtonAdd, ButtonCancell, ButtonCancellExams, ButtonSecondaryTitle, TittleCancellExams } from "../../components/button/Style"
import { Container, ContainerViewPrescription } from "../../components/container/Style"
import { InputProfile, InputPront, InputProntBig } from "../../components/input/Style"
import { ContainerScroll, ContainerScrollProfile, ScrollViewPrescription } from "../../components/scrollView/ScrollView"
import { Age, Email, TextInputDesc, TextInputDiag, TextInputInsertImage, TextInputMed, Title } from "../../components/title/Style"
import { ImageExams, ImportImages, SendImage, ViewButtons } from "./Style"

export const ViewPrescription = ({ navigation }) => {
    return (
        <ContainerViewPrescription>

            <ProfileImagePront source={require("../../../assets/DoctorClaudio.png")} />

            <Title> Dr. Claúdio </Title>


            <Informations>
                <Age>19 anos</Age>
                <Email>joao.oliveiira.pda@gmail.com</Email>
            </Informations>


            <ScrollViewPrescription>
                <TextInputDesc>
                    Descrição da consulta
                </TextInputDesc>

                <InputProfile
                    placeholder='Descrição'
                />

                <TextInputDiag>
                    Diagnóstico do paciente
                </TextInputDiag>

                <InputProfile
                    placeholder="Diagnóstico"
                />

                <TextInputMed>
                    Prescrição médica
                </TextInputMed>
                <InputProntBig
                    placeholder="Prescrição médica"
                />
                <TextInputMed>
                    Exames Médicos
                </TextInputMed>
                <ImportImages>
                    <ImageExams source={require("../../../assets/InsertExams.png")} />
                </ImportImages >

                <ViewButtons>
                    <ButtonAdd>
                        <SendImage source={require("../../../assets/Send.png")} />
                    </ButtonAdd>
                    <ButtonCancellExams>
                        <TittleCancellExams>Cancelar</TittleCancellExams>
                    </ButtonCancellExams>
                </ViewButtons>


            </ScrollViewPrescription>

            <ButtonCancell onPress={() => navigation.navigate("Home")}>
                <ButtonSecondaryTitle>
                    Voltar
                </ButtonSecondaryTitle>
            </ButtonCancell>

        </ContainerViewPrescription>
    )
}