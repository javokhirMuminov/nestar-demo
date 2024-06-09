import { useState } from "react";

const Community = () => {
  console.log("COMMUNITY COMPONENT - PAGES TOUTER");
  const [title, setTitle] = useState<string>("hello");
  return <div>COMMUNITY</div>;
};

export default Community;