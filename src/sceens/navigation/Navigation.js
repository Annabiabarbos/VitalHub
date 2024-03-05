import { Button, View } from "react-native"

export const Navigation = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 10 }}>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="Profile"
                onPress={() => navigation.navigate("Profile")}
            />

            <Button
                title="Maps"
                onPress={() => navigation.navigate("Maps")}
            />

            <Button
                title="Prescription"
                onPress={() => navigation.navigate("Prescription")}
            />

        </View>

    )
}

