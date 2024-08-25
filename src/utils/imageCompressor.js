import imageCompression from "browser-image-compression";

export const compressImage = async (file, compressPercent) => {
  const fileSizeMB = file.size / 1024 / 1024;
  const desiredSize = ((100 - compressPercent) / 100) * fileSizeMB;
  // higher compressPercent => lower file size, hence 100 - compressPercent
  console.log("Before compression, size = ", fileSizeMB);

  const options = {
    maxSizeMB: desiredSize,
    // maxWidthOrHeight: 1920,
    alwaysKeepResolution: true,
    useWebWorker: true,
  };
  try {
    const compressedFile = await imageCompression(file, options);
    // console.log("compressedFile instanceof Blob", compressedFile instanceof Blob); // true
    // console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB

    return compressedFile;
  } catch (error) {
    return error;
  }
};

// export const convertImage = async (file, desiredFormat) => {
//   const options = {
//     alwaysKeepResolution: true,
//     useWebWorker: true,
//     fileType: desiredFormat,
//   };

//   console.log("Before conversion, file type: ", file.type);
//   const convertedImage = await imageCompression(file, options);
//   console.log("After conversion, file type: ", convertedImage);
//   return convertedImage;
// };
