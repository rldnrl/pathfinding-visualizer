import { useState } from "react";
import Node from "./Node";
import "./PathfindingVisualizer.css";

export default function PathfindingVisualizer() {
  const [nodes, setNodes] = useState<{ row: number; col: number }[][]>(
    Array.from({ length: 20 }, (_, row) =>
      Array.from({ length: 50 }).map((_, col) => ({ row, col }))
    )
  );

  return (
    <div className="grid">
      {nodes.map((row, indexOfRow) => (
        <div className="rows" key={indexOfRow}>
          {row.map((node, indexOfNode) => (
            <Node key={indexOfNode} isStart />
          ))}
        </div>
      ))}
    </div>
  );
}
