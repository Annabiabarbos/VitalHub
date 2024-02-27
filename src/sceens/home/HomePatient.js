import { StatusBar } from "react-native"
import { Container } from "../../components/container/Style"
import { Header } from "../../components/header/Header"
import { HomeCalendar } from "../../components/homeCalendar/HomeCalendar"
import { FilterAppointament } from "./style"
import { AbsListAppointament } from "../../components/absListAppointment/absListAppointment"
import { ListComponent } from "../../components/list/List"
import { AppointmentCard } from "../../components/appointmentCard/AppointmentCard"
import { CancellationModal } from "../../components/cancelationModal/CancelationModal"
import AppointmentModal from "../../components/appointmentModal/AppointmentModal"

export const HomePatient = () => {
    return (
        <Container>

            <StatusBar />

            {/* Header */}
            <Header />

            {/* Calendar */}
            <HomeCalendar />

            {/* Filtros (button) */}




            <FilterAppointament>

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
                            situacao={item.situacao}
                            onPressCancel={() => setShowModalCancel(true)}
                            onPressAppointment={() => setShowModalAppointment(true)}
                        />
                    )
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
            />
        </Container>
    )
}