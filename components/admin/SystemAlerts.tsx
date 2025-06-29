import React from "react";
import { Card } from "../ui/card";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";

interface SystemAlert {
  type: string;
  message: string;
  time: string;
}

type Props = {
  systemAlerts: SystemAlert[];
};

const SystemAlerts = ({
  systemAlerts
}: Props) => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-white mb-4">System Alerts</h2>
      <div className="space-y-3">
        {systemAlerts.map((alert, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg border border-white/10"
          >
            <div
              className={`p-1 rounded-full ${
                alert.type === "error"
                  ? "bg-red-500/20"
                  : alert.type === "warning"
                  ? "bg-yellow-500/20"
                  : "bg-blue-500/20"
              }`}
            >
              {alert.type === "error" ? (
                <AlertTriangle className="h-4 w-4 text-red-400" />
              ) : alert.type === "warning" ? (
                <AlertTriangle className="h-4 w-4 text-yellow-400" />
              ) : (
                <CheckCircle className="h-4 w-4 text-blue-400" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm text-white">{alert.message}</p>
              <p className="text-xs text-gray-400 flex items-center mt-1">
                <Clock className="h-3 w-3 mr-1" />
                {alert.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SystemAlerts;