import { Graph, ModelConfig } from "@antv/g6";
import { v4 } from "uuid";
import {
  RECT_MODEL,
  CIRCLE_MODEL,
  DONUT_MODEL,
  ELLIPSE_MODEL,
  CUSTOM_NODE,
} from "./node-templates";
import { NodeType } from "./types";

import "./custom-node";

export const NodeTemplateMap: Record<NodeType, ModelConfig> = {
  [NodeType.CIRCLE]: CIRCLE_MODEL,
  [NodeType.DONUT]: DONUT_MODEL,
  [NodeType.ELLIPSE]: ELLIPSE_MODEL,
  [NodeType.RECT]: RECT_MODEL,
  [NodeType.CUSTOM]: CUSTOM_NODE,
};

interface NodeOptions {
  type: NodeType;
  x: number;
  y: number;
}

export function createNode(graph: Graph, options: NodeOptions) {
  const { type, x, y } = options;

  const node = {
    ...NodeTemplateMap[type],
    x,
    y,
    id: v4(),
  };

  graph.addItem("node", node);
}
