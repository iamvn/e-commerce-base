import React from "react";
import IconsWrapper from "../icons/iconsWrapper";
import Link from "next/link";

const getPromotionsData = () => {
  const Promotion = {
    message:
      "Buy 2 for 5% Off, Buy 3 for 7% Off, Buy 4 for 10% Off + Extra 3% Off for Prepaid Orders!",
    socials: {
      socialMedia: [
        {
          name: "Facebook",
          link: "",
          followersCount: "2.5k",
        },
        {
          name: "Instagram",
          link: "",
          followersCount: "3.5k",
        },
      ],
    },

    externalLinks: [],
  };
  return Promotion;
};

function Ticker() {
  const Promotion = getPromotionsData();
  if (!Promotion || Object.keys(Promotion).length == 0) return <></>;
  return (
    <div className="bg-black flex items-center text-white justify-between p-3 text-xs">
      <div className="flex gap-5 w-4/12">
        {Promotion.socials &&
          Promotion.socials.socialMedia.map((social, index) => (
            <Link href={"/"} className="flex gap-2 items-center">
              <IconsWrapper name={social.name} width={17} height={17} />
              <span>{social.followersCount} Followers</span>
            </Link>
          ))}
      </div>
      <div className="w-4/12 whitespace-nowrap">{Promotion.message}</div>
      <div className="w-4/12">
        {Promotion.externalLinks &&
          Promotion.externalLinks.length > 0 &&
          Promotion.externalLinks.map((links, index) => <div>Test</div>)}
      </div>
    </div>
  );
}

export default Ticker;
