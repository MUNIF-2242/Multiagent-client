import React from "react";
import AddNewDoc from "./AddNewDoc";

const RagChatSidebar = () => {
  return (
    <div className="panel border-start rounded-0 closed">
      <div>
        <AddNewDoc />
      </div>
    </div>
  );
};

export default RagChatSidebar;
