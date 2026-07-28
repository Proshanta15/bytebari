// import CommingSoon from "./components/CommingSoon";

import Faq from "./components/Faq";
import Banner from "./components/home/Banner";
import HomeBlog from "./components/home/HomeBlog";
import OurStory from "./components/home/OurStory";
import Services from "./components/home/Services";
import Team from "./components/home/Team";
import Trusted from "./components/home/Trusted";

export default function Home() {
  return (
    <div className="">
      {/* <CommingSoon /> */}
      <Banner />
      <OurStory />
      <Services />
      <Trusted />
      <Team />
      <HomeBlog />
      <Faq />
    </div>
  );
}
