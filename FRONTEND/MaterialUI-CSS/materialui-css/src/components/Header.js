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
        <header className="header">Header</header>
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
        <div className="story__pictures">Story Pictures</div>
        <div className="story__content">Story Content</div>
        <section className="homes">Homes</section>
        <section className="gallery">Gallery</section>
        <footer className="footer">Footer</footer>
      </body>
    </>
  );
}
