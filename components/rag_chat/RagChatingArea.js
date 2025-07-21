import React from "react";
import RagChatTopBar from "./RagChatTopBar";
import RagMessageArea from "./RagMessageArea";
import RagMessageInput from "./RagMessageInput";

const RagChatingArea = () => {
  return (
    <div className="chatting-area">
      <RagChatTopBar />
      <RagMessageArea />
      <RagMessageInput />
    </div>
  );
};

export default RagChatingArea;
