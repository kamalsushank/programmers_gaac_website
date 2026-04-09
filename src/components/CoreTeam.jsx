import TeamLayout from "./TeamLayout";

export default function CoreTeam() {
  return (
    <TeamLayout
      emoji="🌟"
      teamName="Core Team"
      description="Leading operations, outreach, and coordination within GAAC."
      mission="Ensure smooth execution and strong community engagement across all GAAC initiatives."
      vision="Drive GAAC's growth with decisive leadership, strategic partnerships, and lasting impact."
      activities={[
        { title: "📋 Operations", desc: "Managing logistics and execution across all club events." },
        { title: "🤝 Outreach", desc: "Building partnerships, collaborations, and campus presence." },
        { title: "📣 Communications", desc: "Managing announcements, social media, and coordination." },
      ]}
    />
  );
}
