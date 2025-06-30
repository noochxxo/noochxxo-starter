import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { BarChart3, Settings, Shield, Users } from "lucide-react";

const QuickActions = () => {
  return (
    <Card className="card p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
      <div className="space-y-3">
        <Button variant="outline" className="justify-start w-full outline-btn py-6">
          <Users />
          User Management
        </Button>
        <Button variant="outline" className="justify-start w-full outline-btn py-6">
          <BarChart3 />
          System Analytics
        </Button>
        <Button variant="outline" className="justify-start w-full outline-btn py-6">
          <Shield />
          Security Settings
        </Button>
        <Button variant="outline" className="justify-start w-full outline-btn py-6">
          <Settings />
          System Configuration
        </Button>
      </div>
    </Card>
  );
};

export default QuickActions;