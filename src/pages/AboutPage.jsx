import MainContent from "../components/MainContent";
import { Avatar, Link } from "@nextui-org/react";

const AboutPage = () => {
  return (
    <MainContent title={"Note from the Author"}>
      <Avatar
        src="https://avatars.githubusercontent.com/u/89405120?v=4"
        className="w-1/6 h-1/6 m-auto"
      />
      <div className="py-8 px-20 text-lg text-justify">
        <p className="py-4">
          This project was created with the aim of building a simple yet effective application that
          offers various image processing tools. While my experience has been primarily focused on
          backend development, I have always had a keen interest in expanding my skills to the
          front-end. This project represents my first venture into building an application from the
          ground up using primarily front-end technologies, including React and a few essential npm
          packages.
        </p>
        <p className="py-4">
          I hope this tool proves useful to others who need quick and effective image processing
          capabilities, and I look forward to continuously improving it as I learn more and gather
          feedback from users.
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 ">
          <Link
            isBlock
            isExternal
            // anchorIcon={<LinkIcon />}
            showAnchorIcon
            href="https://ankushbhowmik.com"
            color="success"
          >
            My website
          </Link>

          <Link
            isBlock
            isExternal
            showAnchorIcon
            // anchorIcon={<GithubIcon />}
            href="https://github.com/Gojou-Satoru-8"
            color="success"
          >
            Github Repository
          </Link>
        </div>
      </div>
    </MainContent>
  );
};

export default AboutPage;
