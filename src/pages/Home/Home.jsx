import DeployToday from "@/components/Home/DeployToday/DeployToday";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import HowItWorks from "@/components/Home/HowItWorks/HowItWorks";
import LatestNews from "@/components/Home/LatestNews/LatestNews";
import ModleSharedByCommunity from "@/components/Home/ModelSharedByCommunity/ModelSharedByCommunity";
import ScaleYourAi from "@/components/Home/ScaleYourAi/ScaleYourAi";
import StartDeployingSmarter from "@/components/Home/StartDeployingSmarter/StartDeployingSmarter";
import WhyChooseUs from "@/components/Home/WhyChooseUs/WhyChooseUs";
import WithOurPlatform from "@/components/Home/WithOurPlaform/WithOurPlatform";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WithOurPlatform />
      <ModleSharedByCommunity />
      <HowItWorks />
      <ScaleYourAi />
      <WhyChooseUs />
      <StartDeployingSmarter />
      <LatestNews />
      <DeployToday />
    </>
  );
};
export default Home;
