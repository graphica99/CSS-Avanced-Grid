import AppBar from "@material-ui/core/AppBar";
import { Box, Typography } from "@material-ui/core";
import Logo from "../img/logo.png";
import hotel1 from "../img/hotel1.jpg";
import hotel2 from "../img/hotel2.jpg";
import hotel3 from "../img/hotel3.jpg";
import sprite from "../img/sprite.svg";
import "../sass/main.scss";

export default function Header() {
  return (
    <>
      <body className="container">
        <div className="sidebar">SideBar</div>
        <header className="header">
          <img src={Logo} className="header__logo" />
          <h3 className="heading-3">Your won home</h3>
          <h1 className="heading-1">The ultimate personal freedom</h1>
          <button className="btn">View our properties</button>
          <div className="header__seenon-text">As Seen on</div>
          <div className="header__seenon-logos">
            <img src={Logo} />
            <img src={Logo} />
            <img src={Logo} />
            <img src={Logo} />
          </div>
        </header>
        <div className="realtors">Top 3 realtors</div>
        <section className="features">
          <div className="feature">
            <svg className="feature__icon">
              <use href={sprite + "#icon-map"}></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">
              World's best luxury homes
            </h4>
            <p className="feature__text">
              Lorem iopsn te fsleet sngn sensurus irupus Lorem iopsn te fsleet
              sngn sensurus irupus sngn sensurus irupus
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use href={sprite + "#icon-aircraft-take-off"}></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">
              {" "}
              World's best luxury homes{" "}
            </h4>
            <p className="feature__text">
              Lorem iopsn te fsleet sngn sensurus irupus Lorem iopsn te fsleet
              sngn sensurus irupus sngn sensurus irupus
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use href={sprite + "#icon-location-pin"}></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">
              {" "}
              World's best luxury homes{" "}
            </h4>
            <p className="feature__text">
              Lorem iopsn te fsleet sngn sensurus irupus Lorem iopsn te fsleet
              sngn sensurus irupus sngn sensurus irupus
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use href={sprite + "#icon-chat"}></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">
              {" "}
              World's best luxury homes{" "}
            </h4>
            <p className="feature__text">
              Lorem iopsn te fsleet sngn sensurus irupus Lorem iopsn te fsleet
              sngn sensurus irupus sngn sensurus irupus
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use href={sprite + "#icon-star"}></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">
              {" "}
              World's best luxury homes{" "}
            </h4>
            <p className="feature__text">
              Lorem iopsn te fsleet sngn sensurus irupus Lorem iopsn te fsleet
              sngn sensurus irupus sngn sensurus irupus
            </p>
          </div>
          <div className="feature">
            <svg className="feature__icon">
              <use href={sprite + "#icon-key"}></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">
              {" "}
              World's best luxury homes{" "}
            </h4>
            <p className="feature__text">
              Lorem iopsn te fsleet sngn sensurus irupus Lorem iopsn te fsleet
              sngn sensurus irupus sngn sensurus irupus
            </p>
          </div>
        </section>
        <div className="story__pictures">
          <img src={hotel1} alt="img" className="story__img_1" />
          <img src={hotel3} alt="img" className="story__img_2" />
        </div>
        <div className="story__content">
          <h3 className="heading-3">Happy customers</h3>
          <h2 className="heading-2 heading-2--dark">
            &ldquo;The best decision of our lives&rdquo;
          </h2>
          <p className="story__text">
            Lorem iopsn te fsleet sngn sensurus irupus Lorem iopsn te fsleet
            sngn sensurus irupus sngn sensurus irupus Lorem iopsn te fsleet sngn
            sensurus irupus Lorem iopsn te fsleet sngn sensurus irupus sngn
            sensurus irupus
          </p>
          <button className="btn">Find your own home</button>
        </div>
        <section className="homes">
          <div className="home">
            <img src={hotel1} className="home_img" />
            <svg className="home__icon">
              <use href={sprite + "#icon-star"}></use>
            </svg>
            <h5 className="home__name">Beautiful Family House</h5>
            <div className="home__location">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>USA</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>USA</p>
            </div>
            <div className="home__area">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>USA</p>
            </div>
            <div className="home__price">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>USA</p>
            </div>
            <button className="btn home__btn">Contact realtors</button>
          </div>

          <div className="home">
            <img src={hotel1} className="home_img" />
            <svg className="home__icon">
              <use href={sprite + "#icon-star"}></use>
            </svg>
            <h5 className="home__name">Beautiful Family House</h5>
            <div className="home__location">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>USA</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>USA</p>
            </div>
            <div className="home__area">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>USA</p>
            </div>
            <div className="home__price">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>USA</p>
            </div>
            <button className="btn home__btn">Contact realtors</button>
          </div>

          <div className="home">
            <img src={hotel1} className="home_img" />
            <svg className="home__icon">
              <use href={sprite + "#icon-star"}></use>
            </svg>
            <h5 className="home__name">Beautiful Family House</h5>
            <div className="home__location">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>USA</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>USA</p>
            </div>
            <div className="home__area">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>USA</p>
            </div>
            <div className="home__price">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>USA</p>
            </div>
            <button className="btn home__btn">Contact realtors</button>
          </div>

          <div className="home">
            <img src={hotel1} className="home_img" />
            <svg className="home__icon">
              <use href={sprite + "#icon-star"}></use>
            </svg>
            <h5 className="home__name">Beautiful Family House</h5>
            <div className="home__location">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>USA</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>USA</p>
            </div>
            <div className="home__area">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>USA</p>
            </div>
            <div className="home__price">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>USA</p>
            </div>
            <button className="btn home__btn">Contact realtors</button>
          </div>

          <div className="home">
            <img src={hotel1} className="home_img" />
            <svg className="home__icon">
              <use href={sprite + "#icon-star"}></use>
            </svg>
            <h5 className="home__name">Beautiful Family House</h5>
            <div className="home__location">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>USA</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>USA</p>
            </div>
            <div className="home__area">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>USA</p>
            </div>
            <div className="home__price">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>USA</p>
            </div>
            <button className="btn home__btn">Contact realtors</button>
          </div>

          <div className="home">
            <img src={hotel1} className="home_img" />
            <svg className="home__icon">
              <use href={sprite + "#icon-star"}></use>
            </svg>
            <h5 className="home__name">Beautiful Family House</h5>
            <div className="home__location">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>USA</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>5 rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>
                325m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <svg>
                <use href={sprite + "#icon-key"}></use>
              </svg>
              <p>$1,200,000</p>
            </div>
            <button className="btn home__btn">Contact realtors</button>
          </div>
        </section>
        <section className="gallery">
          <img src={hotel3} className="gallery_img gallery_img--1" />
          <img src={hotel3} className="gallery_img gallery_img--2" />
        </section>
        <footer className="footer">
          <div className="footer__text">
            <button className="footer__btn">Find your dream home</button>
            <button className="footer__btn">Request Proposal</button>
            <button className="footer__btn">Download home planner</button>
            <button className="footer__btn">Contact us</button>
            <button className="footer__btn">Submit your property</button>
            <button className="footer__btn">Come work with us!</button>
          </div>
          <p className="footer__copywrite">
            Lorem iopsn te fsleet sngn sensurus irupus Lorem iopsn te fsleet
            sngn sensurus irupus sngn sensurus irupus Lorem iopsn te fsleet sngn
          </p>
        </footer>
      </body>
    </>
  );
}
