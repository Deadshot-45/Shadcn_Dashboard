// Pages/Dashboard.tsx
// import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
// import { Button } from "@/components/ui/button";
import Cards from "@/components/Cards";
import OutlineList from "@/components/OutlineList";
import GraphUi from "@/components/GraphUi";
import {  useAppSelector } from "@/redux/hooks";
// import { toggleSidebar } from "@/redux/sidebarSlice";
// import { ModeToggle } from "@/components/mode-toggle";

const Dashboard: React.FC = () => {
  // const dispatch = useAppDispatch();
  const isSidebar = useAppSelector((state) => state.sidebar.isOpen);

  const CardList = [
    {
      title: "Total Revenue",
      growth: "+12.5%",
      amount: "$1250.00",
      subHead: "Trending up this month",
      data: "Visitors for the last 6 months",
    },
    {
      title: "New Customers",
      growth: "-20%",
      amount: "1,234",
      subHead: "Down 20% this period",
      data: "Acquisition needs attention",
    },
    {
      title: "Active Accounts",
      growth: "+12.5%",
      amount: "45,678",
      subHead: "Stronger user retention",
      data: "Engagement exceeds targets",
    },
    {
      title: "Growth Rate",
      growth: "+4.5%",
      amount: "4.5%",
      subHead: "Steady performance increase",
      data: "Meets growth projections",
    },
  ];

  return (
    <main className="w-full">
      {/* Main Card + Graph Content Area */}
      <div className="min-h-screen p-2">

        {/* Card Grid */}
        <div className={`${isSidebar ? "p-6 max-md:p-2" : "p-9 max-md:p-2"}`}>
          <div
            className={`grid ${
              isSidebar ? "grid-cols-4 gap-4" : "grid-cols-2 gap-8"
            } max-md:grid-cols-2`}
          >
            {CardList.map((card, index) => (
              <Cards
                key={index}
                title={card.title}
                growth={card.growth}
                amount={card.amount}
                subHead={card.subHead}
                data={card.data}
              />
            ))}
          </div>
        </div>

        {/* Graph Section */}
        <div className="my-8 px-4">
          <GraphUi />
        </div>

        <OutlineList />
      </div>
    </main>
  );
};

export default Dashboard;
