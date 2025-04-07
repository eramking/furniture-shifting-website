// src/components/Footer.js
import React from "react";
import { Button } from "./Button";
import { CompanyLogo } from "./CompanyLogo";
import { Facebook } from "./Facebook";
import { Instagram } from "./Instagram";
import { LinkedIn } from "./LinkedIn";
import { TextInput } from "./TextInput";
import { X } from "./X";
import { Youtube } from "./Youtube";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="newsletter">
          <CompanyLogo className="company-logo" />
          <p className="div">
            Subscribe to our newsletter for the latest updates on features and
            services.
          </p>
          <div className="actions">
            <div className="form">
              <TextInput
                alternate={false}
                className="text-input-instance"
                text="Your email here"
                type="default"
              />
              <Button
                alternate={false}
                className="button-instance"
                iconPosition="no-icon"
                small={false}
                style="secondary"
                text="Join"
              />
            </div>
            <p className="p">
              By subscribing, you consent to our Privacy Policy and receive
              updates.
            </p>
          </div>
        </div>
        <div className="links">
          <div className="column">
            <div className="text-wrapper-2">Quick Links</div>
            <div className="div-2">
              <div className="link">
                <div className="text-wrapper-3">About Us</div>
              </div>
              <div className="link">
                <div className="text-wrapper-3">Contact Us</div>
              </div>
              <div className="link">
                <div className="text-wrapper-3">Services</div>
              </div>
              <div className="link">
                <div className="text-wrapper-3">Blog</div>
              </div>
              <div className="link">
                <div className="text-wrapper-3">Support</div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="text-wrapper-2">Connect With Us</div>
            <div className="div-2">
              <div className="link">
                <div className="text-wrapper-3">Facebook</div>
              </div>
              <div className="link">
                <div className="text-wrapper-3">Instagram</div>
              </div>
              <div className="link">
                <div className="text-wrapper-3">Twitter</div>
              </div>
              <div className="link">
                <div className="text-wrapper-3">LinkedIn</div>
              </div>
              <div className="link">
                <div className="text-wrapper-3">YouTube</div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="text-wrapper-2">Follow Us</div>
            <div className="div-2">
              <div className="link-2">
                <Facebook className="icon-instance-node" />
                <div className="text-wrapper-4">Facebook</div>
              </div>
              <div className="link-2">
                <Instagram className="icon-instance-node" />
                <div className="text-wrapper-4">Instagram</div>
              </div>
              <div className="link-2">
                <X className="icon-instance-node" />
                <div className="text-wrapper-4">Twitter</div>
              </div>
              <div className="link-2">
                <LinkedIn className="icon-instance-node" />
                <div className="text-wrapper-4">LinkedIn</div>
              </div>
              <div className="link-2">
                <Youtube className="icon-instance-node" />
                <div className="text-wrapper-4">YouTube</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};