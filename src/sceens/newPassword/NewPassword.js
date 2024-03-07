import { Container } from "../../components/container/Style"
import { Logo } from "../../components/logo/Style"
import { Title } from "../../components/title/Style"
import { Text } from "../../components/texts/Style"
import { Input } from "../../components/input/Style"
import { ButtonNewPws } from "../../components/button/Style"
import { ButtonTittle } from "../../components/buttonTitle/Style"
import { ImageBack, TouchableOpacityBack, ViewNewPsw } from "./Style"

export const NewPassword = ({ navigation }) => {
    return (
        <Container>

            <ViewNewPsw>

                <TouchableOpacityBack onPress={() => navigation.navigate("Verify")}>
                    <ImageBack source={require("../../../assets/BackIcon.png")}

                    />
                </TouchableOpacityBack>



                <Logo source={require("../../../assets/logo.png")} />

            </ViewNewPsw>

            <Title>Redefinir senha </Title>

            <Text>Insira e confirme a sua nova senha</Text>

            <Input
                placeholder="Nova senha"
                secureTextEntry
            />

            <Input
                placeholder="Confirmar nova senha"
                secureTextEntry
            />

            <ButtonNewPws onPress={() => navigation.navigate("Login")}>
                <ButtonTittle

                >Confirmar nova senha</ButtonTittle>
            </ButtonNewPws>

        </Container>
    )
}
