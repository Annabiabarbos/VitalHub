
import { Logo } from "../../components/logo/Style"
import { Title } from "../../components/title/Style"
import { Container } from "../../components/container/Style"
import { Input } from "../../components/input/Style"
import { LinkBold, LinkMedium } from "../../components/links/Style"
import { Button, ButtonGoogle } from "../../components/button/Style"
import { ButtonTittle, ButtonTittleGoogle } from "../../components/buttonTitle/Style"
import { AntDesign } from '@expo/vector-icons';
import { ContentAccount, TextAccount } from "./Style"


export const Login = ({ navigation }) => {
    async function Login(){
        navigation.replace("Main")
    }

    return (

        <Container>
            
                <Logo source={require("../../../assets/logo.png")} />

                <Title>Entrar ou criar conta</Title>



                <Input
                    placeholder="Usuário ou email"
                />

                <Input
                    placeholder="Senha"
                    secureTextEntry
                />

                <LinkMedium
                    onPress={() => navigation.navigate("Password")}
                > Esqueceu sua senha?</LinkMedium>

                <Button
                    onPress={() => Login()}
                >
                    <ButtonTittle
                    >Entrar</ButtonTittle>
                </Button>



                <ButtonGoogle
                    onPress={() => navigation.navigate("Home")}
                >
                    <AntDesign name="google" size={18} color="#496BBA" />
                    <ButtonTittleGoogle>Entrar com Google</ButtonTittleGoogle>
                </ButtonGoogle>

                <ContentAccount>
                    <TextAccount>Não tem conta?
                        <LinkBold
                            onPress={() => navigation.navigate("NewAccount")}
                        > Crie uma conta agora!</LinkBold>
                    </TextAccount>
                </ContentAccount>
        </Container >
    )
}

