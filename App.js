import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/sceens/navigation/Navigation";

const Stack = createNativeStackNavigator()

import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold, Quicksand_500Medium, Quicksand_700Bold, Quicksand_600SemiBold } from "@expo-google-fonts/montserrat-alternates";
import { Login } from "./src/sceens/login/Login";

import {Verify } from "./src/sceens/emailVerify/EmailVerify";

import { NewPassword } from "./src/sceens/newPassword/NewPassword";
import { NewAccount } from "./src/sceens/newAccount/NewAccount"
import { Password } from "./src/sceens/password/Password"
import { Home } from "./src/sceens/home/Home";
import { Profile } from "./src/sceens/profile/Profile";
import {ProfileEdit} from "./src/sceens/profile/ProfileEdit"
import {MedicalRecord} from "./src/sceens/medicalRecord/MedicalRecord"
import {MedicalRecordEdit} from "./src/sceens/medicalRecord/MedicalRecordEdit"

import { ChoiceClinic } from "./src/sceens/choiceClinic/ChoiceClinic";
import { ChoiceDoctor } from "./src/sceens/choiceDoctor/ChoiceDoctor";
import { TelaCalendars } from "./src/sceens/telaCalendars/TelaCalendars";




export default function app() {

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    Quicksand_700Bold,
    Quicksand_600SemiBold

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

      <Stack.Navigator>

        <Stack.Screen

          //nome da tela 
          name='Navigation'

          //componente que será chamado
          component={Navigation}

          //titulo da tela
          options={{ title: 'Navigation' }}
        />
        <Stack.Screen
          name="TelaCalendars"
          component={TelaCalendars}
          options={{ title: "TelaCalendars" }}
        />
        <Stack.Screen
          name="ProfileEdit"
          component={ProfileEdit}
          options={{ title: "Profile Edit" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Perfil" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />

        <Stack.Screen
          name="RecuperarSenha"
          component={Password}
          options={{ title: "Recuperar Senha" }}
        />

        <Stack.Screen
          name="Verify"
          component={Verify}
          options={{ title: "Verificar Email" }}
        />

        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
          options={{ title: "Redefinir senha" }}
        />

        <Stack.Screen
          name="NewAccount"
          component={NewAccount}
          options={{ title: "Criar conta" }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />

        <Stack.Screen
          name="MedicalRecord"
          component={MedicalRecord}
          options={{ title: "MedicalRecord" }}
        />

        <Stack.Screen
          name="MedicalRecordEdit"
          component={MedicalRecordEdit}
          options={{ title: "MedicalRecordEdit" }}
        />
        <Stack.Screen
          name="ChoiceClinic"
          component={ChoiceClinic}
          options={{ title: "ChoiceClinic" }}
        />

        <Stack.Screen
          name="ChoiceDoctor"
          component={ChoiceDoctor}
          options={{ title: "ChoiceDoctor" }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  )
}