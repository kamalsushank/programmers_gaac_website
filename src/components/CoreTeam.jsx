import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

import TeamLayout from "./TeamLayout";

export default function CoreTeam() {
  return (
    <TeamLayout
      emoji="🌟"
      teamName="Core Team"
      description="Leading operations, outreach, and coordination within GAAC."
      mission="Ensure smooth execution and strong community engagement."
      vision="Drive GAAC growth with leadership and impact."
      activities={[
        { title: "📋 Operations", desc: "Managing logistics and execution." },
        {
          title: "🤝 Outreach",
          desc: "Building partnerships and collaborations.",
        },
        {
          title: "📣 Communications",
          desc: "Managing announcements and coordination.",
        },
      ]}
    />
  );
}
