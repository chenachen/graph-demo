import { registerBehavior, IG6GraphEvent } from "@antv/g6";

registerBehavior("drag-add-edge", {
  getEvents() {
    return {
      "node:dragstart": "onDragStart",
      mousemove: "onMouseMove",
      mouseup: "onMouseUp",
    };
  },
  onDragStart(e: IG6GraphEvent) {
    console.log(e);
  },
});
