import { Modal } from "react-native"
import { ModalContent, ModalText, PatientModal } from "../cancelationModal/Style"
import { Title } from "../title/Style"
import { Button, ButtonSecondary, ButtonSecondaryTitle } from "../button/Style"
import { ButtonTittle } from "../buttonTitle/Style"

//import do notification
import * as notifications from "expo-notifications"

//conceder permissão
notifications.requestPermissionsAsync();

notifications.setNotificationHandler({
    handleNotification: async () => ({

        //mostra o alerta quando a notificacao for recebida
        shouldShowAlert: true,

        //define o som da notificacao
        shouldPlaySound: true,

        //configura o numeor de notificacao0es no icone do app
        shouldSetBadge: false,
    })
})

export const CancellationModal = ({ visible, setShowModalCancel, ...rest }) => {

    const CancelationNotification = async () => {

        //ststus da permissao
        const { status } = await notifications.getPermissionsAsync();

        // verifica se o usuario concedeu permissao
        if (status !== "granted") {
            console.log("Você não ativou as notificações");
            return;
        }
        //enviar as notifications 
        await notifications.scheduleNotificationAsync({
            content: {
                title: "Consulta Cancelada",
                body: "Sua consulta marcada para o dia 10/04 ás 14:15 foi cancelada",
            },

            trigger: {
            seconds: 5
          }
        })

    }
    return (

        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            <PatientModal>
                <ModalContent>

                    <Title>Cancelar consulta</Title>

                    <ModalText>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</ModalText>

                    <Button onPress={CancelationNotification}>
                        <ButtonTittle>Confirmar</ButtonTittle>
                    </Button>

                    <ButtonSecondary onPress={() => setShowModalCancel(false)}>
                        <ButtonSecondaryTitle>
                            Cancelar
                        </ButtonSecondaryTitle>
                    </ButtonSecondary>

                </ModalContent>
            </PatientModal>

        </Modal>
    )
}