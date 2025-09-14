import CardOne from "@/components/cards/CardOne";
import GradientCard from "@/components/cards/GradientCard";
import JiraTicket from "@/components/cards/JiraTicket";
import ProgressCard from "@/components/cards/ProgressCard";

export default function Home() {
  return (
    // <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-5 gap-2">
    <div className="flex flex-wrap gap-2">
      <CardOne></CardOne>
      <JiraTicket></JiraTicket>
      <ProgressCard/>
      <GradientCard/>
    </div>
  );
}
