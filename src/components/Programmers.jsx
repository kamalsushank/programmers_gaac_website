import TeamLayout from "./TeamLayout";

export default function Programmers() {
  return (
    <TeamLayout
      emoji="💻"
      teamName="Programmers"
      description="Developing intelligent aerospace software systems."
      mission="Create scalable and efficient software solutions for aerospace innovation."
      vision="Become a high-impact student development team."
      activities={[
        {
          title: "🛰 Flight Software",
          desc: "Embedded and high-level aerospace systems.",
        },
        {
          title: "📊 Data & Simulation",
          desc: "Mission analytics and simulation tools.",
        },
        {
          title: "🤖 AI & Automation",
          desc: "Machine learning for aerospace applications.",
        },
      ]}
    />
  );
}
