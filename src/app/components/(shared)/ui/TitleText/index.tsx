"use client";

import { ComponentPropsWithoutRef, createElement, FC } from "react";

type Props = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & ComponentPropsWithoutRef<"h1">;

const TitleText: FC<Props> = ({ tag, children, ...other }) => {
  return createElement(tag, other, children);
};

export default TitleText;
