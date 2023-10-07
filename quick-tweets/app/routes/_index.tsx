import React from "react";
import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

const IndexRoute: React.FC<{}> = () => {
  return (
    <p>
      Hello, Index Route yeah
    </p>
  );
};
export default IndexRoute;
