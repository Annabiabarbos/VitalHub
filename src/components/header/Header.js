import { ContainerHeader } from "../container/Style";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./Style";
import { MaterialIcons } from "@expo/vector-icons";

export const Header = ({navigation}) => {
  return (
    <ContainerHeader >
        <BoxUser onPress={() => navigation.navigate("Profile")}>
          <ImageUser
          source={{ uri: "https://github.com/abbarbosa.png" }} />
          <DataUser>
            <TextDefault>Bem vindo(a)</TextDefault>
            <NameUser  >Dra.Anna Beatriz</NameUser>
          </DataUser>
        </BoxUser>

        {/* material icons */}
        <MaterialIcons name="notifications" size={25} color="#fbfbfb" 
        />
    
    </ContainerHeader>
  );
};