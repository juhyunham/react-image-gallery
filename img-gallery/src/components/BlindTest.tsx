import { ReactNode } from "react";

interface BlindTextProps {
  tag: keyof JSX.IntrinsicElements;
  children: ReactNode;
}

const BlindText = ({ tag, children }: BlindTextProps) => {
  const Tag = tag;

  return <Tag className="blind">{children}</Tag>;
};

export default BlindText;
