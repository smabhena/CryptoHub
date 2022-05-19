import React, { useState, useContext, useEffect } from "react";
import { userContext } from "../../auth/auth";
import { XIcon } from "@heroicons/react/outline";
import { mockSuggestedAccounts } from "../../mocks/mockSuggestedAccounts";

const NavigationSearchBar = () => {
  const { user } = useContext(userContext);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="border text-left text-gray-400 rounded-md w-full px-2 py-1 mr-1 sm:mr-4 focus:outline-none focus:ring-indigo-500 hover:border-indigo-500 cursor-text"
      >
        Search
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-start mt-16 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-10/12 sm:w-6/12 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative flex-auto">
                  <form method="POST">
                    <div className="flex items-start justify-between p-5 border-solid border-slate-200 rounded-t">
                      <input
                        autoFocus
                        className="border rounded-md w-full px-2 py-1 mr-1 sm:mr-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        type="text"
                        placeholder="Search"
                      />
                      <button
                        className="px-1 p-1"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="flex flex-col items-center">
                      <div>
                        <p className="text-gray-400">No recent searches</p>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-solid border-slate-200 rounded-b"></div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default NavigationSearchBar;
