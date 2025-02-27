import React, { useContext } from "react";
import NavigationSearchBar from "./NavigationSearchBar";
import CreatePostButton from "./CreatePostButton";
import NavigationProfile from "./NavigationProfile";
import { useRouter } from "next/router";
import { userContext } from "../../auth/auth";

const NavigationBar = () => {
  const router = useRouter();
  const { user } = useContext(userContext);

  return (
    <nav className="fixed bg-white w-full h-16 flex flex-row justify-between items-center px-3 sm:px-14 py-1 z-50 shadow-sm">
      <button
        onClick={() => {
          router.push("/");
        }}
        className="hidden sm:flex text-3xl font-medium"
      >
        CryptoHub
      </button>
      <div className="flex flex-row justify-between w-full sm:w-6/12 items-center">
        <NavigationSearchBar />
        {user.auth ? <CreatePostButton /> : null}
      </div>
      {user.auth ? (
        <NavigationProfile />
      ) : (
        <p className="font-semibold ml-10">About</p>
      )}
    </nav>
  );
};

export default NavigationBar;
