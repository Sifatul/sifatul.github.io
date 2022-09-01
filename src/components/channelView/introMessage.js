import LinkMessage from "./singleMessage/linkMessage"
import TextMessage from "./singleMessage/textMessage"
import TimeCapsule from "./singleMessage/timeCapsule"

const IntroMessage = () => {

  const blogLink = {
    link: "https://dev.to/sifatul/create-package-in-github-registry-51p9",
    previewImage: "https://res.cloudinary.com/practicaldev/image/fetch/s--VC0V3bMa--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a3t917ikhl3szi5lff1a.png",
    platformName: "DEV Community",
    title: "Simple guide to create package in Github registry",
    description: "Creating a package in the GitHub registry is very simple. Firstly package.json needs to be updated;... (32 kB)",
    message: "you can checkout my blog too. Here is a good article to start with.",
    favicon: "https://res.cloudinary.com/practicaldev/image/fetch/s--gDM0_LTS--/c_limit,f_png,fl_progressive,q_80,w_180/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png",
  }

  return <>


    <TextMessage
      message="Hello there.\nMy name is Md Sifatul Islam. I am fullstack developer with around 4 years of experience working with react, nodejs and aws services growing startups or for venture capital company.
      \n Currently I am working as technical lead playing the role as the main developer to oversee all development projects. For TeraArk & TeraComix I built CI/CD pipelines which increased daily deploy count by 2-fold and have a proven track record of working with a project from planning to deployment.
"
    />

    <TextMessage
      message="I work with NodeJs (Express/NestJs) in backend, ReactJs (NextJs) using JavaScript / TypeScript, Java for competitive programming, Docker, MongoDB or MySQL for database. I am very comfortable in working with AWS cloud services like RDS, S3, ECS, EC2 etc and hold AWS solution associate certification too."
    />

    <TextMessage
      message="This project is to represent my portfolio in a fun and interactive manner. Feel free to click around, explore through to know more about me."
    />
    <TimeCapsule time="Today" />



    <LinkMessage {...blogLink} />

  </>

}
export default IntroMessage