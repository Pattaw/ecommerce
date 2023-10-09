import style from "./NotFound.module.css";
import notFound from "../../Assests/images/Capture-removebg-preview.png";
import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Not found</title>
        <meta name="description" content="Component" />
      </Helmet>
      <div className="row">
        <div className="col-md-12 text-center">
          <img src={notFound} alt="not found image" />
        </div>
      </div>
    </>
  );
}

export default NotFound;
