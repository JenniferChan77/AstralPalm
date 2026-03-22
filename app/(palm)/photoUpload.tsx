import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { uploadPalms } from "../../lib/palmApi";

const GUIDELINES = [
  "Entire palm visible (including fingers)",
  "Bright lighting, no heavy shadows",
  "Hand fully open and flat",
  "Clear focus, not blurry",
  "Plain background preferred",
];

export default function PhotoUploadScreen() {
  const router = useRouter();
  const [leftPhoto, setLeftPhoto] = useState<string | null>(null);
  const [rightPhoto, setRightPhoto] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async () => {
    if (!leftPhoto || !rightPhoto) return;
    setIsUploading(true);
    try {
      await uploadPalms(leftPhoto, rightPhoto);
      // TODO: navigate to analysis screen
    } catch (error: any) {
      Alert.alert("Upload Failed", error.message ?? "Something went wrong. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const pickImage = async (hand: "left" | "right") => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      quality: 1,
    });
    if (!result.canceled) {
      if (hand === "left") setLeftPhoto(result.assets[0].uri);
      else setRightPhoto(result.assets[0].uri);
    }
  };

  return (
    <View className="flex-1">
      <ScrollView
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View className="flex-row items-center px-5 pt-16 pb-6">
            <TouchableOpacity onPress={() => router.back()} className="mr-4 p-1">
              <Ionicons name="chevron-back" size={26} color="#D4B483" />
            </TouchableOpacity>
            <Text className="flex-1 text-white text-xl font-semibold text-center pr-9">
              Upload Clear Palm Photos
            </Text>
          </View>

          {/* Dashed Upload Boxes */}
          <View className="flex-row gap-4 px-5 mb-8">
            {/* Left Hand */}
            <TouchableOpacity
              className="flex-1 aspect-[3/4] rounded-2xl border-2 border-dashed border-white/30 items-center justify-center overflow-hidden"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              activeOpacity={0.7}
              onPress={() => pickImage("left")}
            >
              {leftPhoto ? (
                <Image source={{ uri: leftPhoto }} className="w-full h-full" resizeMode="cover" />
              ) : (
                <>
                  <Ionicons name="hand-right-outline" size={48} color="rgba(255,255,255,0.3)" />
                  <Text className="text-white/60 text-sm text-center mt-3">Left Palm</Text>
                </>
              )}
            </TouchableOpacity>

            {/* Right Hand */}
            <TouchableOpacity
              className="flex-1 aspect-[3/4] rounded-2xl border-2 border-dashed border-white/30 items-center justify-center overflow-hidden"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              activeOpacity={0.7}
              onPress={() => pickImage("right")}
            >
              {rightPhoto ? (
                <Image source={{ uri: rightPhoto }} className="w-full h-full" resizeMode="cover" />
              ) : (
                <>
                  <Ionicons name="hand-left-outline" size={48} color="rgba(255,255,255,0.3)" />
                  <Text className="text-white/60 text-sm text-center mt-3">Right Palm</Text>
                </>
              )}
            </TouchableOpacity>
          </View>

          {/* Photo Guidelines */}
          <View
            className="mx-5 rounded-2xl px-5 py-5"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.06)" }}
          >
            <Text className="text-[#D4B483] text-base font-semibold mb-3">
              Photo Guidelines
            </Text>
            <Text className="text-white/70 text-sm leading-5 mb-4">
              Upload a clear photo of your palm so AstralPalm can analyze your
              lines accurately.
            </Text>
            {GUIDELINES.map((item, index) => (
              <View key={index} className="flex-row items-start mb-2">
                <Text className="text-[#D4B483] text-sm mr-2">•</Text>
                <Text className="text-white/70 text-sm leading-5 flex-1">{item}</Text>
              </View>
            ))}
          </View>

          {/* Hint */}
          {(leftPhoto || rightPhoto) && (!leftPhoto || !rightPhoto) && (
            <Text className="text-center text-white/50 text-sm mb-2 px-5">
              Please upload both palms to continue
            </Text>
          )}

          {/* Upload Button */}
          <View className="px-5 mt-6">
            <TouchableOpacity
              className="bg-[#D4B483] rounded-full py-4 items-center"
              activeOpacity={0.8}
              disabled={!leftPhoto || !rightPhoto || isUploading}
              onPress={handleUpload}
              style={{ opacity: !leftPhoto || !rightPhoto || isUploading ? 0.5 : 1 }}
            >
              {isUploading ? (
                <ActivityIndicator color="#0A0010" />
              ) : (
                <Text className="text-[#0A0010] font-bold text-lg tracking-wide">
                  Upload
                </Text>
              )}
            </TouchableOpacity>
          </View>
      </ScrollView>
    </View>
  );
}
