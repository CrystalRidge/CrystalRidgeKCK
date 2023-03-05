import { Carousel as MantineCarousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

interface Carousel {
  imageUrls: string[];
}

export function Carousel({ imageUrls }: Carousel) {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <div className="disable-pico">
      <MantineCarousel
        maw={320}
        mx="auto"
        withIndicators
        styles={{
          indicator: {
            width: "12rem",
            height: "4rem",
            transition: "width 250ms ease",

            "&[data-active]": {
              width: "rem40",
            },
          },
          control: {
            "&[data-inactive]": {
              opacity: 0,
              cursor: "default",
            },
          },
        }}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {imageUrls.map((url) => (
          <MantineCarousel.Slide key={url}>
            <Image src={url} />
          </MantineCarousel.Slide>
        ))}
      </MantineCarousel>
    </div>
  );
}
