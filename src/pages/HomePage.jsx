import { Link } from "react-router-dom";
import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";
import MainContent from "../components/MainContent";
const HomePage = function () {
  return (
    <MainContent title="Welcome to Image Tools">
      <h2 className="text-xl mb-4">Your Comprehensive toolset for PDF and Image processing</h2>
      <p className="text-lg">Choose One of the services below (PDF Tools coming soon!)</p>
      <div className="flex flex-wrap justify-around py-10">
        <Link to="/image-tools">
          <Card
            isBlurred
            isFooterBlurred
            radius="lg"
            className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 before:rounded-xl rounded-large bottom-1 shadow-small p-10 flex flex-col items-center"
          >
            <Image
              alt="Image Tools"
              className="object-cover"
              height={250}
              src="picture.png"
              width={250}
            />
            <CardFooter className="w-4/5 m-auto flex justify-center">
              <p className="text-medium text-center dark:text-white/80 text-black ">
                Compression, Conversion, Resizing...
              </p>
            </CardFooter>
          </Card>
        </Link>
        <Link to="/pdf-tools">
          <Card
            isBlurred
            isFooterBlurred
            radius="lg"
            className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 before:rounded-xl rounded-large bottom-1 shadow-small p-10 flex flex-col items-center"
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
