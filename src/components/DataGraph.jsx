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
  { name: "Text 1", line1: 100, line2: 75, line3: 25 },
  { name: "Text 2", line1: 90, line2: 70, line3: 35 },
  { name: "Text 3", line1: 80, line2: 65, line3: 50 },
  { name: "Text 4", line1: 70, line2: 60, line3: 65 },
  { name: "Text 5", line1: 60, line2: 50, line3: 15 },
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
        <Line type="monotone" dataKey="line3" stroke="#98df8a" strokeWidth={3} dot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DataGraph;
