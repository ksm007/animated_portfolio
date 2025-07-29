import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { Sun, Moon, Laptop, Palette, Check } from "lucide-react";

const colorPalettes = [
  {
    name: "Neutral",
    value: "neutral",
    colors: ["#737373", "#525252", "#404040"],
  },
  {
    name: "Red",
    value: "red",
    colors: ["#ef4444", "#dc2626", "#b91c1c"],
  },
  {
    name: "Rose",
    value: "rose",
    colors: ["#f43f5e", "#e11d48", "#be123c"],
  },
  {
    name: "Orange",
    value: "orange",
    colors: ["#f97316", "#ea580c", "#c2410c"],
  },
  {
    name: "Green",
    value: "green",
    colors: ["#22c55e", "#16a34a", "#15803d"],
  },
  {
    name: "Blue",
    value: "blue",
    colors: ["#3b82f6", "#2563eb", "#1d4ed8"],
  },
  {
    name: "Yellow",
    value: "yellow",
    colors: ["#eab308", "#ca8a04", "#a16207"],
  },
  {
    name: "Violet",
    value: "violet",
    colors: ["#8b5cf6", "#7c3aed", "#6d28d9"],
  },
];

const themes = [
  { name: "Light", value: "light", icon: Sun },
  { name: "Dark", value: "dark", icon: Moon },
  { name: "System", value: "system", icon: Laptop },
];

export function ThemeSwitcher() {
  const { theme, setTheme, accent, setAccent } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change theme and colors</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {themes.map((t) => {
          const IconComponent = t.icon;
          return (
            <DropdownMenuItem
              key={t.value}
              onClick={() => setTheme(t.value)}
              className="flex items-center justify-between"
            >
              <div className="flex items-center">
                <IconComponent className="mr-2 h-4 w-4" />
                <span>{t.name}</span>
              </div>
              {theme === t.value && <Check className="h-4 w-4" />}
            </DropdownMenuItem>
          );
        })}

        <DropdownMenuSeparator />
        <DropdownMenuLabel>Color Palette</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <div className="grid grid-cols-2 gap-1 p-1">
          {colorPalettes.map((palette) => (
            <DropdownMenuItem
              key={palette.value}
              onClick={() => setAccent(palette.value)}
              className={`flex items-center justify-between p-2 ${
                accent === palette.value ? "bg-accent" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {palette.colors.map((color, index) => (
                    <div
                      key={index}
                      className="h-3 w-3 rounded-full border border-border"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span className="text-sm">{palette.name}</span>
              </div>
              {accent === palette.value && <Check className="h-3 w-3" />}
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
