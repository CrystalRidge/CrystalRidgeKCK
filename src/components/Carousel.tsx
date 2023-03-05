import { Carousel as MantineCarousel } from "@mantine/carousel";
import { Image, rem } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

interface Carousel {
  imageUrls: string[];
}

export function Carousel({ imageUrls }: Carousel) {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <MantineCarousel
      maw={500}
      mx="auto"
      withIndicators
      styles={{
        indicator: {
          width: rem(12),
          height: rem(4),
          transition: "width 250ms ease",

          "&[data-active]": {
            width: rem(40),
          },
        },
        control: {
          width: rem(4),
          "&[data-inactive]": {
            opacity: 0,
            cursor: "default",
          },
        },
        slide: {
          alignSelf: "center",
        },
        viewport: {
          backgroundColor: "black",
        },
      }}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      loop
    >
      {imageUrls.map((url) => (
        <MantineCarousel.Slide key={url}>
          <Image src={url} />
        </MantineCarousel.Slide>
      ))}
    </MantineCarousel>
  );
}
