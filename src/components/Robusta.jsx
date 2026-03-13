import TeamLayout from "./TeamLayout";

export default function Robusta() {
  return (
    <TeamLayout
      emoji="🤖"
      teamName="Robusta"
      description="Advancing robotics and autonomous systems in aerospace."
      mission="Push robotics innovation through autonomous systems and intelligent control."
      vision="Deliver impactful robotics solutions for aerospace applications."
      activities={[
        {
          title: "🚗 Autonomous Rovers",
          desc: "Designing intelligent navigation systems.",
        },
        {
          title: "🚁 Aerial Drones",
          desc: "Building UAVs for mapping and research.",
        },
        {
          title: "🧠 Control Systems",
          desc: "Embedded and AI-based robotics systems.",
        },
      ]}
    />
  );
}
