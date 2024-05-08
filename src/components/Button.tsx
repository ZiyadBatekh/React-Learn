import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  color?: "primary" | "secondary" | "warning";
}

const button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default button;
