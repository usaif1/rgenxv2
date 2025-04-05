/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

// Optional: Declare types for direct .svg imports (if needed)
declare module "*.svg" {
  import React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}
