import { useState } from "react";
import { Button, Input, Switch } from "antd";
import Card from "../Components/Card/Card";
interface DashboardProps {
  initialDarkMode?: boolean;
}
const Dashboard = ({ initialDarkMode }: DashboardProps) => {
  const [darkMode, setDarkMode] = useState(initialDarkMode);
  return (
    // This is toggle for dark and white mode
    <>
      <div
        className={`${
          darkMode ? "bg-black " : "bg-white"
        } min-h-screen w-full flex flex-col p-4`}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            <Input placeholder="Search" className="w-[400px] h-[32px]" />
            <Button>Search</Button>
          </div>
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="p-3 rounded-xl"
          />
        </div>

        {/* // This is toggle for dark and white mode */}
        <div>
          <Card
            icon={undefined}
            label={""}
            temperature={0}
            weatherCondition={""}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            border={""}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
