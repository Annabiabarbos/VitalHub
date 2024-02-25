import { ButtonText, ButtonTextProfile } from "../../components/appointmentCard/Style"
import { Informations } from "../../components/appointmentModal/Style"
import { Button, ButtonProfile } from "../../components/button/Style"
import { Input, InputAddress, InputProfile } from "../../components/input/Style"
import { Text } from "../../components/texts/Style"
import { Address, EmailProfile, InputCep, InputCity, NameProfile, ProfileContainer, ProfileImage, ProfileName, ProfileNameView, TextsProfile } from "./Style"



export const Profile = ({navigation}) => {
    return (
        <ProfileContainer>
            <ProfileImage source={{ uri: "https://github.com/ojuaum1.png" }} />
            <ProfileNameView>
                <NameProfile>João Oliveira</NameProfile>
                <EmailProfile>joao.oliveiira.pda@gmail.com</EmailProfile>
            </ProfileNameView>
            <TextsProfile>Data de nascimento</TextsProfile>
            <InputProfile />
            <TextsProfile>CPF</TextsProfile>
            <InputProfile />
            <TextsProfile>Endereço</TextsProfile>
            <InputProfile />
            {/* <Address>
                <InputCep>
                    <TextsProfile>CEP</TextsProfile>
                    <InputAddress />
                </InputCep>
                <InputCity>
                    <TextsProfile>CEP</TextsProfile>
                    <InputAddress />
                </InputCity>
            </Address> */}
            <ButtonProfile>
                <ButtonTextProfile onPress={() => navigation.navigate ("Home")}
                >Salvar</ButtonTextProfile>
            </ButtonProfile>
        </ProfileContainer>
    )
}