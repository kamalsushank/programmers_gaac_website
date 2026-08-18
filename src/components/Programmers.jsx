import TeamLayout from "./TeamLayout";

const PROGRAMMERS = {
  lead: "T Kamal Sushank",

  members: [
    "Pranay Panakanti",
    "K Sri Chakri",
    "Vutukuru Yeshwanth Koundinya",
    "Akash Kishan Karri",
    "Tadala Lakshmi Abhiram",
    "P Eswar Sai",
    "Gadde Sai Harshita",
    "G M S V N Sanjana",
    "K Sasikiran",
  ],
};

export default function Programmers() {
  return (
    <TeamLayout
      emoji="💻"
      teamName="Programmers"
      description="Building software, simulations, and intelligent systems that power GAAC's technical initiatives."
      mission="Develop innovative software solutions and technical tools for aerospace and robotics applications."
      vision="To build a strong community of programmers solving real-world aerospace challenges."
      activities={[
        {
          title: "💻 Software Development",
          desc: "Building applications and tools for GAAC initiatives.",
        },
        {
          title: "🤖 Automation & AI",
          desc: "Developing intelligent and automated technical solutions.",
        },
        {
          title: "🧠 Technical Projects",
          desc: "Working on challenging software and computational projects.",
        },
      ]}
      lead={PROGRAMMERS.lead}
      members={PROGRAMMERS.members}
    />
  );
}
