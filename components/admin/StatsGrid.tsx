import { Card } from "../ui/card";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface Stats {
  name: string;
  value: string;
  change: string;
  color: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

type Props = {
  stats: Stats[];
};

const StatsGrid = ({ stats }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => (
        <Card
          key={stat.name}
          className="p-6 hover:scale-105 transition-transform duration-300"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-gray-300">{stat.name}</p>
              <p className="text-green-400 text-sm font-medium">
                {stat.change}
              </p>
            </div>
            <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default StatsGrid;
