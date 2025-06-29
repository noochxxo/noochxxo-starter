import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { BarChart3, Settings, Shield, Users } from "lucide-react";

const QuickActions = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
      <div className="space-y-3">
        <Button variant="outline" className="justify-start w-full">
          <Users />
          User Management
        </Button>
        <Button variant="outline" className="justify-start w-full">
          <BarChart3 />
          System Analytics
        </Button>
        <Button variant="outline" className="justify-start w-full">
          <Shield />
          Security Settings
        </Button>
        <Button variant="outline" className="justify-start w-full">
          <Settings />
          System Configuration
        </Button>
      </div>
    </Card>
  );
};

export default QuickActions;