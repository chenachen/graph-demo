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
        linkPoints: {
          top: true,
          right: true,
          bottom: true,
          left: true,
        },
      },
    });

    group.addShape("circle", {
      name: "top-link-point",
      attrs: {
        x: width / 2,
        y: 0,
        r: 4,
        stroke: "black",
      },
    });

    group.addShape("circle", {
      name: "left-link-point",
      attrs: {
        x: 0,
        y: height / 2,
        r: 4,
        stroke: "black",
      },
    });

    group.addShape("circle", {
      name: "custom-circle",
      attrs: {
        x: width,
        y: height / 2,
        r: 4,
        stroke: "black",
      },
    });

    group.addShape("circle", {
      name: "custom-circle",
      attrs: {
        x: width / 2,
        y: height,
        r: 4,
        stroke: "black",
      },
    });

    // todo：添加create-edge行为

    group.addShape("image", {
      attrs: {
        x: width / 2 - 15,
        y: 40,
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
