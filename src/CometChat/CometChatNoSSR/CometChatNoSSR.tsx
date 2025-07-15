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

        const UID = "cometchat-uid-1"; // Replace with your actual UID

        CometChatUIKit.getLoggedinUser().then((loggedInUser) => {
          if (!loggedInUser) {
            CometChatUIKit.login(UID)
              .then((newUser) => {
                console.log("Login successful:", newUser);
                setUser(newUser);
              })
              .catch((error) => {
                console.error("Login failed:", error);
              });
          } else {
            console.log("User already logged in:", loggedInUser);
            setUser(loggedInUser);
          }
        });
      })
      .catch((error) => {
        console.error("CometChat initialization failed:", error);
      });
  }, []);

  if (!initialized || !user) {
    return <div>Initializing Chat...</div>;
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