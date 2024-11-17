import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Hardcoded data from CSV with descriptive keys
const chartData = [
  { name: "Lap 1", lapTime: 36.11, dps: 1.47, strokeCount: 34, breathCount: 12 },
  { name: "Lap 2", lapTime: 36.65, dps: 1.43, strokeCount: 35, breathCount: 13 },
  { name: "Lap 3", lapTime: 37.22, dps: 1.39, strokeCount: 36, breathCount: 13 },
  { name: "Lap 4", lapTime: 37.8, dps: 1.35, strokeCount: 37, breathCount: 14 },
];

const DataGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="lapTime"
          name="Lap Time"
          stroke="#1f77b4"
          strokeWidth={3}
          dot={{ r: 5 }}
        />
        <Line
          type="monotone"
          dataKey="dps"
          name="DPS"
          stroke="#2ca02c"
          strokeWidth={3}
          dot={{ r: 5 }}
        />
        <Line
          type="monotone"
          dataKey="strokeCount"
          name="Stroke Count"
          stroke="#000"
          strokeWidth={3}
          dot={{ r: 5 }}
        />
        <Line
          type="monotone"
          dataKey="breathCount"
          name="Breath Count"
          stroke="#d62728"
          strokeWidth={3}
          dot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DataGraph;
