import React from "react";
import DailyStreak from "@/components/gamification/DailyStreak";
import Leaderboard from "@/components/gamification/Leaderboard";
import Rewards from "@/components/gamification/Rewards";
import { MadeWithDyad } from "@/components/made-with-dyad";

const HomePage: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Welcome to EduQuest!</h1>
      <p className="text-lg text-muted-foreground">
        Your journey to mastering AP STEM courses starts here.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DailyStreak />
        <Leaderboard />
        <Rewards />
      </div>

      {/* Add more sections for courses, progress, etc. here */}
      <div className="mt-12">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default HomePage;