import RoleSection from "@/components/RoleSection";
import Showcase from "@/components/Showcase";
import Skills from "@/components/Skills";
import GoalSection from "@/components/GoalSection";
import Crossroad from "@/components/Crossroad";
import Learning from "@/components/Learning";

export default function Home() {
  return (
    <div className="relative">
      <Showcase />
      <RoleSection />
      <GoalSection />
      <Skills />
      <Learning />
      <Crossroad />
    </div>
  );
}
