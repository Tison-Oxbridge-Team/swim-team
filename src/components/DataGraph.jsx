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

const data = [
    { name: "Lap 1", line1: 100, line2: 75, line3: 5, line4: 0 },
    { name: "Lap 2", line1: 90, line2: 70, line3: 5, line4: 70 },
    { name: "Lap 3", line1: 80, line2: 65, line3: 10, line4: 90 },
    { name: "Lap 4", line1: 0, line2: 60, line3: 65, line4: 70 },
    { name: "Lap 5", line1: 90, line2: 50, line3: 95, line4: 0 },
  ];

const DataGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        
        <Line type="monotone" dataKey="line1" stroke="#1f77b4" strokeWidth={3} dot={{ r: 5 }} />
        <Line type="monotone" dataKey="line2" stroke="#2ca02c" strokeWidth={3} dot={{ r: 5 }} />
        <Line type="monotone" dataKey="line3" stroke="#FFFF00" strokeWidth={3} dot={{ r: 5 }} />
        <Line type="monotone" dataKey="line4" stroke="#d62728" strokeWidth={3} dot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DataGraph;
