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
import { useState } from "react";

export const CompressFormContents = () => {
  const [downloadImage, setDownloadImage] = useState({ url: "", format: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitCompress = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(Object.fromEntries(formData));
    const { image, compressPercent } = Object.fromEntries(formData);
    console.log(image, compressPercent);
    const compressedImage = await compressImage(image, +compressPercent);
    const compressedImageUrl = URL.createObjectURL(compressedImage);
    console.log("Compressed Image URL: ", compressedImageUrl);
    setDownloadImage({ url: compressedImageUrl, format: image.type.split("/").at(1) });
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
                onChange={() => setDownloadImage({ url: "", format: "" })}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" type="submit">
                Go Ahead
              </Button>
              {isLoading && <h1>Loading</h1>}
              {downloadImage.url && (
                <Button color="primary" type="submit">
                  <a href={downloadImage.url} download={`compressedImage.${downloadImage.format}`}>
                    Download Image
                  </a>
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
  const [downloadImage, setDownloadImage] = useState({ url: "", format: "" });
  const [isLoading, setIsLoading] = useState(false);
  const formats = ["jpg", "png", "tiff", "webp"];

  console.log("Outside handler: ", downloadImage.format);

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
    setDownloadImage({ url: convertedImageUrl, format: desiredFormat });
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
                onChange={() => setDownloadImage({ url: "", format: "" })}
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
              <Button color="primary" type="submit">
                Go Ahead
              </Button>
              {isLoading && <h1>Loading</h1>}
              {downloadImage.url && (
                <Button color="primary" type="submit">
                  <a href={downloadImage.url} download={`compressedImage.${downloadImage.format}`}>
                    Download Image
                  </a>
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
  const [downloadImage, setDownloadImage] = useState({ url: "", format: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitResize = (e) => {};
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
                type="number"
                // label="Select a file or drop one below"
                placeholder="Horizontal pixel count"
                // variant="bordered"
                required
              />
              <Input
                type="number"
                // label="Select a file or drop one below"
                placeholder="Vertical pixel count"
                // variant="bordered"
                required
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" type="submit">
                Go Ahead
              </Button>
              {isLoading && <h1>Loading</h1>}
              {downloadImage.url && (
                <Button color="primary" type="submit">
                  <a href={downloadImage.url} download={`compressedImage.${downloadImage.format}`}>
                    Download Image
                  </a>
                </Button>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </form>
  );
};
