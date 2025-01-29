import { Action } from "@/interfaces";

export const chageStrokeColor = (
  color: string,
  dispatch: (value: Action) => void
) => {
  const colorMap = {
    Green: "#39FF14",
    Red: "#FF007F",
    Blue: "#00FFFF",
    Orange: "#FF6700",
    Purple: "#8D00FF",
    Yellow: "#FFFF33",
  };

  const newColor = colorMap[color as keyof typeof colorMap];

  dispatch({ type: "SET_SELECTED_STROKE_COLOR", payload: newColor });
};
