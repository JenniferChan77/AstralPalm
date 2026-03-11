import { useRouter } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function IntroScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/introBg.png")}
      className="flex-1"
      resizeMode="cover"
    >
      <View className="flex-1 items-center justify-between px-8 pt-32 pb-24">
        <Text className="text-[#D4B483] text-2xl italic font-light text-center leading-9">
          The universe left a map in your hand
        </Text>

        <TouchableOpacity
          className="w-2/3 bg-[#D4B483] rounded-full py-4 items-center"
          onPress={() => router.replace("/home")}
          activeOpacity={0.8}
        >
          <Text className="text-[#0A0010] text-lg font-bold tracking-wide">
            Reveal My Reading
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
