import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
} from "@nextui-org/react";
import { Slider, Select, SelectItem } from "@nextui-org/react";
import { compressImage } from "../utils/imageCompressor";
import { resizeImage } from "../utils/imageResizer";
import { useState } from "react";

export const CompressFormContents = () => {
  const [downloadImageAvailable, setDownloadImageAvailable] = useState({ url: "", format: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitCompress = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    // console.log(Object.fromEntries(formData));
    const { image, compressPercent } = Object.fromEntries(formData);
    console.log(image, compressPercent);
    const compressedImage = await compressImage(image, +compressPercent);
    const compressedImageUrl = URL.createObjectURL(compressedImage);
    console.log("Compressed Image URL: ", compressedImageUrl);
    setDownloadImageAvailable({ url: compressedImageUrl, format: image.type.split("/").at(1) });
    setIsLoading(false);
  };

  return (
    <form action="" encType="multipart/form-data" onSubmit={handleSubmitCompress}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-center">Compress Image</ModalHeader>
            <ModalBody>
              <Input
                name="image"
                autoFocus
                type="file"
                label="Select a file or drop one below"
                placeholder="Enter your email"
                // variant="bordered"
                required
                accept="image/*"
              />

              <Slider
                name="compressPercent"
                label="Select a value"
                color="foreground"
                size="md"
                step={5}
                marks={[
                  { value: 25, label: "Low" },
                  { value: 50, label: "Medium" },
                  { value: 75, label: "High" },
                ]}
                defaultValue={20}
                className="max-w-md"
                onChange={() => setDownloadImageAvailable({ url: "", format: "" })}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>

              {downloadImageAvailable.url ? (
                <a
                  href={downloadImageAvailable.url}
                  download={`compressed_image.${downloadImageAvailable.format}`}
                >
                  <Button color="success" type="button">
                    Download Image
                  </Button>
                </a>
              ) : (
                <Button color="primary" type="submit">
                  {isLoading ? "Compressing..." : "Go Ahead"}
                </Button>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </form>
  );
};

export const ConvertFormContents = () => {
  // const [downloadUrl, setDownloadUrl] = useState("");
  // const [format, setFormat] = useState("");
  const [downloadImageAvailable, setDownloadImageAvailable] = useState({ url: "", format: "" });
  const [isLoading, setIsLoading] = useState(false);
  const formats = ["jpg", "png", "tiff", "webp"];

  console.log("Outside handler: ", downloadImageAvailable.format);

  const handleSubmitConvert = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    // formData.forEach((value, name) => console.log(name, value));
    const { image, desiredFormat } = Object.fromEntries(formData);
    // const convertedImage = await convertImage(image, desiredFormat);
    const convertedImageUrl = URL.createObjectURL(image);
    // console.log(convertedImageUrl, desiredFormat);
    setIsLoading(false);
    setDownloadImageAvailable({ url: convertedImageUrl, format: desiredFormat });
  };

  return (
    <form action="" encType="multipart/form-data" onSubmit={handleSubmitConvert}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-center">Convert Image</ModalHeader>
            <ModalBody>
              <Input
                name="image"
                autoFocus
                type="file"
                label="Select a file or drop one below"
                placeholder="Enter your email"
                // variant="bordered"
                required
                accept="image/*"
              />

              <Select
                isRequired
                name="desiredFormat"
                label="Select an image format"
                // variant="bordered"
                onChange={() => setDownloadImageAvailable({ url: "", format: "" })}
                // placeholder="Select an image format"
                // className="max-w-xl"
              >
                {formats.map((format) => (
                  <SelectItem key={format}>{format}</SelectItem>
                ))}
              </Select>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>

              {downloadImageAvailable.url ? (
                <a
                  href={downloadImageAvailable.url}
                  download={`converted_image.${downloadImageAvailable.format}`}
                >
                  <Button color="success" type="button">
                    Download Image
                  </Button>
                </a>
              ) : (
                <Button color="primary" type="submit">
                  {isLoading ? "Converting..." : "Go Ahead"}
                </Button>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </form>
  );
};

export const ResizeFormContents = () => {
  const [downloadImageAvailable, setDownloadImageAvailable] = useState({ url: "", format: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitResize = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const { image, x_pixels, y_pixels } = Object.fromEntries(formData);
    const resizedImage = await resizeImage(image, x_pixels, y_pixels);
    const resizedImageUrl = URL.createObjectURL(resizedImage);
    console.log(resizedImageUrl);

    setDownloadImageAvailable({ url: resizedImageUrl, format: image.type.split("/").at(1) });
    setIsLoading(false);
  };
  return (
    <form action="" encType="multipart/form-data" onSubmit={handleSubmitResize}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-center">Convert Image</ModalHeader>
            <ModalBody>
              <Input
                name="image"
                autoFocus
                type="file"
                label="Select a file or drop one below"
                placeholder="Enter your email"
                // variant="bordered"
                required
                accept="image/*"
              />

              <Input
                name="x_pixels"
                type="number"
                // label="Select a file or drop one below"
                placeholder="Horizontal pixel count"
                // variant="bordered"
                required
              />
              <Input
                name="y_pixels"
                type="number"
                // label="Select a file or drop one below"
                placeholder="Vertical pixel count"
                // variant="bordered"
                required
              />

              <p className="w-[95%] m-auto text-justify">
                NOTE: Our tool automatically optimizes your image's resolution while maintaining its
                original aspect ratio. The dimensions you enter are used as maximum values. The
                final image may be slightly smaller to ensure the best quality and proper
                proportions. Rest assured, we'll provide the highest resolution possible within the
                limits you set.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>

              {downloadImageAvailable.url ? (
                <a
                  href={downloadImageAvailable.url}
                  download={`resized_image.${downloadImageAvailable.format}`}
                >
                  <Button color="success" type="button">
                    Download Image
                  </Button>
                </a>
              ) : (
                <Button color="primary" type="submit">
                  {isLoading ? "Resizing..." : "Go Ahead"}
                </Button>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </form>
  );
};
