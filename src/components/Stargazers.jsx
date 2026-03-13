import TeamLayout from "./TeamLayout";

export default function Stargazers() {
  return (
    <TeamLayout
      emoji="🔭"
      teamName="StarGazers"
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
    />
  );
}
