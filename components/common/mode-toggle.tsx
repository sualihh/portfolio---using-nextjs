"use client";

import { useTheme } from "next-themes";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const themes = [
  { name: "light", label: "Light", icon: Icons.sun },
  { name: "dark", label: "Dark", icon: Icons.moon },
  { name: "retro", label: "Retro", icon: Icons.retro },
  { name: "cyberpunk", label: "Cyberpunk", icon: Icons.cyberpunk },
  { name: "paper", label: "Paper", icon: Icons.paper },
  { name: "aurora", label: "Aurora", icon: Icons.aurora },
  { name: "synthwave", label: "Synthwave", icon: Icons.synthwave },
  { name: "system", label: "System", icon: Icons.laptop },
];

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-xl bg-background/80"
          aria-label="Choose color theme"
          title="Choose color theme"
        >
          <Icons.retro className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40">
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={setTheme}
        >
          {themes.map((item, index) => (
            <React.Fragment key={item.name}>
              {index === 2 || index === themes.length - 1 ? (
                <DropdownMenuSeparator />
              ) : null}
              <DropdownMenuRadioItem value={item.name}>
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.label}</span>
              </DropdownMenuRadioItem>
            </React.Fragment>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
