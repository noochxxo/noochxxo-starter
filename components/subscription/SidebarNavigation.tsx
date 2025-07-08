import { Dispatch, SetStateAction } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { subscriptionTabs as tabs } from "@/mock_data";
import { cn } from "@/lib/utils";

type Props = {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
};

export const SidebarNavigation = ({ activeTab, setActiveTab }: Props) => {
  return (
    <div className="lg:col-span-1">
      <Card className="card p-4">
        <nav className="space-y-2">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "primary-btn w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors",
                activeTab === tab.id
                  ? "bg-cosmic-600/20 text-cosmic-400 border border-cosmic-600/30"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              )}
            >
              <tab.icon className="h-5 w-5" />
              <span className="font-medium">{tab.name}</span>
            </Button>
          ))}
        </nav>
      </Card>
    </div>
  );
};
