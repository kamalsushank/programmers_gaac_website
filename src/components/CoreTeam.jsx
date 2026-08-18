import TeamLayout from "./TeamLayout";

const CORE_TEAM = {
  lead: "Prasanna RDL",

  members: [
    "Harshitha Suthapalli",
    "Vaibhavi Surgani",
    "Modeboyina Sharika",
    "Vedamsha Vojjala",
    "Karthik Naidu Allu",
    "Jiten Ashrith Peerubandi",
    "Esha Vegi",
  ],
};

export default function CoreTeam() {
  return (
    <TeamLayout
      emoji="🌟"
      teamName="Core Team"
      description="Driving coordination, leadership, communication, and execution across GAAC's initiatives."
      mission="Coordinate people, projects, and activities to ensure the smooth functioning of GAAC."
      vision="To build a collaborative and organized community that drives GAAC forward."
      activities={[
        {
          title: "📋 Coordination",
          desc: "Managing and coordinating GAAC activities and initiatives.",
        },
        {
          title: "🤝 Outreach",
          desc: "Building connections and strengthening the GAAC community.",
        },
        {
          title: "🌟 Leadership",
          desc: "Supporting teams and ensuring effective execution.",
        },
      ]}
      lead={CORE_TEAM.lead}
      members={CORE_TEAM.members}
    />
  );
}
