import { Graph, Minimap } from "@antv/g6";

export function createGraph(
  container: HTMLElement,
  miniMapContainer: HTMLDivElement
) {
  const miniMap = new Minimap({
    container: miniMapContainer,
    size: [192, 128],
  });
  const graph = new Graph({
    container,
    modes: {
      default: [
        "drag-canvas",
        // "drag-node",
        "zoom-canvas",
        "click-select",
        {
          type: "create-edge",
          trigger: "drag",
        },
      ],
    },
    layout: { type: "force2", direction: "LR", preventOverlap: true },
    plugins: [miniMap],
  });

  graph.on("node:mouseenter", (evt) => {
    const { item } = evt;
    graph.setItemState(item!, "active", true);
  });

  graph.on("node:mouseleave", (evt) => {
    const { item } = evt;
    graph.setItemState(item!, "active", false);
  });

  graph.on("canvas:click", () => {
    graph.getNodes().forEach((node) => {
      graph.clearItemStates(node);
    });
  });

  graph.render();

  return graph;
}
