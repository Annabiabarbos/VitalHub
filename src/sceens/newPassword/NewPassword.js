import { Container } from "../../components/container/Style"
import { Logo } from "../../components/logo/Style"
import { Title } from "../../components/title/Style"
import { Text} from "../../components/texts/Style"
import { Input } from "../../components/input/Style"
import { Button, ButtonNewPws } from "../../components/button/Style"
import { ButtonTittle } from "../../components/buttonTitle/Style"

export const NewPassword = ({navigation}) => {
    return (
       <Container>
        
        <Logo source={require("../../../assets/logo.png")}/>

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

        <ButtonNewPws>
            <ButtonTittle
            onPress = {() => navigation.navigate("Login")}
            >Confirmar nova senha</ButtonTittle>
        </ButtonNewPws>
       
       </Container>
    )
}