import { Button } from "monday-ui-react-core";
import Zendesk, { ZendeskAPI, ZENDESK_API_KEY } from "../zendex/ZendexConfig";
import { useState } from "react";

const DocGen = () => {
  const [loadChat, setLoadChat] = useState(false);

  const handleLoaded = () => {
    ZendeskAPI("messenger", "open");
  };

  const clickEvent = () => {
    setLoadChat((preState) => {
      if (preState) {
        toggleChat("none");
        return false;
      } else {
        toggleChat("block");
        return true;
      }
    });
  };

  const toggleChat = (prop) => {
    const iframes = document.getElementsByTagName("iframe");
    if (iframes?.length > 0) {
      for (let i = 0; i < iframes.length; ++i) {
        iframes[i].style.display = prop;
      }
    }
  };

  return (
    <div className="fixedBtn">
      {loadChat && (
        <Zendesk defer zendeskKey={ZENDESK_API_KEY} onLoaded={handleLoaded} />
      )}
      <Button onClick={clickEvent}>DocuGen help</Button>
    </div>
  );
};

export default DocGen;
