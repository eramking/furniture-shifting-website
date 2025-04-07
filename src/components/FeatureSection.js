// src/components/FeatureSection.js
import React from "react";
import { Button } from "./Button";
import { ChevronRight } from "./ChevronRight";
import { PlaceholderLogo } from "./PlaceholderLogo";
import { Envelope } from "./Envelope";
import { Map } from "./Map";
import { Phone } from "./Phone";
import image from "../assets/Image.jpg";
import placeholderImage from "../assets/Placeholder-Image.png";
import placeholderImage2 from "../assets/Placeholder-Image-2.png";
import AvatarImage from "../assets/Avatar-Image.png";
import divider from "../assets/divider.svg";
import stars from "../assets/star-solid.svg";

const Layout1 = () => {
  return (
    <div className="layout">
      <div className="section-title">
        <div className="tagline-wrapper">
          <div className="tagline">Features</div>
        </div>
        <div className="content">
          <div className="heading">Our Moving Solutions</div>
          <p className="text">
            Convenient and reliable moving services tailored for you.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="card">
            <div className="div">
              <div className="div-2">
                <div className="tagline-wrapper">
                  <div className="tagline-2">Small</div>
                </div>
                <div className="div-2">
                  <div className="heading-2">Small Shifting Made Easy</div>
                  <p className="p">Perfect for quick moves and small loads.</p>
                </div>
              </div>
              <div className="actions">
                <Button
                  alternate={false}
                  className="button-instance"
                  icon={<ChevronRight className="icon-chevron-right" />}
                  iconPosition="trailing"
                  small={false}
                  style="link"
                  text="Learn More"
                />
              </div>
            </div>
            <div className="image">
              <img
                className="placeholder-image"
                alt="Placeholder image"
                src={placeholderImage}
              />
            </div>
          </div>
          <div className="card-2">
            <div className="content-2">
              <div className="div-2">
                <div className="tagline-wrapper">
                  <div className="tagline-2">Full</div>
                </div>
                <div className="div-2">
                  <div className="heading-2">Complete House Moving</div>
                  <p className="p">
                    Comprehensive solutions for your entire household.
                  </p>
                </div>
              </div>
              <div className="actions">
                <Button
                  alternate={false}
                  className="button-instance"
                  icon={<ChevronRight className="icon-chevron-right" />}
                  iconPosition="trailing"
                  small={false}
                  style="link"
                  text="Learn More"
                />
              </div>
            </div>
            <div className="placeholder-image-wrapper">
              <img className="img" alt="Placeholder image" src={image} />
            </div>
          </div>
          <div className="card-3">
            <div className="content-2">
              <div className="div-2">
                <div className="tagline-wrapper">
                  <div className="tagline-2">Office</div>
                </div>
                <div className="div-2">
                  <div className="heading-2">Efficient Office Moving</div>
                  <p className="p">
                    Minimize downtime with our expert office relocation
                    services.
                  </p>
                </div>
              </div>
              <div className="actions">
                <Button
                  alternate={false}
                  className="button-instance"
                  icon={<ChevronRight className="icon-chevron-right" />}
                  iconPosition="trailing"
                  small={false}
                  style="link"
                  text="Learn More"
                />
              </div>
            </div>
            <div className="placeholder-image-wrapper">
              <img
                className="img"
                alt="Placeholder image"
                src={placeholderImage2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Layout2 = () => {
  return (
    <div className="layout">
      <div className="container">
        <div className="content">
          <div className="section-title">
            <div className="tagline-wrapper">
              <div className="tagline">Reliable</div>
            </div>
            <div className="div">
              <p className="heading">
                Your Trusted Partner in Furniture Moving
              </p>
              <p className="text">
                At our company, we specialize in seamless furniture shifting
                tailored to your needs. Our professional team ensures a
                hassle-free experience from start to finish.
              </p>
            </div>
          </div>
          <div className="actions">
            <Button
              alternate={false}
              className="button-instance"
              iconPosition="no-icon"
              small={false}
              style="secondary"
              text="Learn More"
            />
            <Button
              alternate={false}
              className="design-component-instance-node"
              icon={<ChevronRight className="icon-chevron-right" />}
              iconPosition="trailing"
              small={false}
              style="link"
              text="Sign Up"
            />
          </div>
        </div>
        <img
          className="placeholder-image"
          alt="Placeholder image"
          src={placeholderImage}
        />
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="content">
        <img className="stars" alt="Stars" src={stars} />
        <p className="quote">
          "The movers were punctual and handled my furniture with care. I
          couldn't have asked for a smoother experience!"
        </p>
        <div className="avatar">
          <img className="avatar-image" alt="Avatar image" src={AvatarImage} />
          <div className="avatar-content">
            <div className="text">John Doe</div>
            <div className="text-wrapper">CEO, Home Solutions</div>
          </div>
          <img className="divider" alt="Divider" src={divider} />
          <PlaceholderLogo className="placeholder-logo" />
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="contact">
      <div className="section-title">
        <div className="tagline-wrapper">
          <div className="tagline">Connect</div>
        </div>
        <div className="content">
          <div className="heading">Get in Touch</div>
          <p className="text">We'd love to hear from you!</p>
        </div>
      </div>
      <div className="div">
        <div className="row">
          <div className="div-2">
            <Envelope className="icon-instance-node" />
            <div className="div-3">
              <div className="heading-2">Email</div>
              <div className="text-2">Contact us anytime</div>
              <div className="link">info@yourcompany.com</div>
            </div>
          </div>
          <div className="div-2">
            <Phone className="icon-instance-node" />
            <div className="div-3">
              <div className="heading-2">Phone</div>
              <div className="text-2">Reach us at</div>
              <div className="link">+1 (555) 123-4567</div>
            </div>
          </div>
          <div className="div-2">
            <Map className="icon-instance-node" />
            <div className="div-2">
              <div className="div-3">
                <div className="heading-2">Office</div>
                <p className="text-2">456 Example Ave, New York, NY 10001</p>
              </div>
              <div className="actions">
                <Button
                  alternate={false}
                  className="button-instance"
                  icon={<ChevronRight className="icon-chevron-right" />}
                  iconPosition="trailing"
                  small={false}
                  style="link"
                  text="Find Us"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="placeholder-image"
          alt="Placeholder image"
          src={placeholderImage}
        />
      </div>
    </div>
  );
};

export const FeatureSection = () => {
  return (
    <section className="feature-section">
      <Layout1 />
      <Layout2 />
      <Testimonial />
      <Contact />
    </section>
  );
};
export default FeatureSection;

