"use client";

import Image from "next/image";

import { Carousel } from "@material-tailwind/react";

export function HeroSection() {
  return (
    <section>
      <Carousel transition={{ duration: 1 }} autoplay loop className="h-80">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src="/abobora.png"
          alt="image 1"
          className="h-full w-full object-scale-down"
        />
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src="/iphone.png"
          alt="image 2"
          className="h-full w-full object-scale-down"
        />
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-scale-down"
        />
      </Carousel>
    </section>
  );
}
