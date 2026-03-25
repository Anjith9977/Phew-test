import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="bg-black text-white pt-16">

      <div className="max-w-6xl mx-auto px-4">

        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="border border-[#C5A059] rounded-xl p-6">
            <h3 className="text-[#C5A059] text-sm mb-4 tracking-wider">
              CONNECT WITH US
            </h3>

            <div className="flex items-center justify-center gap-2 text-gray-400 mb-2">
              <i className="fa-solid fa-phone text-[#C5A059]"></i>
              <span>+91 940 061 3433</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-400">
              <i className="fa-solid fa-envelope text-[#C5A059]"></i>
              <span>info@deepnetsoft.com</span>
            </div>
          </div>

          <div className="border border-[#C5A059] rounded-xl p-6 flex flex-col items-center justify-center">

            <img src="/Logo.png" className="w-16 mb-4" />

            <h2 className="text-xl font-bold tracking-widest text-[#C5A059]">
              DEEP NET SOFT
            </h2>

            <div className="flex gap-4 mt-4 text-gray-400 text-sm">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faYoutube} />
            </div>

          </div>

          <div className="border border-[#C5A059] rounded-xl p-6">
            <h3 className="text-[#C5A059] text-sm mb-4 tracking-wider">
              FIND US
            </h3>

            <div className="flex items-start justify-center gap-2 text-gray-400">
              <i className="fa-solid fa-location-dot text-[#C5A059] mt-1"></i>
              <span className="text-left">
                First floor, Geo infopark,<br />
                Infopark EXPY, Kakkanad
              </span>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 py-4 px-4 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">

        <p>© 2026 Deepnetsoft Solutions. All rights reserved.</p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>

      </div>

    </div>
  );
}

export default Footer;