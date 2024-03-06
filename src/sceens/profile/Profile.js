
import { ContainerScrollProfile } from "../../components/scrollView/ScrollView"
import { ButtonTextProfile } from "../../components/appointmentCard/Style"
import { ButtonEditMedRec, ButtonExit, ButtonProfile, ButtonSecondary, ButtonSecondaryTitle } from "../../components/button/Style"
import { InputAddress, InputProfile } from "../../components/input/Style"
import { Address, EmailProfile, InputCep, InputCity, NameProfile, ProfileContainer, ProfileImage, ProfileNameView, TextsProfile } from "./Style"



export const Profile = ({ navigation }) => {
    return (
        <ProfileContainer>

            <ProfileImage source={{ uri: "https://github.com/ojuaum1.png" }} />
            <ProfileNameView>
                <NameProfile>João Oliveira</NameProfile>
                <EmailProfile>joao.oliveiira.pda@gmail.com</EmailProfile>
            </ProfileNameView>
            <ContainerScrollProfile>
                <TextsProfile>Data de nascimento</TextsProfile>
                <InputProfile />
                <TextsProfile>CPF</TextsProfile>
                <InputProfile />
                <TextsProfile>Endereço</TextsProfile>
                <InputProfile />
                <Address>
                    <InputCep>
                        <TextsProfile>CEP</TextsProfile>
                        <InputAddress />
                    </InputCep>
                    <InputCity>
                        <TextsProfile>Cidade</TextsProfile>
                        <InputAddress />
                    </InputCity>
                </Address>
                <ButtonProfile onPress={() => navigation.navigate("Profile")}>
                    <ButtonTextProfile
                    >Salvar</ButtonTextProfile>
                </ButtonProfile>

                <ButtonProfile onPress={() => navigation.navigate("ProfileEdit")}>
                    <ButtonTextProfile
                    >Editar perfil</ButtonTextProfile>
                </ButtonProfile>

                <ButtonExit onPress={() => navigation.navigate("Login")}>
                    <ButtonTextProfile>
                        Sair do app
                    </ButtonTextProfile>
                </ButtonExit>
                
            </ContainerScrollProfile>
        </ProfileContainer>
    )
}