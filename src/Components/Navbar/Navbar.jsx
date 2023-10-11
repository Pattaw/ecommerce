import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../../Context/tokenContext";
import freshCartlogo from "../../Assests/images/freshcart-logo.svg";
import { cartContext } from "../../Context/cart";
import { wishlistContext } from "../../Context/wishlist";

function Navbar() {
  let { token, setToken } = useContext(tokenContext);
  let { getUserCart, productsLength } = useContext(cartContext);
  let { getUserWish, wishQuantity } = useContext(wishlistContext);

  function removeToken() {
    localStorage.removeItem("token");
    setToken(null);
  }

  //this for update cart quantity number from cart Context
  async function cartQuantity() {
    let { data } = await getUserCart();
  }
  async function wishListQuantity() {
    let data = await getUserWish();
  }
  useEffect(() => {
    cartQuantity();
    wishListQuantity();
  }, []);

  //this for update cart quantity number from cart Context

  return (
    <>
      <nav className="navbar py-4 navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={freshCartlogo} alt="logo" />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavId">
            {token ? (
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <Link to={""} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/Products"} className="nav-link">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/Category"} className="nav-link">
                    Category
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/Brands"} className="nav-link">
                    Brands
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/Profile"} className="nav-link">
                    Profile
                  </Link>
                </li>
              </ul>
            ) : (
              ""
            )}

            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              {token ? (
                <>
                  <li className="nav-item custom position-relative mx-md-4 border border-1">
                    <Link className="nav-link" to={"/Cart"}>
                      <span className="custom-margin position-absolute top-0 start-100 translate-middle badge rounded-pill bg-main">
                        {productsLength}
                      </span>
                      <i className=" fa-solid text-main fs-4 fa-cart-shopping"></i>
                    </Link>
                  </li>

                  <li className="nav-item custom me-4 border position-relative border-1 ">
                    <Link className="nav-link" to={"/Wishlist"}>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-main">
                        {wishQuantity}
                      </span>
                      <i className="fa-solid text-main fs-4 fa-heart"></i>
                    </Link>
                  </li>

                  <li className="nav-item logout">
                    <Link
                      onClick={removeToken}
                      className="nav-link"
                      to={"/Login"}
                    >
                      <i class="fa-solid fa-right-from-bracket text-main px-2 "></i>
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item login">
                    <Link className="nav-link" to={"/Login"}>
                      <i class="fa-solid fa-right-to-bracket text-main px-2"></i>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/Register"}>
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
