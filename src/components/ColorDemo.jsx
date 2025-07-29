import React from "react";
import { useTheme } from "./ThemeProvider";

const ColorDemo = () => {
  const { accent } = useTheme();

  const colorShades = [
    { name: "50", class: "bg-primary-50 text-primary-900" },
    { name: "100", class: "bg-primary-100 text-primary-900" },
    { name: "200", class: "bg-primary-200 text-primary-900" },
    { name: "300", class: "bg-primary-300 text-primary-900" },
    { name: "400", class: "bg-primary-400 text-primary-50" },
    { name: "500", class: "bg-primary-500 text-primary-50" },
    { name: "600", class: "bg-primary-600 text-primary-50" },
    { name: "700", class: "bg-primary-700 text-primary-50" },
    { name: "800", class: "bg-primary-800 text-primary-50" },
    { name: "900", class: "bg-primary-900 text-primary-50" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Tonal Color System Demo -{" "}
        <span className="text-primary-600 capitalize">{accent}</span>
      </h2>

      {/* Color Palette */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4 text-primary-700">
          Color Palette
        </h3>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
          {colorShades.map((shade) => (
            <div
              key={shade.name}
              className={`${shade.class} p-4 rounded-lg text-center font-medium text-sm`}
            >
              {shade.name}
            </div>
          ))}
        </div>
      </div>

      {/* Component Examples */}
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary-700">
            Button Variations
          </h3>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">Primary Button</button>
            <button className="btn-secondary">Secondary Button</button>
            <button className="bg-primary-100 hover:bg-primary-200 text-primary-700 px-4 py-2 rounded-lg transition-colors">
              Subtle Button
            </button>
            <button className="bg-gradient-primary text-primary-50 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Gradient Button
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary-700">
            Card Examples
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-primary-800 mb-2">
                Light Card
              </h4>
              <p className="text-primary-600">
                This card uses light tonal colors for a subtle appearance.
              </p>
            </div>
            <div className="bg-gradient-primary-subtle border border-primary-300 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-primary-800 mb-2">
                Gradient Card
              </h4>
              <p className="text-primary-700">
                This card uses a subtle gradient background.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary-700">
            Alert Examples
          </h3>
          <div className="space-y-4">
            <div className="bg-primary-100 border-l-4 border-primary-500 p-4 rounded-r-lg">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-primary-800">
                    <strong className="font-medium">Info:</strong> This is an
                    informational alert using tonal colors.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
              <p className="text-primary/80">
                This alert uses opacity variations for a more subtle look.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary-700">
            Badge Examples
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
              Light Badge
            </span>
            <span className="bg-primary-200 text-primary-900 px-3 py-1 rounded-full text-sm font-medium">
              Medium Badge
            </span>
            <span className="bg-primary-600 text-primary-50 px-3 py-1 rounded-full text-sm font-medium">
              Dark Badge
            </span>
            <span className="bg-primary/20 text-primary/80 px-3 py-1 rounded-full text-sm font-medium">
              Opacity Badge
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary-700">
            Progress Bar
          </h3>
          <div className="bg-primary-100 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-primary h-full rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
          <p className="text-sm text-primary-600 mt-2">75% Complete</p>
        </div>
      </div>
    </div>
  );
};

export default ColorDemo;
