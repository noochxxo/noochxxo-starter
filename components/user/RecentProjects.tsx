import { Users } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

interface Projects {
  name: string;
  status: string;
  progress: number;
  team: number;
}

type Props = {
  recentProjects: Projects[];
};

const RecentProjects = ({
  recentProjects
}: Props) => {
  return (
    <div className="lg:col-span-2">
      <Card className="card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Recent Projects</h2>
          <Button variant="outline" size="sm" className="outline-btn">
            View All
          </Button>
        </div>
        <div className="space-y-4">
          {recentProjects.map((project, index) => (
            <div
              key={index}
              className="p-4 bg-white/5 rounded-lg border border-white/10"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-white">{project.name}</h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === "Active"
                      ? "bg-green-500/20 text-green-400"
                      : project.status === "In Review"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-1 mr-4">
                  <div className="flex items-center justify-between text-sm text-gray-300 mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cosmic-500 to-nebula-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="h-4 w-4 mr-1" />
                  <span className="text-sm">{project.team}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default RecentProjects;