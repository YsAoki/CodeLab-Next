"use client";

import "dayjs/locale/de";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren;

const AppProvider: FC<Props> = ({ children }) => {
  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    //   <ThemeProvider theme={theme}>{children}</ThemeProvider>
    // </LocalizationProvider>
    <>{children}</>
  );
};

export default AppProvider;
