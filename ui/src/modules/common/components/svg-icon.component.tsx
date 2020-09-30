import React from "react";

export const SvgIconTypes = {
  STAR: "star",
  DOTS_HORIZONTAL: "dots-horizontal",
  CHECK: "check",
};

interface ISvgIconProps {
  iconName: string;
  className?: string;
}

/**
 * React component which returns various SVG icons as needed
 *
 * @param props
 */
const SvgIcon = (props: ISvgIconProps) => {
  const { iconName, className } = props;
  const classes = className ? className : "";

  return getSvgIcon(iconName, classes);
};

/**
 * Get the HTML for an SVG icon
 *
 * @param name
 * @param className
 */
const getSvgIcon = (name: string, className: string) => {
  switch (name) {
    case SvgIconTypes.STAR:
      return (
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`star ${className}`}
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 
        2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 
        1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          ></path>
        </svg>
      );

    case SvgIconTypes.DOTS_HORIZONTAL:
      return (
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`dots-horizontal ${className}`}
        >
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
        </svg>
      );

    case SvgIconTypes.CHECK:
      return (
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`check ${className}`}
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      );

    default:
      return (
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`question-mark-circle ${className}`}
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 
            3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
            clip-rule="evenodd"
          ></path>
        </svg>
      );
  }
};

export default SvgIcon;
