import { useState } from "react";

export const useTogel = () => {
  const [isToggle, setIsToggle] = useState(false);
  const toggle = () => setIsToggle(!isToggle);
  return [isToggle, toggle];
}