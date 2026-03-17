import { Stack } from "expo-router";
import { ImageBackground, View } from "react-native";

export default function PalmLayout() {
  return (
    <ImageBackground
      source={require("../../assets/images/background.png")}
      className="flex-1"
      resizeMode="cover"
    >
      <View className="flex-1" style={{ backgroundColor: "rgba(10, 0, 16, 0.6)" }}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "transparent" },
          }}
        />
      </View>
    </ImageBackground>
  );
}
