import { Link } from "react-router-dom";
import style from "./NotAuthorised.module.css";
import { Helmet } from "react-helmet";

function NotAuthorised() {
  return (
    <>
      <Helmet>
        <title>Not Authroised</title>
        <meta name="description" content="Component" />
      </Helmet>
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="warning">
            <i className="text-main fa-solid fa-hand AuthIcon"></i>

            <h1 className="my-4">
              Sorry you are not allowed to see this page.... !
            </h1>
            <h2>if you want to see it... pls login first!...</h2>
            <Link to={"/Login"} className="my-4 text-white btn bg-main">
              Login now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotAuthorised;
