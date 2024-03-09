import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator()

import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold, Quicksand_500Medium, Quicksand_700Bold, Quicksand_600SemiBold } from "@expo-google-fonts/montserrat-alternates";
import { Login } from "./src/sceens/login/Login";

import { Verify } from "./src/sceens/emailVerify/EmailVerify";

import { NewPassword } from "./src/sceens/newPassword/NewPassword";
import { NewAccount } from "./src/sceens/newAccount/NewAccount"
import { Password } from "./src/sceens/password/Password"
import { Home } from "./src/sceens/home/Home";
import { Profile } from "./src/sceens/profile/Profile";
import { MedicalRecord } from "./src/sceens/medicalRecord/MedicalRecord"
import { MedicalRecordEdit } from "./src/sceens/medicalRecord/MedicalRecordEdit"

import { ChoiceClinic } from "./src/sceens/choiceClinic/ChoiceClinic";
import { ChoiceDoctor } from "./src/sceens/choiceDoctor/ChoiceDoctor";
import { TelaCalendars } from "./src/sceens/telaCalendars/TelaCalendars";
import { Maps } from "./src/sceens/maps/Maps";
import { Prescription } from "./src/sceens/prescription/Prescription";
import { Main } from "./src/sceens/main/Main";
import { ViewPrescription } from "./src/sceens/viewPrescription/ViewPrescription";




export default function app() {

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    Quicksand_700Bold,
    Quicksand_600SemiBold,

  });

  if (!fontsLoaded && !fontsError) {
    return null;
  }


  return (
    //navegação 
    //container
    //stackNavigator
    //StackScreen

    //envolve a estrutura de navegação 

    <NavigationContainer>

      <Stack.Navigator

        screenOptions={{ headerShown: false }}

      >

        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="Main"
          component={Main}
        />


        {/* <Stack.Screen

          //nome da tela 
          name='Navigation'

          //componente que será chamado
          component={Navigation}

          //titulo da tela
          options={{ title: 'Navigation' }}
        /> */}


        <Stack.Screen
          name="TelaCalendars"
          component={TelaCalendars}

        />

        <Stack.Screen
          name="Profile"
          component={Profile}

        />


        <Stack.Screen
          name="Password"
          component={Password}

        />

        <Stack.Screen
          name="Verify"
          component={Verify}

        />

        <Stack.Screen
          name="NewPassword"
          component={NewPassword}

        />

        <Stack.Screen
          name="NewAccount"
          component={NewAccount}
        />

        <Stack.Screen
          name="Home"
          component={Home}
        />

        <Stack.Screen
          name="MedicalRecord"
          component={MedicalRecord}
        />

        <Stack.Screen
          name="MedicalRecordEdit"
          component={MedicalRecordEdit}
        />

        <Stack.Screen
          name="ChoiceClinic"
          component={ChoiceClinic}
        />

        <Stack.Screen
          name="ChoiceDoctor"
          component={ChoiceDoctor}
        />


        <Stack.Screen
          name="Maps"
          component={Maps}
        />

        <Stack.Screen
          name="Prescription"
          component={Prescription}
        />


        <Stack.Screen
          name="ViewPrescription"
          component={ViewPrescription}
        />


      </Stack.Navigator>

    </NavigationContainer>
  )
}