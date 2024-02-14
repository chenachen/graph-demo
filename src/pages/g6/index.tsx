import { useEffect, useRef, DragEvent, createContext } from "react";
import type { FC, MutableRefObject } from "react";

import TemplateList from "./TemplateList";
import { Graph } from "@antv/g6";
import { createGraph } from "./graph/initialization";
import { createNode } from "./graph/node";
import { NodeType } from "./graph/node/types";

const { Provider } = createContext<null | MutableRefObject<Graph | undefined>>(
  null
);

const GraphDemo: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const miniMapRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<Graph>();

  useEffect(() => {
    if (graphRef.current || !containerRef.current || !miniMapRef.current)
      return;

    const graph = createGraph(containerRef.current, miniMapRef.current);

    graphRef.current = graph;
  }, []);

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    const nodeType = e.dataTransfer.getData("text/plain") as NodeType;
    const { x, y } = (graphRef.current as Graph).getPointByClient(
      e.clientX,
      e.clientY
    );
    createNode(graphRef.current as Graph, {
      type: nodeType,
      x,
      y,
    });
  };

  return (
    <Provider value={graphRef}>
      <div className="tw-flex tw-h-full tw-relative">
        <TemplateList />
        <div
          className="tw-flex-1 tw-min-w-0"
          onDrop={(e) => onDrop(e)}
          ref={containerRef}
        ></div>
        <div
          ref={miniMapRef}
          className="tw-absolute tw-w-48 tw-h-32 tw-right-4 tw-bottom-4 tw-shadow-border"
        ></div>
      </div>
    </Provider>
  );
};

export default GraphDemo;
