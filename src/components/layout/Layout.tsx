import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RocketIcon, TrophyIcon, GiftIcon } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full border-b bg-card">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <RocketIcon className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">EduQuest</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/courses">Courses</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/profile">Profile</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-8">{children}</main>
      <footer className="border-t bg-card py-4 text-center text-sm text-muted-foreground">
        © 2024 EduQuest. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;