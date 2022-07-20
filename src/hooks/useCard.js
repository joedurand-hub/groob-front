import { useState } from "react";

export const useCard = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);
  const openCard = () => setIsOpen(true);
  const closeCard = () => setIsOpen(false);

  return [isOpen, openCard, closeCard];
};