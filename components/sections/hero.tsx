"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function HeroSection() {
  const words = [
    {
      text: "Building",
    },
    {
      text: "exceptional",
    },
    {
      text: "digital",
    },
    {
      text: "experiences.",
      className: "text-blue-500 dark:text-blue-400",
    },
  ];

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8 max-w-4xl"
      >
        <Avatar className="w-32 h-32 mx-auto mb-8 ring-2 ring-primary/10 transition-transform hover:scale-105">
          <AvatarImage src="https://github.com/yourusername.png" alt="Profile" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <TypewriterEffect words={words} />
          </h1>
          <p className="text-xl text-muted-foreground">
            Senior Full-Stack Developer crafting high-performance web applications
            with modern technologies.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Button variant="outline" size="lg">
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </Button>
          <Button variant="outline" size="lg">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button variant="outline" size="lg">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </div>
      </motion.div>
    </section>
  );
}