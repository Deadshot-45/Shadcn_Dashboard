import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartNoAxesColumn, HandCoinsIcon, ShellIcon } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

const lineData = [
  { month: "Jan", value: 400 },
  { month: "Feb", value: 520 },
  { month: "Mar", value: 480 },
  { month: "Apr", value: 610 },
  { month: "May", value: 700 },
  { month: "Jun", value: 650 },
];

const barData = [
  { name: "Project A", revenue: 1200 },
  { name: "Project B", revenue: 800 },
  { name: "Project C", revenue: 1500 },
  { name: "Project D", revenue: 600 },
];

const Analytics = () => {
  return (
    <div className="w-full h-full p-2 md:p-4 space-y-6">
      {/* Page Header */}
      <h1 className="text-2xl font-bold">Analytics Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex gap-1 items-center">
              <HandCoinsIcon className="w-4 h-min mr-1 inline-block text-green-500" />
              <span>Revenue</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">$24,500</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex gap-1 items-center">
              <div className="w-3 h-3 rounded-full border-3 border-green-500" />{" "}
              <span>Active Users</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">8,932</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex gap-1 items-center">
              <ShellIcon className="w-4 h-4 mr-1 inline-block text-blue-500" />
              <span>Sessions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">19,320</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex gap-1 items-center">
              <ChartNoAxesColumn className="w-4 h-4 mr-1 inline-block text-purple-500" />
              <span>Growth Rate</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-green-600">+12.4%</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72 w-full">
              <ResponsiveContainer
                width="100%"
                height="100%"
                minHeight={0}
                minWidth={0}
              >
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Bar Chart */}
        <Card className="p-4">
          <CardHeader>
            <CardTitle>Project Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72 w-full">
              <ResponsiveContainer
                width="100%"
                height="100%"
                minHeight={0}
                minWidth={0}
              >
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
