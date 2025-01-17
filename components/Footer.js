import React, { useEffect, useState } from "react";
import { Zoom, Fade, Flip, Slide } from "react-reveal";

const Footer = () => {
  return (
    <div className="lg:p-12 flex justify-evenly max-w-full p-4 space-x-8">
      <Fade>
        <div className="flex justify-start">
          <p className="text-purple-500 text-sm">
            <img src="/img/logo-transparent.png" className="w-4 pb-2 inline" /> Wut Floor <br /><span className="text-xs">by {" "}
              <a
                className="text-purple-500 animate-pulse"
                target="_blank"
                href="https://twitter.com/realrarestpepe"
              >
                Pepi
              </a></span>
          </p>
        </div>
        <div className="flex justify-end flex-row flex-wrap text-right space-x-4">
          <a
            className="text-purple-500 animate-pulse"
            target="_blank"
            href="https://github.com/pepimartinez/wutfloor"
          ><i className="fab fa-github text-xl mr-2" />
            Github
          </a>
          <a
            className="text-purple-500 animate-pulse"
            target="_blank"
            href="https://twitter.com/wutfloorxyz"
          >
            <i className="fab fa-twitter text-xl mr-2" />
            Twitter
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default Footer;
