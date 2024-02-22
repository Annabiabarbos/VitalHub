import { Button } from "../../components/button/Style"
import { ButtonTittle } from "../../components/buttonTitle/Style"
import { Container } from "../../components/container/Style"
import { Input } from "../../components/input/Style"
import { Logo } from "../../components/logo/Style"
import { Text, TextCancelar } from "../../components/texts/Style"
import { Title } from "../../components/title/Style"


export const NewAccount = ({navigation}) => {
    return (
        <Container>

            <Logo source={require("../../../assets/logo.png")} />

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
            <Button>
                <ButtonTittle
                onPress={() => navigation.navigate("Home")}
                >Cadastrar</ButtonTittle>
            </Button>

            <TextCancelar
                onPress={() => navigation.navigate("Login")}
            >Cancelar</TextCancelar>

        </Container>
    )
}