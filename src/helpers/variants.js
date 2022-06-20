export const variantToStyles = (...classNames) => {
  return classNames
    .filter((className) => typeof className == "string")
    .join(" ");
};
