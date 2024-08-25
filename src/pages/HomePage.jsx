import { Link } from "react-router-dom";
import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";
import MainContent from "../components/MainContent";
const HomePage = function () {
  return (
    <MainContent title="Welcome to Image Tools">
      <h2 className="text-xl mb-4">Your Comprehensive toolset for PDF and Image processing</h2>
      <p className="text-lg">Choose One of the services below (PDF Tools coming soon!)</p>
      <div className="flex flex-wrap gap-12 justify-around py-10">
        <Link to="/image-tools">
          <Card
            classNames={{ base: "w-80 h-96 flex-grow" }}
            isBlurred
            isFooterBlurred
            radius="lg"
            className="border-1 py-1 rounded-large bottom-1 shadow-small p-2 flex flex-col items-center"
          >
            <Image
              alt="Image Tools"
              className="object-cover"
              height={250}
              src="picture.png"
              width={250}
            />
            <CardFooter className="flex justify-center w-full">
              <p className="text-center dark:text-white/80 text-black ">
                Compression, Conversion, Resizing...
              </p>
            </CardFooter>
          </Card>
        </Link>
        <Link to="/pdf-tools">
          <Card
            classNames={{ base: "w-80 h-96 flex-grow" }}
            isBlurred
            isFooterBlurred
            radius="lg"
            className="border-1 py-1 rounded-large bottom-1 shadow-small p-2 flex flex-col items-center basis-[45%]"
          >
            <Image
              alt="Image Tools"
              className="object-cover"
              height={250}
              src="pdf-file.png"
              width={250}
            />
            <CardFooter className="w-4/5 m-auto flex justify-center">
              <p className="text-medium dark:text-white/80 text-black ">Available soon.</p>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </MainContent>
  );
};

export default HomePage;
