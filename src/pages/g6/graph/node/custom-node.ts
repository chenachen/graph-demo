import { ModelConfig, registerNode } from "@antv/g6";
import { NodeType } from "./types";
import isNumber from "lodash-es/isNumber";

function formatSize(size: ModelConfig["size"], defaultValue: number[]) {
  return Array.isArray(size)
    ? size
    : isNumber(size)
    ? [size, size]
    : defaultValue;
}

const img = "https://avatars.githubusercontent.com/u/45159589?v=4";

registerNode(NodeType.CUSTOM, {
  draw(cfg, group) {
    const { size, label } = cfg;

    const [width, height] = formatSize(size, [50, 30]);

    const keyShape = group.addShape("rect", {
      name: "custom-rect",
      attrs: {
        width,
        height,
        stroke: "black",
        radius: [2, 4],
      },
    });

    group.addShape("circle", {
      name: "custom-circle",
      attrs: {
        x: 50,
        y: 70,
        r: 10,
        stroke: "black",
      },
    });

    group.addShape("marker", {
      attrs: {
        x: 50,
        y: 50,
        r: 10,
        stroke: "black",
        symbol: "triangle-down",
      },
      name: "marker-shape",
    });

    group.addShape("image", {
      attrs: {
        x: 0,
        y: 0,
        width: 30,
        height: 30,
        img,
      },
      // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
      name: "image-shape",
    });

    if (label) {
      group.addShape("text", {
        name: "costom-text",
        attrs: {
          x: 50, // 居中
          y: 20,
          textAlign: "center",
          textBaseline: "middle",
          text: cfg.label,
          fill: "#666",
        },
      });
    }

    return keyShape;
  },
  getAnchorPoints(cfg) {
    console.log(cfg?.anchorPoints);
    return (
      cfg?.anchorPoints ?? [
        [0, 0.5], // 左侧中间
        [1, 0.5], // 右侧中间
        [0.5, 0],
        [0.5, 1],
      ]
    );
  },
});
