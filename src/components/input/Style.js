import { StyleSheet, View } from "react-native";
import styled from "styled-components";
import { AntDesign } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

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
export const InputProntBig = styled(Input)`
height: 120px ;
margin-top: 10px;
`
export const InputProntBigEdit = styled(InputProntBig)`
background-color: #E6E6E6;
border-color: transparent;
`
export const InputProntEdit = styled(Input)`
background-color: #E6E6E6;
border-color: transparent;
`

export const InputPront = styled(Input)`  
margin-top: 10px;
`
export const InputProfile = styled(Input)`
background-color: #E6E6E6;
border-color: transparent;
margin-left: 10px;
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
                    { label: '08h30', value: 'hour1' },
                    { label: '12h00', value: 'hour2' },
                    { label: '16h30', value: 'hour3' },
                    
                    
                ]}
            />
        </View>

    )
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        height: 53,
        borderColor: '#60BFC5',
        borderWidth: 2,
        borderRadius: 5,
        fontFamily: 'MontserratAlternates_600SemiBold',
        fontSize: 14,
        padding: 16,
        display: "flex",

    },
    container: {

        width: "90%",
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
        color: "#60BFC5"
    },  inputAndroid: {
        fontSize: 16,
        fontFamily:" MontserratAlternates_600SemiBold",
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 2,
        borderColor: '#60BFC5',
        borderRadius: 5,
        color: 'black',
        paddingRight: 30, 
        width: 340,
        height: 53,
        marginBottom: 10,
        
        // to ensure the text is never behind the icon
      },
    });
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },


});
