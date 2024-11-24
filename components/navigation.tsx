"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const { setTheme, theme } = useTheme();

  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-14 items-center justify-between">
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <a href="#home" className="transition-colors hover:text-foreground/80">
            Home
          </a>
          <a href="#projects" className="transition-colors hover:text-foreground/80">
            Projects
          </a>
          <a href="#expertise" className="transition-colors hover:text-foreground/80">
            Expertise
          </a>
          <a href="#growth" className="transition-colors hover:text-foreground/80">
            Growth
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground/80">
            Contact
          </a>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  );
}