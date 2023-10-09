import { Helmet } from "react-helmet";
import HomeCategory from "../HomeCategory/HomeCategory";
import HomeProducts from "../HomeProducts/HomeProducts";
import HomeSlider from "../HomeSlider/HomeSlider";
import style from "./Home.module.css";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home Component" />
      </Helmet>
      <HomeSlider />
      <HomeCategory />
      <HomeProducts />
    </>
  );
}

export default Home;
