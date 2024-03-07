
import { StatusBar } from "react-native"
import { Container } from "../../components/container/Style"

import { HomeCalendar } from "../../components/homeCalendar/HomeCalendar"
import { Header } from "../../components/header/Header"
import { useState } from "react"
import { FilterAppointament, IconButton } from "./style"
import { AbsListAppointament } from "../../components/absListAppointment/absListAppointment"

import { ListComponent } from "../../components/list/List"
import { AppointmentCard } from "../../components/appointmentCard/AppointmentCard"
import { CancellationModal } from "../../components/cancelationModal/CancelationModal"
import AppointmentModal from "../../components/appointmentModal/AppointmentModal"
import { ButtonAppointment } from "../../components/button/Style"
import { ScheduleModal } from "../../components/scheduleModal/ScheduleModal"


const Consultas = [
    { id: 1, nome: "joao", situacao: "pendente" },
    { id: 2, nome: "joao", situacao: "realizado" },
    { id: 3, nome: "joao", situacao: "cancelado" },
    { id: 4, nome: "joao", situacao: "realizado" },
    { id: 5, nome: "joao", situacao: "cancelado" },
]
export const Home = ({ navigation }) => {
    const [statusLista, setStatusLista] = useState("pendente")

    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalAppointment, setShowModalAppointment] = useState(false);
    const [showScheduleModal, setShowScheduleModal] = useState(false)


    return (
        <Container>

            <StatusBar />

            {/* Header */}
            <Header navigation={navigation} />

            {/* Calendar */}
            <HomeCalendar />

            {/* Filtros (button) */}

            <FilterAppointament >

                <AbsListAppointament
                    textButton={"Agendadas"}
                    clickButton={statusLista === "pendente"}
                    onPress={() => setStatusLista("pendente")}
                />

                <AbsListAppointament
                    textButton={"realizadas"}
                    clickButton={statusLista === "realizado"}
                    onPress={() => setStatusLista("realizado")}
                />

                <AbsListAppointament
                    textButton={"canceladas"}
                    clickButton={statusLista === "cancelado"}
                    onPress={() => setStatusLista("cancelado")}
                />

            </FilterAppointament>
            {/* cards */}
            {/* lista (flatlist) */}

            <ListComponent
                data={Consultas}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) =>
                    statusLista == item.situacao && (
                        <AppointmentCard
                            navigation={navigation}
                            situacao={item.situacao}
                            onPressCancel={() => setShowModalCancel(true)}
                            onPressAppointment={() => setShowModalAppointment(true)}
                        />)
                }
            />

            <CancellationModal
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
            />

            <AppointmentModal
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
                navigation={navigation}
                situacao={statusLista}
            />

            <ScheduleModal
                visible={showScheduleModal}
                setShowScheduleModal={setShowScheduleModal}
                navigation={navigation}
            />


            <ButtonAppointment onPress={() => { setShowScheduleModal(true) }}>
                <IconButton source={require("../../../assets/jam_medical.png")} />
            </ButtonAppointment>
        </Container>

    )
}