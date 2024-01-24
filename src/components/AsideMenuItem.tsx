import clsx from "clsx";
import type React from "react";

type Tag = "a" | "button";

interface BaseProps {
  tag: Tag;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  classes?: {
    root?: string;
    item?: string;
  };
  gap?: string | number;
  component?: React.ReactNode;
}

interface AnchorProps
  extends BaseProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag: "a";
  href: React.AnchorHTMLAttributes<HTMLAnchorElement>["href"];
}

interface ButtonProps
  extends BaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  tag: "button";
}

type Props = AnchorProps | ButtonProps;

export default function AsideMenuItem({
  icon,
  tag: Tag,
  classes,
  iconPosition = "left",
  component,
  children,
  ...others
}: Props) {
  const Element = (
    <>
      {icon}
      <span className="font-bold menu-item__text">{children}</span>
    </>
  );

  const className = clsx([
    "flex items-center menu-item__link hover:text-baseColor transition duration-300",
    {
      "p-2 rounded-[100%] hover:bg-highlighting": !children,
      "py-3": children,
      "flex-row": iconPosition === "left",
      "flex-row-reverse": iconPosition === "right",
    },
    classes?.item,
  ]);

  return (
    <li className={clsx(["text-menuItem", classes?.root])}>
      {component}
      {Tag === "a" ? (
        <a
          className={className}
          {...(others as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {Element}
        </a>
      ) : (
        <button
          className={className}
          {...(others as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {Element}
        </button>
      )}
    </li>
  );
}
