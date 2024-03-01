import { ButtonSecondary, ButtonSecondaryTitle } from "../../components/button/Style"
import { ButtonTittle } from "../../components/buttonTitle/Style"
import { Container } from "../../components/container/Style"
import { InputSelect } from "../../components/input/Style"
import { TitleDate } from "../../components/title/Style"
import { ButtonChoiceDoctor, TitleCard } from "../choiceDoctor/Style"
import { ButtonSelectDate, ContainerDate, InputHour, InputIcon, InputView } from "./Style"
import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
    monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ],
    dayNames: [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
};

LocaleConfig.defaultLocale = 'pt-br';

export const SelectDate = ({ navigation }) => {
    const [selected, setSelected] = useState('');
    return (
        <ContainerDate>
            <Calendar
                style={{
                    width: 350,
                    backgroundColor: 'white',
                    marginBottom: 5,
                }}
                // Função para atualizar a data selecionada quando um dia é pressionado
                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                // Oculta as setas de navegação do calendário
                hideArrows={true}

                // Personalização do tema do calendário
                theme={{
                    selectedDayBackgroundColor: '#49B3BA',
                    selectedDayTextColor: '#FFFFFF',
                    dayBackgroundColor: 'transparent'
                }}

                // Marcadores para a data selecionada
                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: true }
                }}
            />

            

            <InputSelect 
            />

            <ButtonSelectDate>
                <ButtonTittle>Confirmar</ButtonTittle>
            </ButtonSelectDate>

            <ButtonSecondary onPress={() => navigation.navigate("ChoiceDoctor")}>
                <ButtonSecondaryTitle>
                    Cancelar
                </ButtonSecondaryTitle>
            </ButtonSecondary>

        </ContainerDate>


    )

}