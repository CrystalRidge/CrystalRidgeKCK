import { Carousel } from "@mantine/carousel";
import { Image, rem } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function (imageUrls: string[]) {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      maw={320}
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
        <Carousel.Slide key={url}>
          <Image src={url} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
