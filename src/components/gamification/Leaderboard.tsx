import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ListOrderedIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  avatarUrl?: string;
}

const mockLeaderboard: LeaderboardEntry[] = [
  { id: "1", name: "Alice", score: 1250, avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Alice" },
  { id: "2", name: "Bob", score: 1180, avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Bob" },
  { id: "3", name: "Charlie", score: 1020, avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Charlie" },
  { id: "4", name: "Diana", score: 950, avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Diana" },
  { id: "5", name: "Eve", score: 880, avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=Eve" },
];

const Leaderboard: React.FC = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Leaderboard</CardTitle>
        <ListOrderedIcon className="h-4 w-4 text-blue-500" />
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {mockLeaderboard.map((user, index) => (
            <li key={user.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="font-semibold text-muted-foreground w-4">{index + 1}.</span>
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatarUrl} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{user.name}</span>
              </div>
              <span className="text-sm text-muted-foreground">{user.score} pts</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;