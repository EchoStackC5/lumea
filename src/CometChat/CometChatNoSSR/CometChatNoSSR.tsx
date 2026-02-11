import React, { useEffect, useState } from "react";


import {
  CometChatUIKit,
  UIKitSettingsBuilder,
} from "@cometchat/chat-uikit-react";
// import CometChatApp from "../CometChat/CometChatApp";
import CometChatApp from "../CometChatApp";
// import { CometChatProvider } from "../CometChat/context/CometChatContext";
import { CometChatProvider } from "../context/CometChatContext";
// import { setupLocalization } from "../CometChat/utils/utils";
import { setupLocalization } from "../utils/utils";




// Replace these with your actual keys
export const COMETCHAT_CONSTANTS = {
  APP_ID: "2788638bad2e07e3", // Replace with your App ID
  REGION: "EU", // Replace with your App Region
  AUTH_KEY: "991a93b38fe262595ae2e2076d9f0c30aafb4004", // Replace with your Auth Key
};

const CometChatNoSSR: React.FC = () => {
  const [initialized, setInitialized] = useState(false);
  const [user, setUser] = useState<CometChat.User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Exit if not running in the browser
    if (typeof window === "undefined") return;

    const UIKitSettings = new UIKitSettingsBuilder()
      .setAppId(COMETCHAT_CONSTANTS.APP_ID)
      .setRegion(COMETCHAT_CONSTANTS.REGION)
      .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
      .subscribePresenceForAllUsers()
      .build();

    CometChatUIKit.init(UIKitSettings)
      ?.then(() => {
        console.log("Initialization completed");
        setupLocalization();
        setInitialized(true);

        const UID = localStorage.getItem("USER_ID");  // Replace with your actual UID

        if (!UID) {
          console.error("No USER_ID found in localStorage");
          setError("No user ID found. Please login again.");
          return;
        }

        CometChatUIKit.getLoggedinUser().then((loggedInUser) => {
          if (!loggedInUser) {
            console.log("Attempting to login with UID:", UID);
            CometChatUIKit.login(UID)
              .then((newUser) => {
                console.log("Login successful:", newUser);
                setUser(newUser);
              })
              .catch((error) => {
                console.error("Login failed with UID:", UID, "Error:", error);
                console.error("Make sure this user exists in CometChat");
                setError(`Failed to login to chat. User may not exist in CometChat system.`);
              });
          } else {
            console.log("User already logged in:", loggedInUser);
            setUser(loggedInUser);
          }
        });
      })
      .catch((error) => {
        console.error("CometChat initialization failed:", error);
        setError("Failed to initialize chat system.");
      });
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center p-6 bg-red-50 rounded-lg max-w-md">
          <h2 className="text-xl font-semibold text-red-600 mb-2">Chat Error</h2>
          <p className="text-gray-700">{error}</p>
          <p className="text-sm text-gray-500 mt-4">
            Check the console for more details.
          </p>
        </div>
      </div>
    );
  }

  if (!initialized || !user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Initializing Chat...</p>
        </div>
      </div>
    );
  }

  return (
    <div className=" h-screen w-full ">
      <CometChatProvider>
        <CometChatApp />
      </CometChatProvider>
    </div>
  );
};

export default CometChatNoSSR;