import { useRouter } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      className="flex-1"
      resizeMode="cover"
    >
      <View className="flex-1 px-6 py-28 gap-10">
        {/* Palm Reader Banner */}
        <TouchableOpacity
          className="flex-1 items-center justify-center rounded-[3rem]"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
          activeOpacity={0.75}
          onPress={() => router.push("/(palm)/photoUpload")}
        >
          <Text className="text-white text-3xl font-semibold tracking-widest">
            Palm Reader
          </Text>
        </TouchableOpacity>

        {/* Horoscope Banner */}
        <TouchableOpacity
          className="flex-1 items-center justify-center rounded-[3rem]"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
          activeOpacity={0.75}
          disabled
        >
          <Text className="text-white text-3xl font-semibold tracking-widest">
            Horoscope
          </Text>
          <Text className="text-white/40 text-sm mt-2 tracking-widest uppercase">
            Coming Soon
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
