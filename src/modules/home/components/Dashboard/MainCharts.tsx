import React from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { geneFrequencyData, cancerTypeDistribution } from "../../data";

const COLORS = [
  "#0EA5E9",
  "#14B8A6",
  "#2DD4BF",
  "#22D3EE",
  "#8B5CF6",
  "#EC4899",
];

const MainCharts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Mutation Frequency by Gene
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={geneFrequencyData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={80} />
              <Tooltip formatter={(value) => [`${value}%`, "Frequency"]} />
              <Legend />
              <Bar
                dataKey="frequency"
                name="Frequency (%)"
                radius={[0, 4, 4, 0]}
              >
                {geneFrequencyData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.frequency > 10 ? "#ffd900" : "#2855b2"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Rare Disease Type Distribution
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={cancerTypeDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {cancerTypeDistribution.map((_entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value} mutations`, "Count"]} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MainCharts;

