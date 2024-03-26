import clsx from "clsx";

type Tag = "a" | "button";

interface BaseProps {
  icon?: React.ReactNode;
  tag: Tag;
  classes?: {
    root?: string;
    item?: string;
    text?: string;
  };
  gap?: string | number;
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
  children,
  ...others
}: Props) {
  const Element = (
    <>
      {icon}
      <span className={clsx("font-bold menu-item__text p-0", classes?.text)}>{children}</span>
    </>
  );

  const className = [
    "flex flex-row items-center menu-item__link hover:text-baseColor transition duration-300",
    {
      "p-2 rounded-[100%] hover:bg-highlighting": !children,
      "py-3": children,
    },
    classes?.item,
  ];

  return (
    <li className={clsx(["text-menuItem", classes?.root])}>
      {Tag === "a" ? (
        <a
          className={clsx(className)}
          {...(others as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {Element}
        </a>
      ) : (
        <button
          className={clsx(className)}
          {...(others as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {Element}
        </button>
      )}
    </li>
  );
}
