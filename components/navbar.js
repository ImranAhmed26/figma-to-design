import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import Logo from "../public/assets/logo.png";
import NavLinks from "../constants/navlinks.js";
import SearchIcon from "../public/assets/search.svg";
import FavoriteIcon from "../public/assets/favourite.svg";
import CartIcon from "../public/assets/cart.svg";
import ProfileIcon from "../public/assets/profile-image.png";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profileName, setProfileName] = useState("");

  useEffect(() => {
    setProfileImage(ProfileIcon);
    setProfileName("Anne Doe");
  });

  const handleSearch = () => {
    "logic for handling search";
  };

  return (
    <div>
      <div className="w-full h-20 px-12 py-3.5 bg-white text-lg drop-shadow-md flex items-center sticky z-30 top-0">
        <div className="flex items-center w-1/2">
          <div>
            <Image src={Logo} width={57} height={48} alt={"logo"} />
          </div>
          <div>
            <div className=" flex gap-3 px-4 lg:gap-5 xl:gap-7 2xl:gap-9 lg:px-7 xl:px-12 2xl:px-28 text-base lg:text-lg xl:text-xl py-2 ">
              {NavLinks.navlinks.map((items, i) => {
                return (
                  <div key={isNaN}>
                    <Link href="/">
                      <a>{items.name}</a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center w-1/2">
          <div
            className="bg-gray-100 max-w-lg w-full h-12 rounded-md px-8 text-xl items-center flex justify-between shadow-sm"
            onClick={(e) => {
              handleSearch;
            }}
          >
            <input
              type="text"
              placeholder="Search here"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="text-color_gray bg-gray-100 outline-none w-4/5"
            />
            <Image
              src={SearchIcon}
              width={25}
              height={25}
              alt={"SearchIcon"}
              className="cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-end w-full pt-2 pl-2">
            <div className="w-16">
              <Image src={FavoriteIcon} width={28} height={24} alt={"favorite"} />
            </div>
            <div className="w-16">
              <Image src={CartIcon} width={28} height={20} alt={"cart"} />
            </div>
            <div className="flex gap-2 items-center">
              <Image src={profileImage} width={40} height={40} alt={"DP"} />
              <h1>{profileName}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
