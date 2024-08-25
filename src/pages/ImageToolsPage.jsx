import { useState } from "react";
import { useDisclosure } from "@nextui-org/react";
import ServiceCard from "../components/ServiceCard";
import FormModal from "../components/FormModal";
import MainContent from "../components/MainContent";
const ImageToolsPage = function () {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [service, setService] = useState("");
  const handleServiceChange = (newService) => {
    setService(newService);
    onOpen();
  };

  return (
    <>
      <FormModal isOpen={isOpen} onOpenChange={onOpenChange} service={service} />
      <MainContent title={"Image Tools"}>
        <h2 className="text-xl mb-4">Select any of the services below</h2>
        <div className="w-full m-auto flex flex-wrap justify-center gap-4 sm:gap-8 px-8 my-16">
          <ServiceCard
            title="Compress"
            message="Select from a number of options available"
            onPress={() => handleServiceChange("compress")}
          />
          <ServiceCard
            title="Convert"
            message="All major image formats supported"
            onPress={() => handleServiceChange("convert")}
          />
          <ServiceCard
            title="Resize"
            message="Resize Image without affecting their quality"
            onPress={() => handleServiceChange("resize")}
          />
        </div>
      </MainContent>
    </>
  );
};

export default ImageToolsPage;
