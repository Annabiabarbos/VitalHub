import { ContainerScrollProfile } from "../../components/ScrollView/ScrollView"
import { ButtonTextProfile } from "../../components/appointmentCard/Style"
import { ButtonProfile } from "../../components/button/Style"
import { InputAddress, InputProfile } from "../../components/input/Style"
import { Text } from "../../components/texts/Style"
import { Address, EmailProfile, InputCep, InputCity, NameProfile, ProfileContainer, ProfileImage, ProfileNameView, TextsProfile } from "./Style"

export const ProfileEdit = ({ navigation }) => {
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
                <ButtonProfile>
                    <ButtonTextProfile onPress={() => navigation.navigate("Home")}
                    >Salvar</ButtonTextProfile>
                </ButtonProfile>
                <ButtonProfile>
                    <ButtonTextProfile onPress={() => navigation.navigate("Profile")}
                    >Editar</ButtonTextProfile>
                </ButtonProfile>
            </ContainerScrollProfile>
        </ProfileContainer>
    )
}