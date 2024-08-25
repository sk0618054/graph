import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./App.css";

const App = () => {
  const [sensorTimeRanges, setSensorTimeRanges] = useState({
    internet: "3h",
    motion: "3h",
    latency: "3h",
    battery: "3h",
  });

  const data = {
    internet: {
      "3h": [
        { time: "22:14", speed: 45 },
        { time: "22:34", speed: 50 },
        { time: "22:54", speed: 55 },
        { time: "23:14", speed: 60 },
        { time: "23:34", speed: 65 },
        { time: "23:54", speed: 60 },
        { time: "00:14", speed: 50 },
        { time: "00:34", speed: 55 },
        { time: "00:54", speed: 60 },
        { time: "01:14", speed: 65 },
      ],
      "24h": [
        { time: "00:00", speed: 50 },
        { time: "01:00", speed: 55 },
        { time: "02:00", speed: 60 },
        { time: "03:00", speed: 65 },
        { time: "04:00", speed: 70 },
        { time: "05:00", speed: 75 },
        { time: "06:00", speed: 80 },
        { time: "07:00", speed: 85 },
        { time: "08:00", speed: 90 },
        { time: "09:00", speed: 85 },
        { time: "10:00", speed: 80 },
        { time: "11:00", speed: 75 },
        { time: "12:00", speed: 70 },
        { time: "13:00", speed: 65 },
        { time: "14:00", speed: 60 },
        { time: "15:00", speed: 55 },
        { time: "16:00", speed: 50 },
        { time: "17:00", speed: 45 },
        { time: "18:00", speed: 40 },
        { time: "19:00", speed: 35 },
        { time: "20:00", speed: 30 },
        { time: "21:00", speed: 25 },
        { time: "22:00", speed: 20 },
        { time: "23:00", speed: 15 },
      ],
      "7d": [
        { time: "19/08/2024", speed: 50 },
        { time: "20/08/2024", speed: 60 },
        { time: "21/08/2024", speed: 70 },
        { time: "22/08/2024", speed: 80 },
        { time: "23/08/2024", speed: 90 },
        { time: "24/08/2024", speed: 100 },
        { time: "25/08/2024", speed: 110 },
      ],
      "30d": [
        { time: "27/07/2024", speed: 40 },
        { time: "28/07/2024", speed: 42 },
        { time: "29/07/2024", speed: 44 },
        { time: "30/07/2024", speed: 46 },
        { time: "31/07/2024", speed: 48 },
        { time: "01/08/2024", speed: 50 },
        { time: "02/08/2024", speed: 52 },
        { time: "03/08/2024", speed: 54 },
        { time: "04/08/2024", speed: 56 },
        { time: "05/08/2024", speed: 58 },
        { time: "06/08/2024", speed: 60 },
        { time: "07/08/2024", speed: 62 },
        { time: "08/08/2024", speed: 64 },
        { time: "09/08/2024", speed: 66 },
        { time: "10/08/2024", speed: 68 },
        { time: "11/08/2024", speed: 70 },
        { time: "12/08/2024", speed: 72 },
        { time: "13/08/2024", speed: 74 },
        { time: "14/08/2024", speed: 76 },
        { time: "15/08/2024", speed: 78 },
        { time: "16/08/2024", speed: 80 },
        { time: "17/08/2024", speed: 82 },
        { time: "18/08/2024", speed: 84 },
        { time: "19/08/2024", speed: 86 },
        { time: "20/08/2024", speed: 88 },
        { time: "21/08/2024", speed: 90 },
        { time: "22/08/2024", speed: 92 },
        { time: "23/08/2024", speed: 94 },
        { time: "24/08/2024", speed: 96 },
        { time: "25/08/2024", speed: 98 },
      ],
    },
    motion: {
      "3h": [
        { time: "22:14", motion: 100 },
        { time: "22:34", motion: 102 },
        { time: "22:54", motion: 104 },
        { time: "23:14", motion: 106 },
        { time: "23:34", motion: 108 },
        { time: "23:54", motion: 110 },
        { time: "00:14", motion: 112 },
        { time: "00:34", motion: 114 },
        { time: "00:54", motion: 116 },
        { time: "01:14", motion: 118 },
      ],
      "24h": [
        { time: "00:00", motion: 100 },
        { time: "01:00", motion: 102 },
        { time: "02:00", motion: 104 },
        { time: "03:00", motion: 106 },
        { time: "04:00", motion: 108 },
        { time: "05:00", motion: 110 },
        { time: "06:00", motion: 112 },
        { time: "07:00", motion: 114 },
        { time: "08:00", motion: 116 },
        { time: "09:00", motion: 118 },
        { time: "10:00", motion: 120 },
        { time: "11:00", motion: 122 },
        { time: "12:00", motion: 124 },
        { time: "13:00", motion: 126 },
        { time: "14:00", motion: 128 },
        { time: "15:00", motion: 130 },
        { time: "16:00", motion: 132 },
        { time: "17:00", motion: 134 },
        { time: "18:00", motion: 136 },
        { time: "19:00", motion: 138 },
        { time: "20:00", motion: 140 },
        { time: "21:00", motion: 142 },
        { time: "22:00", motion: 144 },
        { time: "23:00", motion: 146 },
      ],
      "7d": [
        { time: "19/08/2024", motion: 100 },
        { time: "20/08/2024", motion: 105 },
        { time: "21/08/2024", motion: 110 },
        { time: "22/08/2024", motion: 115 },
        { time: "23/08/2024", motion: 120 },
        { time: "24/08/2024", motion: 125 },
        { time: "25/08/2024", motion: 130 },
      ],
      "30d": [
        { time: "27/07/2024", motion: 90 },
        { time: "28/07/2024", motion: 92 },
        { time: "29/07/2024", motion: 94 },
        { time: "30/07/2024", motion: 96 },
        { time: "31/07/2024", motion: 98 },
        { time: "01/08/2024", motion: 100 },
        { time: "02/08/2024", motion: 102 },
        { time: "03/08/2024", motion: 104 },
        { time: "04/08/2024", motion: 106 },
        { time: "05/08/2024", motion: 108 },
        { time: "06/08/2024", motion: 110 },
        { time: "07/08/2024", motion: 112 },
        { time: "08/08/2024", motion: 114 },
        { time: "09/08/2024", motion: 116 },
        { time: "10/08/2024", motion: 118 },
        { time: "11/08/2024", motion: 120 },
        { time: "12/08/2024", motion: 122 },
        { time: "13/08/2024", motion: 124 },
        { time: "14/08/2024", motion: 126 },
        { time: "15/08/2024", motion: 128 },
        { time: "16/08/2024", motion: 130 },
        { time: "17/08/2024", motion: 132 },
        { time: "18/08/2024", motion: 134 },
        { time: "19/08/2024", motion: 136 },
        { time: "20/08/2024", motion: 138 },
        { time: "21/08/2024", motion: 140 },
        { time: "22/08/2024", motion: 142 },
        { time: "23/08/2024", motion: 144 },
        { time: "24/08/2024", motion: 146 },
        { time: "25/08/2024", motion: 148 },
      ],
    },
    latency: {
      "3h": [
        { time: "22:14", latency: 150 },
        { time: "22:34", latency: 155 },
        { time: "22:54", latency: 160 },
        { time: "23:14", latency: 165 },
        { time: "23:34", latency: 170 },
        { time: "23:54", latency: 175 },
        { time: "00:14", latency: 180 },
        { time: "00:34", latency: 185 },
        { time: "00:54", latency: 190 },
        { time: "01:14", latency: 195 },
      ],
      "24h": [
        { time: "00:00", latency: 150 },
        { time: "01:00", latency: 155 },
        { time: "02:00", latency: 160 },
        { time: "03:00", latency: 165 },
        { time: "04:00", latency: 170 },
        { time: "05:00", latency: 175 },
        { time: "06:00", latency: 180 },
        { time: "07:00", latency: 185 },
        { time: "08:00", latency: 190 },
        { time: "09:00", latency: 195 },
        { time: "10:00", latency: 200 },
        { time: "11:00", latency: 205 },
        { time: "12:00", latency: 210 },
        { time: "13:00", latency: 215 },
        { time: "14:00", latency: 220 },
        { time: "15:00", latency: 225 },
        { time: "16:00", latency: 230 },
        { time: "17:00", latency: 235 },
        { time: "18:00", latency: 240 },
        { time: "19:00", latency: 245 },
        { time: "20:00", latency: 250 },
        { time: "21:00", latency: 255 },
        { time: "22:00", latency: 260 },
        { time: "23:00", latency: 265 },
      ],
      "7d": [
        { time: "19/08/2024", latency: 150 },
        { time: "20/08/2024", latency: 155 },
        { time: "21/08/2024", latency: 160 },
        { time: "22/08/2024", latency: 165 },
        { time: "23/08/2024", latency: 170 },
        { time: "24/08/2024", latency: 175 },
        { time: "25/08/2024", latency: 180 },
      ],
      "30d": [
        { time: "27/07/2024", latency: 140 },
        { time: "28/07/2024", latency: 142 },
        { time: "29/07/2024", latency: 144 },
        { time: "30/07/2024", latency: 146 },
        { time: "31/07/2024", latency: 148 },
        { time: "01/08/2024", latency: 150 },
        { time: "02/08/2024", latency: 152 },
        { time: "03/08/2024", latency: 154 },
        { time: "04/08/2024", latency: 156 },
        { time: "05/08/2024", latency: 158 },
        { time: "06/08/2024", latency: 160 },
        { time: "07/08/2024", latency: 162 },
        { time: "08/08/2024", latency: 164 },
        { time: "09/08/2024", latency: 166 },
        { time: "10/08/2024", latency: 168 },
        { time: "11/08/2024", latency: 170 },
        { time: "12/08/2024", latency: 172 },
        { time: "13/08/2024", latency: 174 },
        { time: "14/08/2024", latency: 176 },
        { time: "15/08/2024", latency: 178 },
        { time: "16/08/2024", latency: 180 },
        { time: "17/08/2024", latency: 182 },
        { time: "18/08/2024", latency: 184 },
        { time: "19/08/2024", latency: 186 },
        { time: "20/08/2024", latency: 188 },
        { time: "21/08/2024", latency: 190 },
        { time: "22/08/2024", latency: 192 },
        { time: "23/08/2024", latency: 194 },
        { time: "24/08/2024", latency: 196 },
        { time: "25/08/2024", latency: 198 },
      ],
    },
    battery: {
      "3h": [
        { time: "22:14", battery: 60 },
        { time: "22:34", battery: 62 },
        { time: "22:54", battery: 64 },
        { time: "23:14", battery: 66 },
        { time: "23:34", battery: 68 },
        { time: "23:54", battery: 70 },
        { time: "00:14", battery: 72 },
        { time: "00:34", battery: 74 },
        { time: "00:54", battery: 76 },
        { time: "01:14", battery: 78 },
      ],
      "24h": [
        { time: "00:00", battery: 60 },
        { time: "01:00", battery: 62 },
        { time: "02:00", battery: 64 },
        { time: "03:00", battery: 66 },
        { time: "04:00", battery: 68 },
        { time: "05:00", battery: 70 },
        { time: "06:00", battery: 72 },
        { time: "07:00", battery: 74 },
        { time: "08:00", battery: 76 },
        { time: "09:00", battery: 78 },
        { time: "10:00", battery: 80 },
        { time: "11:00", battery: 82 },
        { time: "12:00", battery: 84 },
        { time: "13:00", battery: 86 },
        { time: "14:00", battery: 88 },
        { time: "15:00", battery: 90 },
        { time: "16:00", battery: 92 },
        { time: "17:00", battery: 94 },
        { time: "18:00", battery: 96 },
        { time: "19:00", battery: 98 },
        { time: "20:00", battery: 100 },
        { time: "21:00", battery: 102 },
        { time: "22:00", battery: 104 },
        { time: "23:00", battery: 106 },
      ],
      "7d": [
        { time: "19/08/2024", battery: 60 },
        { time: "20/08/2024", battery: 62 },
        { time: "21/08/2024", battery: 64 },
        { time: "22/08/2024", battery: 66 },
        { time: "23/08/2024", battery: 68 },
        { time: "24/08/2024", battery: 70 },
        { time: "25/08/2024", battery: 72 },
      ],
      "30d": [
        { time: "27/07/2024", battery: 50 },
        { time: "28/07/2024", battery: 52 },
        { time: "29/07/2024", battery: 54 },
        { time: "30/07/2024", battery: 56 },
        { time: "31/07/2024", battery: 58 },
        { time: "01/08/2024", battery: 60 },
        { time: "02/08/2024", battery: 62 },
        { time: "03/08/2024", battery: 64 },
        { time: "04/08/2024", battery: 66 },
        { time: "05/08/2024", battery: 68 },
        { time: "06/08/2024", battery: 70 },
        { time: "07/08/2024", battery: 72 },
        { time: "08/08/2024", battery: 74 },
        { time: "09/08/2024", battery: 76 },
        { time: "10/08/2024", battery: 78 },
        { time: "11/08/2024", battery: 80 },
        { time: "12/08/2024", battery: 82 },
        { time: "13/08/2024", battery: 84 },
        { time: "14/08/2024", battery: 86 },
        { time: "15/08/2024", battery: 88 },
        { time: "16/08/2024", battery: 90 },
        { time: "17/08/2024", battery: 92 },
        { time: "18/08/2024", battery: 94 },
        { time: "19/08/2024", battery: 96 },
        { time: "20/08/2024", battery: 98 },
        { time: "21/08/2024", battery: 100 },
        { time: "22/08/2024", battery: 102 },
        { time: "23/08/2024", battery: 104 },
        { time: "24/08/2024", battery: 106 },
        { time: "25/08/2024", battery: 108 },
      ],
    },
  };

  const handleTimeRangeChange = (sensor, range) => {
    setSensorTimeRanges((prev) => ({ ...prev, [sensor]: range }));
  };

  return (
    <div className="App">
      <div className="graph-container">
        <div className="graph-item">
          <h2>Internet Sensor Graph</h2>
          <div className="button-container">
            {["3h", "24h", "7d", "30d"].map((range) => (
              <button
                key={range}
                className={sensorTimeRanges.internet === range ? "active" : ""}
                onClick={() => handleTimeRangeChange("internet", range)}
              >
                Last {range}
              </button>
            ))}
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={data.internet[sensorTimeRanges.internet]}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="speed"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="graph-item motion-latency">
          <div className="motion-latency-item">
            <h2>Motion Sensor Graph</h2>
            <div className="button-container">
              {["3h", "24h", "7d", "30d"].map((range) => (
                <button
                  key={range}
                  className={sensorTimeRanges.motion === range ? "active" : ""}
                  onClick={() => handleTimeRangeChange("motion", range)}
                >
                  Last {range}
                </button>
              ))}
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={data.motion[sensorTimeRanges.motion]}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="motion"
                  stroke="#82ca9d"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="motion-latency-item">
            <h2>Latency Sensor Graph</h2>
            <div className="button-container">
              {["3h", "24h", "7d", "30d"].map((range) => (
                <button
                  key={range}
                  className={sensorTimeRanges.latency === range ? "active" : ""}
                  onClick={() => handleTimeRangeChange("latency", range)}
                >
                  Last {range}
                </button>
              ))}
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={data.latency[sensorTimeRanges.latency]}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="latency"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="graph-item">
          <h2>Battery Sensor Graph</h2>
          <div className="button-container">
            {["3h", "24h", "7d", "30d"].map((range) => (
              <button
                key={range}
                className={sensorTimeRanges.battery === range ? "active" : ""}
                onClick={() => handleTimeRangeChange("battery", range)}
              >
                Last {range}
              </button>
            ))}
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={data.battery[sensorTimeRanges.battery]}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="battery"
                stroke="#82ca9d"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default App;
