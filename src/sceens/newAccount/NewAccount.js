import { Button } from "../../components/button/Style"
import { ButtonTittle } from "../../components/buttonTitle/Style"
import { Container } from "../../components/container/Style"
import { Input } from "../../components/input/Style"
import { Logo } from "../../components/logo/Style"
import { Text, TextCancelar } from "../../components/texts/Style"
import { Title } from "../../components/title/Style"
import { ImageBack, TouchableOpacityBack, ViewNewPsw } from "../newPassword/Style"


export const NewAccount = ({ navigation }) => {
    return (
        <Container>

            <ViewNewPsw>

                <TouchableOpacityBack onPress={() => navigation.navigate("Login")}>
                    <ImageBack source={require("../../../assets/BackIcon.png")}
                    
                    />
                </TouchableOpacityBack>



                <Logo source={require("../../../assets/logo.png")} />

            </ViewNewPsw>

            <Title>Criar conta</Title>

            <Text>Insira seu endereço de e-mail e senha para realizar seu cadastro</Text>

            <Input
                placeholder="Usuário ou E-mail"
            />

            <Input
                placeholder="Senha"
                secureTextEntry
            />

            <Input
                placeholder="Confirmar Senha"
                secureTextEntry
            />
            <Button onPress={() => navigation.navigate("Login")}>
                <ButtonTittle
                >Cadastrar</ButtonTittle>
            </Button>

            <TextCancelar
                onPress={() => navigation.navigate("Login")}
            >Cancelar</TextCancelar>
        </Container>
    )
}