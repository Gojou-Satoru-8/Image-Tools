import { useRouteError } from "react-router-dom";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
const ErrorPage = function () {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <Header />
      <MainContent title={"Some Error occurred"}>
        <h2 className="text-lg">
          {error.status} - {error.statusText}
        </h2>
        <p>{error.data}</p>
      </MainContent>
      <Footer />
    </>
  );
};

export default ErrorPage;
