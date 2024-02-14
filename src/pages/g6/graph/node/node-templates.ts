import { ModelConfig } from "@antv/g6";
import { NodeType } from "./types";

export const CIRCLE_MODEL: ModelConfig = {
  type: NodeType.CIRCLE,
  size: [60],
  label: "圆形",
  labelCfg: {
    position: "bottom",
  },
  style: {
    cursor: "pointer",
  },
  linkPoints: {
    top: true,
    right: true,
    bottom: true,
    left: true,
  },
  icon: {
    show: true,
  },
};

export const DONUT_MODEL: ModelConfig = {
  type: NodeType.DONUT,
  size: 60,
  label: "甜甜圈",
  labelCfg: {
    position: "bottom",
  },
  style: {
    cursor: "pointer",
  },
  linkPoints: {
    top: true,
    right: true,
    bottom: true,
    left: true,
  },
  donutAttrs: {
    prop1: 10,
    prop2: 20,
    prop3: 25,
  },
  // the color map for drawing donut
  donutColorMap: {
    prop1: "#8eaade",
    prop2: "#5c7cb8",
    prop3: "#1e3f7d",
  },
  icon: {
    show: true,
  },
};

export const ELLIPSE_MODEL: ModelConfig = {
  type: NodeType.ELLIPSE,
  size: [80, 50],
  label: "椭圆",
  labelCfg: {
    position: "bottom",
  },
  style: {
    cursor: "pointer",
  },
  linkPoints: {
    top: true,
    right: true,
    bottom: true,
    left: true,
  },
  icon: {
    show: true,
  },
};

export const RECT_MODEL: ModelConfig = {
  type: NodeType.RECT,
  size: [80, 50],
  label: "矩形",
  labelCfg: {
    position: "center",
  },
  style: {
    cursor: "pointer",
  },
  linkPoints: {
    top: true,
    right: true,
    bottom: true,
    left: true,
  },
  icon: {
    show: true,
  },
};

export const CUSTOM_NODE: ModelConfig = {
  type: NodeType.CUSTOM,
  label: "自定义节点",
  size: [100, 80],
  linkPoints: {
    top: true,
    right: true,
    bottom: true,
    left: true,
  },
};
