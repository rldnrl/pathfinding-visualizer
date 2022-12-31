import "./Node.css";

interface NodeProps {
  isStart: boolean;
}

export default function Node({ isStart }: NodeProps) {
  return <div className="node"></div>;
}
