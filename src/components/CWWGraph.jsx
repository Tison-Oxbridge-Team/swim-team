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

const lapTime = [
  { name: "Lap 1", Group1: 37.04, Group2: 33.81, Group3: 38.41, Chloe: 36.11 },
  { name: "Lap 2", Group1: 37.64, Group2: 34.35, Group3: 38.97, Chloe: 36.65 },
  { name: "Lap 3", Group1: 38.26, Group2: 34.89, Group3: 39.50, Chloe: 37.22 },
  { name: "Lap 4", Group1: 38.88, Group2: 35.39, Group3: 40.03, Chloe: 37.80 },
];

const strokeCount = [
  { name: "Lap 1", Group1: 35.25, Group2: 31.5, Group3: 35.5, Chloe: 34 },
  { name: "Lap 2", Group1: 36, Group2: 32.75, Group3: 36.5, Chloe: 35 },
  { name: "Lap 3", Group1: 36.75, Group2: 33.75, Group3: 37.5, Chloe: 36 },
  { name: "Lap 4", Group1: 37.5, Group2: 34.75, Group3: 38.5, Chloe: 37 },
];

const breathCount = [
  { name: "Lap 1", Group1: 13, Group2: 11, Group3: 13.5, Chloe: 12 },
  { name: "Lap 2", Group1: 13.5, Group2: 11.75, Group3: 14, Chloe: 13 },
  { name: "Lap 3", Group1: 14, Group2: 12, Group3: 14.5, Chloe: 13 },
  { name: "Lap 4", Group1: 14.5, Group2: 12.5, Group3: 15, Chloe: 14 },
];

const dps = [
  { name: "Lap 1", Group1: 1.41, Group2: 1.62, Group3: 1.39, Chloe: 1.47 },
  { name: "Lap 2", Group1: 1.37, Group2: 1.56, Group3: 1.35, Chloe: 1.43 },
  { name: "Lap 3", Group1: 1.33, Group2: 1.50, Group3: 1.31, Chloe: 1.39 },
  { name: "Lap 4", Group1: 1.29, Group2: 1.45, Group3: 1.27, Chloe: 1.35 },
];

const map = {
  lapTime: lapTime,
  strokeCount: strokeCount,
  breathCount: breathCount,
  dps: dps,
};


const DataGraph = ({attribute}) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={map[attribute]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        
        <Line type="monotone" dataKey="Group1" stroke="#1f77b4" strokeWidth={3} dot={{ r: 5 }} />
        <Line type="monotone" dataKey="Group2" stroke="#2ca02c" strokeWidth={3} dot={{ r: 5 }} />
        <Line type="monotone" dataKey="Group3" stroke="#000" strokeWidth={3} dot={{ r: 5 }} />
        <Line type="monotone" dataKey="Chloe" stroke="#d62728" strokeWidth={3} dot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DataGraph;
