import React, { ForwardRefExoticComponent, RefAttributes } from 'react'
import { Card } from '../ui/card'
import { LucideProps } from 'lucide-react';

interface Stats {
  name: string;
  value: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  color: string;
}

type Props = {
  usersStats: Stats[];
}

const StatsGrid = ({
  usersStats
}: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {usersStats.map((stat) => (
            <Card key={stat.name} className="card p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-gray-300">{stat.name}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
  )
}

export default StatsGrid;