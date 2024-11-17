import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";


const lapTime = [
  { name: "1", Victor: 33.87, Chloe: 36.11, James: 37.88, Krystle: 40.33 },
  { name: "2", Victor: 34.45, Chloe: 36.65, James: 38.47, Krystle: 40.89 },
  { name: "3", Victor: 35.02, Chloe: 37.22, James: 39.21, Krystle: 41.46 },
  { name: "4", Victor: 35.76, Chloe: 37.8, James: 39.86, Krystle: 41.97 },
];
const strokeCount = [
  { name: "Lap 1", Victor: 32, Chloe: 34, James: 36, Krystle: 38 },
  { name: "Lap 2", Victor: 33, Chloe: 35, James: 37, Krystle: 39 },
  { name: "Lap 3", Victor: 34, Chloe: 36, James: 38, Krystle: 40 },
  { name: "Lap 4", Victor: 35, Chloe: 37, James: 39, Krystle: 41 },
];

const breathCount = [
  { name: "Lap 1", Victor: 11, Chloe: 12, James: 13, Krystle: 14 },
  { name: "Lap 2", Victor: 12, Chloe: 13, James: 14, Krystle: 15 },
  { name: "Lap 3", Victor: 12, Chloe: 13, James: 14, Krystle: 15 },
  { name: "Lap 4", Victor: 13, Chloe: 14, James: 15, Krystle: 16 },
];

const dps = [
  { name: "Lap 1", Victor: 1.56, Chloe: 1.47, James: 1.39, Krystle: 1.32 },
  { name: "Lap 2", Victor: 1.52, Chloe: 1.43, James: 1.35, Krystle: 1.28 },
  { name: "Lap 3", Victor: 1.47, Chloe: 1.39, James: 1.32, Krystle: 1.25 },
  { name: "Lap 4", Victor: 1.43, Chloe: 1.35, James: 1.28, Krystle: 1.22 },
];
const map = {
  lapTime: lapTime,
  strokeCount: strokeCount,
  breathCount: breathCount,
  dps: dps,
}

const legend = {
  lapTime: "Lap Time",
  strokeCount: "Stroke Count",
  breathCount: "Breath Count",
  dps: "DPS",
}



const DataGraph = ({ attribute }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={map[attribute]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name">
          <Label value="Laps" offset={-5} position="insideBottom" />
        </XAxis>
        <YAxis>
          <Label
            value={legend[attribute]}
            angle={-90}
            position="insideLeft"
            style={{ textAnchor: "middle" }}
          />
        </YAxis>
        <Tooltip />
        <Line type="monotone" dataKey="Victor" stroke="#1f77b4" strokeWidth={3} dot={{ r: 5 }} />
        <Line type="monotone" dataKey="Chloe" stroke="#2ca02c" strokeWidth={6} dot={{ r: 5 }} />
        <Line type="monotone" dataKey="James" stroke="#000" strokeWidth={3} dot={{ r: 5 }} />
        <Line type="monotone" dataKey="Krystle" stroke="#d62728" strokeWidth={3} dot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DataGraph;
