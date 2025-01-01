"use client";

import "dayjs/locale/de";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren;

const AppProvider: FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default AppProvider;
