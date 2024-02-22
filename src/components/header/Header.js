import { ContainerHeader } from "../container/Style";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./Style";
import { MaterialIcons } from "@expo/vector-icons";

export const Header = () => {
  return (
    <ContainerHeader>
        <BoxUser>
          <ImageUser source={{ uri: "https://github.com/Annabiabarbos.png" }} />
          <DataUser>
            <TextDefault>Bem vindo(a)</TextDefault>
            <NameUser>Dra.Anna</NameUser>
          </DataUser>
        </BoxUser>

        {/* material icons */}
        <MaterialIcons name="notifications" size={25} color="#fbfbfb" />
    
    </ContainerHeader>
  );
};