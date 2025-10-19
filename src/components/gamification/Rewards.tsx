import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GiftIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Reward {
  id: string;
  name: string;
  points: number;
  redeemed: boolean;
}

const mockRewards: Reward[] = [
  { id: "1", name: "Exclusive Avatar", points: 500, redeemed: false },
  { id: "2", name: "Course Discount", points: 1000, redeemed: false },
  { id: "3", name: "Certificate Boost", points: 750, redeemed: true },
];

const Rewards: React.FC = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Rewards</CardTitle>
        <GiftIcon className="h-4 w-4 text-green-500" />
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {mockRewards.map((reward) => (
            <li key={reward.id} className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-medium">{reward.name}</span>
                <span className="text-xs text-muted-foreground">{reward.points} points</span>
              </div>
              <Badge variant={reward.redeemed ? "secondary" : "default"}>
                {reward.redeemed ? "Redeemed" : "Available"}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Rewards;