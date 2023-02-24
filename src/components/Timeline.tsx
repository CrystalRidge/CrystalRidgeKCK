import { Timeline as MantineTimeline } from "@mantine/core";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface TimelineProps {
  items: { title: string; content: string }[];
}

export function Timeline({ items }: TimelineProps) {
  const [isClientLoaded, setIsClientLoaded] = useState<boolean>(false);

  useEffect(() => setIsClientLoaded(true));

  return (
    <div className={clsx(!isClientLoaded && "hidden")}>
      <MantineTimeline active={2}>
        {items.map(({ title, content }) => (
          <MantineTimeline.Item key={title} title={title}>
            {content}
          </MantineTimeline.Item>
        ))}
      </MantineTimeline>
    </div>
  );
}
