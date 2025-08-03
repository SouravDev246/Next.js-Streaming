import IconCard from "@/components/icon-card";
import getTools from "@/lib/getTools";
import { Suspense, use } from "react";
import CardSkeleton from "./ui/card-skeleton";

const ToolsCard = ({toolsPromise}) => {
  const tool = use(toolsPromise);
  return <IconCard tool={tool} />;
};

const ToolsCards = async () => {
  const toolsPromises = await getTools();

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6 py-6">
        {toolsPromises.map((toolsPromise, index) => (
          <Suspense fallback={<CardSkeleton />} key={index}>
            <ToolsCard toolsPromise={toolsPromise} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default ToolsCards;
