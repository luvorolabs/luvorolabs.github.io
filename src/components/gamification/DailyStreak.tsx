import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FlameIcon } from "lucide-react";

const DailyStreak: React.FC = () => {
  const currentStreak = 7; // Placeholder data
  const longestStreak = 15; // Placeholder data

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Daily Streak</CardTitle>
        <FlameIcon className="h-4 w-4 text-orange-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{currentStreak} Days</div>
        <p className="text-xs text-muted-foreground">
          Your longest streak is {longestStreak} days!
        </p>
      </CardContent>
    </Card>
  );
};

export default DailyStreak;