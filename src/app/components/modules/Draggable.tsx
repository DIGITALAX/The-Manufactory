import Image from "next/legacy/image";
import { FunctionComponent, useState } from "react";
import {
  DndContext,
  PointerSensor,
  TouchSensor,
  useDraggable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { INFURA_GATEWAY } from "@/app/lib/constants";

export default function Draggable() {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { distance: 5 } })
  );

  return (
    <DndContext
      onDragEnd={(event) => {
        if (event.delta) {
          setPosition((prev) => ({
            x: prev.x + event.delta.x,
            y: prev.y + event.delta.y,
          }));
        }
      }}
      sensors={sensors}
    >
      <DraggableImage position={position} />
    </DndContext>
  );
}

const DraggableImage: FunctionComponent<{
  position: { x: number; y: number };
}> = ({ position }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable-image",
  });
  const finalTransform = transform
    ? `translate3d(${position.x + transform.x}px, ${
        position.y + transform.y
      }px, 0)`
    : `translate3d(${position.x}px, ${position.y}px, 0)`;
  return (
    <div
      className="absolute antes:bottom-5 xl:bottom-28 right-20 sm:right-44 antes:right-32 z-10 h-24 w-24 sm:w-36 sm:h-36 antes:w-48 antes:h-48 cursor-grab active:cursor-grabbing"
      ref={setNodeRef}
      style={{ transform: finalTransform }}
      {...listeners}
      {...attributes}
    >
      <Image
        src={`${INFURA_GATEWAY}/QmPrSncWAC4nHqhj96QtPxUE9xUMyNxxKtFJAbCj5eVjXy`}
        layout="fill"
        objectFit="cover"
        draggable={false}
        priority
      />
    </div>
  );
};
