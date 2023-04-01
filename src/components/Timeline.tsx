import { Timeline as MantineTimeline } from "@mantine/core";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface TimelineProps {
  items: {
    date: string;
    title: string;
    description?: string;
    inProgress?: boolean;
  }[];
}

export function Timeline({ items }: TimelineProps) {
  const [isClientLoaded, setIsClientLoaded] = useState<boolean>(false);

  useEffect(() => setIsClientLoaded(true));

  return (
    <div className={clsx(!isClientLoaded && "hidden")}>
      <MantineTimeline
        active={items.filter(({ inProgress }) => !inProgress).length - 1}
      >
        {items.map(({ date, title, description }) => (
          <MantineTimeline.Item title={title} className="text-lg" key={title}>
            <div className="flex flex-col text-sm">
              {description && <div className="max-w-xl">{description}</div>}
              <i className="font-light">{date}</i>
            </div>
          </MantineTimeline.Item>
        ))}
      </MantineTimeline>
    </div>
  );
}
