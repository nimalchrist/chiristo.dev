export type MenuTogglerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isOpen: boolean;
  onClick: () => void;
};
