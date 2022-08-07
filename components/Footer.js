import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 text-center">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessinility</p>
        <p>This is not a real site</p>
        <p>Its a awesome clone</p>
        <p>Referrals Accepted</p>
        <p>BSM</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>BRIJESHKUMAR MAISURIYA</p>
        <p>presents</p>
        <p>Airbnb clone</p>
        <p>Join me now</p>
        <p>Lets&apos;s code together</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Privacy</p>
        <p>Terms</p>
        <p>Sitemap</p>
        <p>Destinations</p>
      </div>
    </div>
  );
};

export default Footer;
