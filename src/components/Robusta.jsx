import TeamLayout from "./TeamLayout";

const ROBUSTA = {
  lead: "Lekkala Jeyavardhan",

  members: [
    "Dasetti Syampal",
    "H VamshiKrishna",
    "D Jithendra Varma",
    "V S G P Deepak",
    "S Nithin",
    "Prem Charan",
    "Pilaka Venkataa Suuresh",
    "G. Deepak Sai",
    "Vankayala Divya Sree",
  ],
};

export default function Robusta() {
  return (
    <TeamLayout
      emoji="🤖"
      teamName="Robusta"
      description="Building autonomous systems and robotic solutions for aerospace applications."
      mission="Design, build, and experiment with robotic systems that address real-world aerospace challenges."
      vision="To create innovative autonomous systems through hands-on robotics and engineering."
      activities={[
        {
          title: "🤖 Robotics",
          desc: "Designing and developing autonomous robotic systems.",
        },
        {
          title: "🚀 Aerospace Systems",
          desc: "Building technology for aerospace and exploration.",
        },
        {
          title: "⚙️ Prototyping",
          desc: "Turning engineering ideas into functional prototypes.",
        },
      ]}
      lead={ROBUSTA.lead}
      members={ROBUSTA.members}
    />
  );
}
