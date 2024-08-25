import { Modal } from "@nextui-org/react";

import { CompressFormContents, ConvertFormContents, ResizeFormContents } from "./FormContents";
export default function FormModal({ isOpen, onOpenChange, service }) {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" size="">
      {service === "compress" && <CompressFormContents />}
      {service === "convert" && <ConvertFormContents />}
      {service === "resize" && <ResizeFormContents />}
    </Modal>
  );
}
