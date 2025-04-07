// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

import { Button } from "./Button";
import { ChevronRight } from "./ChevronRight";
import { CompanyLogo } from "./CompanyLogo";
import { Relume } from "./Relume";
import chevronDown from "../assets/chevron-down-solid.svg";
import image from "../assets/Image.jpg";
import placeholderImage from "../assets/Placeholder-Image.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="content">
        <div className="content-2">
          <CompanyLogo className="company-logo" />
          <div className="column">
              <Link to="/" className="link-text">Home</Link>
              <Link to="/#about" className="link-text">About Us</Link>
              <Link to="/#features" className="link-text">Features</Link>
              <Link to="/booking" className="link-text">Book Now</Link>
              <Link to="/dashboard" className="link-text">Dashboard</Link>
               <Link to="/#contact" className="link-text nav-link-dropdown">
             Contact Us
              <img
                  className="icon-instance-node"
                alt="Chevron down"
                src={chevronDown}
             />
            </Link>
          </div>

        </div>
        
        <div className="actions">
          <Button
            alternate={false}
            className="button-instance"
            iconPosition="no-icon"
            small
            style="secondary"
            text="Join"
          />
          <Button
            alternate={false}
            className="button-2"
            divClassName="design-component-instance-node"
            iconPosition="no-icon"
            small
            style="primary"
            text="Sign Up"
          />
        </div>
      </div>
      <div className="mega-menu">
        <div className="menu">
          <div className="menu-list">
            <div className="text-wrapper-2">User Account</div>
            <div className="list">
              <div className="menu-item">
                <Relume className="icon-instance-node" />
                <div className="content-3">
                  <div className="text-wrapper-3">Login</div>
                  <p className="lorem-ipsum-dolor">
                    Join us for seamless moving services.
                  </p>
                </div>
              </div>
              <div className="menu-item">
                <Relume className="icon-instance-node" />
                <div className="content-3">
                  <div className="text-wrapper-3">Register</div>
                  <p className="lorem-ipsum-dolor">
                    Create your account to get started.
                  </p>
                </div>
              </div>
              <div className="menu-item">
                <Relume className="icon-instance-node" />
                <div className="content-3">
                  <div className="text-wrapper-3">Dashboard</div>
                  <p className="lorem-ipsum-dolor">
                    Manage your bookings and profile easily.
                  </p>
                </div>
              </div>
              <div className="menu-item">
                <Relume className="icon-instance-node" />
                <div className="content-3">
                  <div className="text-wrapper-3">Support</div>
                  <p className="lorem-ipsum-dolor">
                    We're here to help you anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-list">
            <div className="text-wrapper-2">Latest Articles</div>
            <div className="list">
              <div className="menu-item">
                <Relume className="icon-instance-node" />
                <div className="content-3">
                  <div className="text-wrapper-3">Moving Tips</div>
                  <p className="lorem-ipsum-dolor">
                    Discover expert advice for your move.
                  </p>
                </div>
              </div>
              <div className="menu-item">
                <Relume className="icon-instance-node" />
                <div className="content-3">
                  <div className="text-wrapper-3">Packing Guide</div>
                  <p className="lorem-ipsum-dolor">
                    Learn how to pack efficiently.
                  </p>
                </div>
              </div>
              <div className="menu-item">
                <Relume className="icon-instance-node" />
                <div className="content-3">
                  <div className="text-wrapper-3">Moving Checklist</div>
                  <p className="lorem-ipsum-dolor">
                    Stay organized with our moving checklist.
                  </p>
                </div>
              </div>
              <div className="menu-item">
                <Relume className="icon-instance-node" />
                <div className="content-3">
                  <div className="text-wrapper-3">Customer Stories</div>
                  <p className="lorem-ipsum-dolor">
                    Read about our satisfied customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog">
          <div className="text-wrapper-2">From Our Blog</div>
          <div className="blog-list">
            <div className="blog-item">
              <img
                className="placeholder-image"
                alt="Placeholder image"
                src={placeholderImage}
              />
              <div className="content-4">
                <div className="content-5">
                  <div className="text-wrapper-3">Moving Made Easy</div>
                  <p className="lorem-ipsum-dolor">
                    Simplify your relocation with our services.
                  </p>
                </div>
                <div className="read-more">Read More</div>
              </div>
            </div>
            <div className="blog-item">
              <img
                className="placeholder-image"
                alt="Placeholder image"
                src={image}
              />
              <div className="content-4">
                <div className="content-5">
                  <div className="text-wrapper-3">Customer Reviews</div>
                  <p className="lorem-ipsum-dolor">
                    See what our clients are saying.
                  </p>
                </div>
                <div className="read-more">Read More</div>
              </div>
            </div>
          </div>
          <Button
            alternate={false}
            className="blog-button"
            icon={<ChevronRight className="icon-instance-node" />}
            iconPosition="trailing"
            small={false}
            style="link"
            text="Button"
          />
        </div>
      </div>
    </div>
  );
};