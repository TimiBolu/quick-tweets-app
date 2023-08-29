import React from "react";
import { Outlet } from "@remix-run/react";


const JokesRoute: React.FC<{}> = () => {
  return (
    <div>
      <h1>J🤪kes</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default JokesRoute;

// a._index.tsx inside a.tsx if <Outlet /> replace it
// root.tsx
// routes/_index.tsx is an alias root._index.tsx

// jokes.new.tsx --> jokes/new
// jokes.tsx <Outlet /> --> jokes._index.tsx
//