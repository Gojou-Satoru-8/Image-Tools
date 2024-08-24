import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import MainContent from "../components/MainContent";
const ImageToolsPage = function () {
  return (
    <MainContent title={"Image Tools"}>
      <h2 className="text-xl mb-4">Select any of the services below</h2>
      <div className="flex flex-wrap gap-4 sm:gap-8 px-8 my-16">
        <Card className="basis-[95%] sm:basis-[30%]">
          <CardHeader className="flex justify-center">
            <h1 className="text-md">NextUI</h1>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
        </Card>
        <Card className="basis-[95%] sm:basis-[30%]">
          <CardHeader className="flex justify-center">
            <h1 className="text-md">NextUI</h1>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
        </Card>
        <Card className="basis-[95%] sm:basis-[30%]">
          <CardHeader className="flex justify-center">
            <h1 className="text-md">NextUI</h1>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
        </Card>
      </div>
    </MainContent>
  );
};

export default ImageToolsPage;
