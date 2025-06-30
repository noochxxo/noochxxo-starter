import { BarChart3, Rocket, Settings, User, Users } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

interface User {
    id: number;
    name: string | null;
    email: string;
    passwordHash: string;
    role: "guest" | "member" | "admin" | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}

type Props = {
  user: User | undefined;
}

const QuickActions = ({
  user
}: Props) => {
  return (
    <div className="space-y-6">
      <Card className="card p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
        <div className="space-y-3">
          <Button variant="outline" className="justify-start w-full outline-btn py-6">
            <Rocket />
            Create New Project
          </Button>
          <Button variant="outline" className="justify-start w-full outline-btn py-6">
            <Users />
            Invite Team Member
          </Button>
          <Button variant="outline" className="justify-start w-full outline-btn py-6">
            <BarChart3 />
            View Analytics
          </Button>
          <Button variant="outline" className="justify-start w-full outline-btn py-6">
            <Settings />
            Account Settings
          </Button>
        </div>
      </Card>

      <Card className="card p-6">
        <h2 className="text-xl font-semibold text-white mb-4">
          Account Overview
        </h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="font-medium text-white">{user?.email}</p>
              <p className="text-sm text-gray-300">{user?.email}</p>
            </div>
          </div>
          <div className="pt-4 border-t border-white/10">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300">Plan</span>
              <span className="text-white font-medium">Pro</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Storage Used</span>
              <span className="text-white font-medium">2.4 GB / 10 GB</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div className="bg-gradient-to-r from-cosmic-500 to-nebula-500 h-2 rounded-full w-1/4"></div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QuickActions;
