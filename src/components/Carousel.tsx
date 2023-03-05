import { Carousel as MantineCarousel } from "@mantine/carousel";
import { Image, rem, getStylesRef } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

interface Carousel {
  imageUrls: string[];
}

export function Carousel({ imageUrls }: Carousel) {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  return (
    <MantineCarousel
      maw={500}
      mx="auto"
      withIndicators
      styles={{
        indicator: {
          display: "none",
        },
        controls: {
          ref: getStylesRef("controls"),
          transition: "opacity 150ms ease",
          opacity: 0,
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
        root: {
          "&:hover": {
            [`& .${getStylesRef("controls")}`]: {
              opacity: 1,
            },
          },
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
