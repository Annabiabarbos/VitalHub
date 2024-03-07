import { View } from "react-native"
import { Container } from "../../components/container/Style"
import { Input, InputNumbers } from "../../components/input/Style"
import { Logo } from "../../components/logo/Style"
import { Title } from "../../components/title/Style"
import { Button } from "../../components/button/Style"
import { ButtonTittle } from "../../components/buttonTitle/Style"
import { Text, TextEmail } from "../../components/texts/Style"
import { LinkReenviar } from "../../components/links/Style"
import { ImageBack, TouchableOpacityBack, ViewNewPsw } from "../newPassword/Style"


export const Verify = ({ navigation }) => {
    return (
        <Container>

            <ViewNewPsw>

                <TouchableOpacityBack onPress={() => navigation.navigate("Password")}>
                    <ImageBack source={require("../../../assets/BackIcon.png")}

                    />
                </TouchableOpacityBack>



                <Logo source={require("../../../assets/logo.png")} />

            </ViewNewPsw>

            <Title>Verifique seu e-mail</Title>

            <Text>Digite o código de 4 dígitos enviado para <TextEmail>username@email.com</TextEmail> </Text>


            <View style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                gap: 15
            }}
            >
                <InputNumbers placeholder="0" />
                <InputNumbers placeholder="0" />
                <InputNumbers placeholder="0" />
                <InputNumbers placeholder="0" />
            </View>

            <Button
                onPress={() => navigation.navigate("NewPassword")}
            >
                <ButtonTittle>Entrar</ButtonTittle>
            </Button>

            <LinkReenviar>Reenviar código</LinkReenviar>


        </Container>


    )
}