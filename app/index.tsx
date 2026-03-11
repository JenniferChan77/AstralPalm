import { router } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import { useEffect, useRef } from "react";
import { Text, View } from "react-native";

export default function LoadingScreen() {
  const hasNavigated = useRef(false);

  const player = useVideoPlayer(
    require("../assets/videos/loading.mp4"),
    (p) => {
      p.play();
    }
  );

  useEffect(() => {
    const subscription = player.addListener("playToEnd", () => {
      if (!hasNavigated.current) {
        hasNavigated.current = true;
        router.replace("/intro");
      }
    });

    // Safety fallback in case playToEnd event doesn't fire
    const timeout = setTimeout(() => {
      if (!hasNavigated.current) {
        hasNavigated.current = true;
        router.replace("/intro");
      }
    }, 4000);

    return () => {
      subscription.remove();
      clearTimeout(timeout);
    };
  }, [player]);

  return (
    <View className="flex-1 bg-[#0A0010]">
      <VideoView
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        player={player}
        allowsFullscreen={false}
        allowsPictureInPicture={false}
        nativeControls={false}
      />
      <View className="absolute inset-0 items-center pt-[170px]" pointerEvents="none">
        <Text
          className="text-[#D4B483] text-lg italic font-light tracking-[0.8px] text-center px-10"
          style={{
            textShadowColor: "rgba(0, 0, 0, 0.8)",
            textShadowOffset: { width: 0, height: 1 },
            textShadowRadius: 6,
          }}
        >
          Your destiny is written in your hands.
        </Text>
      </View>
    </View>
  );
}
