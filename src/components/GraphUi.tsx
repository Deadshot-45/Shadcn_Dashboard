import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Button } from "@/components/ui/button";

// --------------------------
// 📌 All Data (3 Months)
// --------------------------
const fullData = [
  { date: "Apr 5", Mobile: 2400, Desktop: 1900 },
  { date: "Apr 12", Mobile: 2210, Desktop: 1945 },
  { date: "Apr 19", Mobile: 2290, Desktop: 2050 },
  { date: "Apr 26", Mobile: 2000, Desktop: 2100 },
  { date: "May 3", Mobile: 2181, Desktop: 2200 },
  { date: "May 10", Mobile: 2100, Desktop: 2000 },
  { date: "May 18", Mobile: 2600, Desktop: 2300 },
  { date: "May 26", Mobile: 2300, Desktop: 1950 },
  { date: "Jun 2", Mobile: 2200, Desktop: 2100 },
  { date: "Jun 8", Mobile: 2400, Desktop: 2000 },
  { date: "Jun 15", Mobile: 2250, Desktop: 2150 },
  { date: "Jun 22", Mobile: 2500, Desktop: 2200 },
];

export default function GraphUi() {
  const [activeFilter, setActiveFilter] = useState("3months");

  // --------------------------
  // 📌 Filter logic
  // --------------------------
  const getFilteredData = () => {
    if (activeFilter === "7days") {
      return fullData.slice(-7); // last 7 entries
    }
    if (activeFilter === "30days") {
      return fullData.slice(-10); // approx last 30 days
    }
    return fullData; // 3 months
  };

  const chartData = getFilteredData();

  return (
    <div className="rounded-2xl border border-zinc-300/70 bg-background p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Total Visitors</h2>
        <p className="text-sm font-normal">
          {activeFilter === "3months"
            ? "Last 3 months"
            : activeFilter === "30days"
            ? "Last 30 days"
            : "Last 7 days"}
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-end gap-2 mb-6">
        <Button
          variant={activeFilter === "3months" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveFilter("3months")}
        >
          Last 3 months
        </Button>
        <Button
          variant={activeFilter === "30days" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveFilter("30days")}
        >
          Last 30 days
        </Button>
        <Button
          variant={activeFilter === "7days" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveFilter("7days")}
        >
          Last 7 days
        </Button>
      </div>

      {/* Chart */}
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="mobileColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6b7280" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#6b7280" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="desktopColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9ca3af" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#9ca3af" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" stroke="#9ca3af" />
            <YAxis hide />

            <Tooltip
              wrapperStyle={{ fontSize: "12px" }}
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                padding: "6px 8px",
              }}
            />

            <Area
              type="monotone"
              dataKey="Mobile"
              stroke="#6b7280"
              strokeWidth={2}
              fill="url(#mobileColor)"
              isAnimationActive
            />

            <Area
              type="monotone"
              dataKey="Desktop"
              stroke="#9ca3af"
              strokeWidth={2}
              fill="url(#desktopColor)"
              isAnimationActive
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
