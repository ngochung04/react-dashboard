import { extendTheme } from "@chakra-ui/react";

import { globalStyles } from "./globalStyles";
import { colors } from "./colors";

// import component styles
import { buttonStyles } from "./components/button";
import { badgeStyles } from "./components/badge";
import { inputStyles } from "./components/input";
import { progressStyles } from "./components/progress";
import { sliderStyles } from "./components/slider";
import { textareaStyles } from "./components/textarea";
import { switchStyles } from "./components/switch";
import { linkStyles } from "./components/link";

const breakpoints = {
  sm: "320px",
  "2sm": "380px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1600px",
  "3xl": "1920px",
};

export const theme = extendTheme(
  breakpoints,
  globalStyles, // global styles
  colors, //  custom colors
  badgeStyles, // badge styles
  buttonStyles, // button styles
  linkStyles, // link styles
  progressStyles, // progress styles
  sliderStyles, // slider styles
  inputStyles, // input styles
  textareaStyles, // textarea styles
  switchStyles // switch styles
);
