import React from "react";
import "./DescriptionBox.css";
export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          E-Commerce websites are online portals that facilitate online
          transactions of goods and services through means of the transfer of
          information and funds over the Internet. In the early days, e-Commerce
          was done partially through emails and phone calls. Now, with a single
          website, anything and everything that a transaction needs, can be
          executed online.
        </p>
        <p>
          E-commerce platforms enable both large and small businesses to sell
          their goods and services online. As a result, whether you sell
          directly to consumers B2C or to other businesses B2B, your e-commerce
          platform will be the centerpiece of your digital storefront. This
          means that picking the right platform will be critical to achieving
          your business goals.
        </p>
      </div>
    </div>
  );
};
