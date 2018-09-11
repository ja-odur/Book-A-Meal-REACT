import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="page-footer font-small bg-dark-jetbrains">




        <div className="container text-center text-md-left mt-5">

          <div className="row mt-3">

            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

              <h6 className="text-uppercase font-weight-bold text-white">Easy Meal</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto hr-49"/>
                <p>Is a web based app that enables  several caterers to setup menus,and manage orders. The app also allows
                  customer to order a meal, modify their orders, check their order history and also have a quick glance at the trending
                  menus.</p>

            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 className="text-uppercase font-weight-bold text-white">Products</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto hr-58"/>
                <p>
                  <a href="#!">API</a>
                </p>

            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 className="text-uppercase font-weight-bold text-white">Useful links</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto hr-77"/>
                <p>
                  <a href="#!">Your Account</a>
                </p>
                <p>
                  <a href="#!">Become an Affiliate</a>
                </p>
                <p>
                  <a href="#!">Shipping Rates</a>
                </p>
                <p>
                  <a href="#!">Help</a>
                </p>

            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

              <h6 className="text-uppercase font-weight-bold text-white">Contact</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto hr-96"/>
                <p>
                  <i className="fa fa-home mr-3"></i> Kampala, BK St. 2817, UG</p>
                <p>
                  <i className="fa fa-envelope mr-3"></i> easymeal@example.com</p>
                <p>
                  <i className="fa fa-phone mr-3"></i> + 256 777 617 455</p>
                <p>
                  <i className="fa fa-print mr-3"></i> + 256 777 617 455</p>

            </div>

          </div>

        </div>



        <div className="bg-footer">
          <div className="container">
              <div className="footer-copyright text-center py-3 text-white">© 2018 Copyright:
                <a href="#"> EasyMeal.com</a>
              </div>
          </div>
        </div>

      </footer>
    </div>
  );
};

export default Footer;

