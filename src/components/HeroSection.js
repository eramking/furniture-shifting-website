// src/components/HeroSection.js
import React from "react";
import { Button } from "./Button";

export const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="column">
        <div className="content">
          <p className="medium-length-hero">
            Easy & Secure Furniture Shifting Made Simple
          </p>
          <p className="lorem-ipsum-dolor">
            Experience a hassle-free moving process with our professional team.
            Book your move in just a few clicks and enjoy peace of mind.
          </p>
        </div>
        <div className="actions">
          <Button
            alternate
            className="button-instance"
            divClassName="design-component-instance-node"
            iconPosition="no-icon"
            small={false}
            style="primary"
            text="Book Now"
          />
          <Button
            alternate
            className="button-2"
            iconPosition="no-icon"
            small={false}
            style="secondary"
            text="Learn More"
          />
        </div>
      </div>
    </div>
  );
};