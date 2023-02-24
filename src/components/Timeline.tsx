import { Timeline as MantineTimeline } from "@mantine/core";

interface TimelineProps {
  items: { title: string; children?: React.ReactNode }[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <MantineTimeline active={2}>
      {items.map(({ title, children }) => (
        <MantineTimeline.Item title={title}>{children}</MantineTimeline.Item>
      ))}
    </MantineTimeline>
  );
}
