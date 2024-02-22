
import { View } from "react-native"
import { ButtonTittle } from "../../components/buttonTitle/Style"
import { Container } from "../../components/container/Style"
import { Input } from "../../components/input/Style"
import { Logo } from "../../components/logo/Style"
import { Text } from "../../components/texts/Style"
import { Title } from "../../components/title/Style"
import { Button } from "../../components/button/Style"



export const Password = ({navigation}) => {
    return(
        <Container>
            <Logo
            source={require("../../../assets/logo.png")}
            />
            <Title>Recuperar Senha</Title>
            <Text>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Text>
            <Input
            placeholder="Usuário ou email"
            />
            
            <Button onPress={() => navigation.navigate ("Verify")}>
                <ButtonTittle>Continuar</ButtonTittle>
            </Button>
           
        </Container>
    )
}