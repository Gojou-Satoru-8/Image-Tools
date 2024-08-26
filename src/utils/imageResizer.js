import { readAndCompressImage } from "browser-image-resizer";

// Note: A single file comes from event.target.files on <input>
export const resizeImage = async function (file, width, height, quality = 1) {
  const config = { quality, maxWidth: width, maxHeight: height, mode: "stretch" };

  try {
    console.log("Before resizing: ", file.size);

    let resizedImage = await readAndCompressImage(file, config);
    console.log("After resizing: ", resizedImage);
    return resizedImage;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
