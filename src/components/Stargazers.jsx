import TeamLayout from "./TeamLayout";

const STARGAZERS = {
  lead: "Lanka Geetha Koumudi",

  members: [
    "Rithik Basava",
    "Sai Durga Hasini Yecherla",
    "Priya Bandaru",
    "Kumari Yashika Singh",
    "Quaneisha Parapathi",
    "Aashritha Ande",
    "Kulluru Venkata Keerthana",
    "Akella Manognya",
    "Pothina Geetha Manjeera",
    "Glory Therissa Chittigala",
    "T. Vani Karthikeya",
    "Maddipati Aswini Sri Sahishnav",
    "Gurpreet Singh Mand",
  ],
};

export default function Stargazers() {
  return (
    <TeamLayout
      emoji="🔭"
      teamName="Stargazers"
      description="Dedicated to exploring the universe through astronomy, astrophysics, and rocketry."
      mission="Inspire and educate students about astronomy and space science through hands-on research and outreach."
      vision="To build a passionate student community exploring the cosmos."
      activities={[
        {
          title: "🌌 Stargazing Nights",
          desc: "Monthly telescope observation sessions.",
        },
        {
          title: "📚 Lectures & Workshops",
          desc: "Expert-led astronomy sessions.",
        },
        {
          title: "🔬 Research Projects",
          desc: "Hands-on space data and orbital research.",
        },
      ]}
      lead={STARGAZERS.lead}
      members={STARGAZERS.members}
    />
  );
}
