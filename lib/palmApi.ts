import { ImageManipulator, SaveFormat } from "expo-image-manipulator";
import { API_BASE_URL } from "./config";

const compressImage = async (uri: string): Promise<string> => {
  const ctx = ImageManipulator.manipulate(uri);
  ctx.resize({ width: 1024 });
  const rendered = await ctx.renderAsync();
  // Always saved as JPEG regardless of the original format from the photo library
  const result = await rendered.saveAsync({ compress: 0.8, format: SaveFormat.JPEG });
  return result.uri;
};

export const uploadPalms = async (leftUri: string, rightUri: string): Promise<void> => {
  const [compressedLeft, compressedRight] = await Promise.all([
    compressImage(leftUri),
    compressImage(rightUri),
  ]);

  const formData = new FormData();
  formData.append("leftPalm", {
    uri: compressedLeft,
    name: compressedLeft.split("/").pop() ?? "left.jpg",
    type: "image/jpeg",
  } as any);
  formData.append("rightPalm", {
    uri: compressedRight,
    name: compressedRight.split("/").pop() ?? "right.jpg",
    type: "image/jpeg",
  } as any);

  const response = await fetch(`${API_BASE_URL}/analyzePalm`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.error ?? `Server error: ${response.status}`);
  }

  const message = await response.text();
  console.log("analyzePalm success:", message);
};
