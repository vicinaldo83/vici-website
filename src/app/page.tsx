'use client';
import "@/styles/main.css"
import "@/styles/utility/flexbox.css"
import "@/styles/utility/animations.css"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"

import IconSVG from "./svg"

gsap.registerPlugin(MorphSVGPlugin);

export function AnimateBubble(classname: string) {
  let randDuration = function () {
    return Math.random() * 3 + 1
  }
  let randTransform = function () {
    return (Math.random() * 2 - 1) * 20 + 4
  }

  gsap.to(classname, {
    duration: randDuration,
    translateY: randTransform,
    ease: "power1.out",
    repeat: Infinity,
    yoyo: true,
  })
}

export default function Page() {
  useGSAP(() => {
    AnimateBubble(".bubble-1");
    AnimateBubble(".bubble-2");
    AnimateBubble(".bubble-3");
  });

  return <div className="fullscreen flexbox center center-text column">
    {IconSVG()}
    <h1>Esse site ainda astá cozinhando!</h1>
    <h2>Volte em breve...</h2>
  </div>
}