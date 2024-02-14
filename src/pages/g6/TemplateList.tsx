import { FC, DragEvent } from "react";
import { NodeTemplateMap } from "./graph/node";

import "./TemplateList.less";
import { NodeType } from "./graph/node/types";

type TemplateItem = {
  type: NodeType;
  label: string;
};

const TemplateItems: TemplateItem[] = Object.values(NodeTemplateMap).map(
  (item) => {
    return {
      type: item.type,
      label: item.label!,
    } as TemplateItem;
  }
);

const img = new Image();
img.src = "https://avatars.githubusercontent.com/u/45159589?v=4";

const TemplateList: FC = () => {
  const onDragStart = (event: DragEvent, nodeType: NodeType) => {
    event.dataTransfer.setData("text/plain", nodeType);
    event.dataTransfer.setDragImage(img, 0, 0);
  };

  return (
    <div className="tw-w-60 tw-h-full tw-px-4 tw-py-2 tw-shadow-right">
      {TemplateItems.map((item) => (
        <div
          draggable
          key={item.type}
          onDragOver={(e) => e.preventDefault()}
          onDragStart={(e) => onDragStart(e, item.type)}
          className="template-item"
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default TemplateList;
