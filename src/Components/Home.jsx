import React from "react";
import { useState } from "react";

const Home = ({ cartItems, setCartItems }) => {
  const [cartCount, setCartCount] = useState(0);
  const [statuses, setStatuses] = useState(cartItems.map(() => true));
  const addToCart = (index) => {
    const newStatuses = [...statuses];
    newStatuses[index] = false;
    setStatuses(newStatuses);
    setCartCount((count) => count + 1);
  };

  const removeFromCart = (index) => {
    const newStatuses = [...statuses];
    newStatuses[index] = true;
    setStatuses(newStatuses);
    setCartCount((count) => count - 1);
  };
  return (
    <div>
      {/* <!-- Navigation--> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-outline-dark" type="submit">
                <i class="bi-cart-fill me-1"></i>
                Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill">
                  {cartCount}
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* <!-- Header--> */}
      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Shop in style</h1>
            <p class="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>
      {/* <!-- Section--> */}
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {cartItems.map((item, index) => {
              return (
                <>
                  <div key={index}>
                    <div class="col mb-5">
                      <div class="card h-100">
                        {/* <!-- Product image--> */}
                        <img
                          class="card-img-top"
                          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                          alt="..."
                        />
                        {/* <!-- Product details--> */}
                        <div class="card-body p-4">
                          <div class="text-center">
                            {/* <!-- Product name--> */}
                            <h5 class="fw-bolder">{item.name}</h5>
                            {/* <!-- Product price--> */}
                            {item.price}
                          </div>
                        </div>
                        {/* <!-- Product actions--> */}
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div class="text-center">
                            {statuses[index] ? (
                              <button
                                onClick={() => addToCart(index)}
                                type="button"
                                className="btn btn-outline-success"
                              >
                                Add To Cart
                              </button>
                            ) : (
                              <button
                                onClick={() => removeFromCart(index)}
                                type="button"
                                className="btn btn-outline-danger"
                              >
                                Remove From Cart
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
