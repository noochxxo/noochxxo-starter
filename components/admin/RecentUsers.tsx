import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

interface Users {
  name: string; 
  email: string;
  role: string;
  status: string;
  joined: string;
}

type Props = {
  recentUsers: Users[];
};

const RecentUsers = ({
  recentUsers
}: Props) => {
  return (
    <div className="lg:col-span-2">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Recent Users</h2>
          <Button variant="outline" size="sm">
            Manage Users
          </Button>
        </div>
        <div className="space-y-4">
          {recentUsers.map((user, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">{user.name[0]}</span>
                </div>
                <div>
                  <p className="font-medium text-white">{user.name}</p>
                  <p className="text-sm text-gray-300">{user.email}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.role === "Admin"
                        ? "bg-purple-500/20 text-purple-400"
                        : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {user.role}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {user.status}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">{user.joined}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default RecentUsers;