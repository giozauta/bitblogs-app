import React, { PropsWithChildren } from "react";

const MainModule: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="mianModule px-4 py-8 flex-grow">{children}</div>;
};

export default MainModule;
