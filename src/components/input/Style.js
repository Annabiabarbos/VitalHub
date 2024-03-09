import { StyleSheet, View } from "react-native";
import styled from "styled-components";
import RNPickerSelect from 'react-native-picker-select';
import { AntDesign } from '@expo/vector-icons';


export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#34898f"
})`
width: 90%;
height: 53px;
padding: 16px;
margin-top : 15px;
border: 2px solid #49b3ba;
border-radius: 5px;
font-family: "MontserratAlternates_600SemiBold";
`
export const InputNumbers = styled(Input)`
width: 65px;
height: 62px;
margin-bottom: 30px;
font-size: 25px;
text-align: center;
`
export const InputProntBig = styled(Input).attrs({
    placeholderTextColor: "#4E4B59"
})`
height: 120px ;
width: 350px;
margin-top: 10px;
background-color: #E6E6E6;
border-color: transparent;
font-family: "MontserratAlternates_500Medium";
`   
export const InputProntBigEdit = styled(InputProntBig).attrs({
    placeholderTextColor: "#4E4B59"
})`
background-color: #E6E6E6;
border-color: transparent;
align-items: center;

flex-direction: row;
`
export const InputProntEdit = styled(Input)`
background-color: #E6E6E6;
border-color: transparent;
`

export const InputPront = styled(Input)`  
margin-top: 10px;
`  
export const InputProfile = styled(Input).attrs({
    placeholderTextColor: "#4E4B59"
})`
background-color: #E6E6E6;
border-color: transparent;

font-family: "MontserratAlternates_500Medium";
` 
export const InputAddress = styled(InputProfile)`
width: 145px;
height: 50px;
`

export const InputSelect = () => {
    return (
        <View style={pickerSelectStyles.container}>
            <RNPickerSelect style={pickerSelectStyles}

                placeholder={{
                    label: "Selecionar horário",
                    value: null,
                    color: '#34898F',
                }}
                useNativeAndroidPickerStyle={false}
                style={pickerSelectStyles}

                Icon={() => {
                    return <AntDesign name="caretdown" size={24} color="#60BFC5" style={pickerSelectStyles.icon} />;
                }}
                items={[
                    { label: '16h30m', value: 'hour1' },
                    { label: '12h', value: 'hour2' },
                    { label: '08h30m', value: 'hour3' }
                ]}
            />
        </View>
    )
}

const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        height: 53,
        width: 340,
        borderColor: '#60BFC5',
        borderWidth: 2,
        borderRadius: 5,
        fontFamily: 'MontserratAlternates_600SemiBold',
        fontSize: 14,
        padding: 16,
        display: "flex",
        

    },
    container: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    icon: {
        position: 'absolute',
        right: 16,
        top: 22,
    },
    placeholder: {
        marginTop:10,
        color: "#34898F"
    }
});
