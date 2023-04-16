import { buildLegacyTheme } from "sanity";

// This will be used to design the Sanity Studio

const props = {
  "--my-white": "#fff",
  "--my-darkblue": "#1a1a1a",
  "--my-blue": "#0a7cb2",
  "--my-red": "#db4437",
  "--my-yellow": "#f4b400",
  "--my-green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["--my-darkblue"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-darkblue"],
  "--component-text-color": props["--my-white"],

  /* Brand */
  "--brand-primary": props["--my-white"],

  // Default button
  "--default-button-color": "#fff",
  "--default-button-primary-color": props["--my-yellow"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  /* State */
  "--state-info-color": props["--my-blue"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  /* Navbar */
  "--main-navigation-color": props["--my-darkblue"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--my-blue"],
});