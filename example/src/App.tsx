import React, { useRef } from "react";

import { useScrollock } from "use-scrollock";
import GithubIcon from "./github";

const App = () => {
  const ref = useRef(null);
  const { scrollock, toggleScrollock } = useScrollock();
  const textAreaLock = useScrollock({ ref });

  return (
    <div className={["container", scrollock && "container-unlock"].join(" ")}>
      <div className="row">
        <h1>use-scrollock</h1>
        <a href="https://github.com/fayeed/use-scrollock" target="_blank">
          <GithubIcon height={36} width={36} />
        </a>
      </div>

      <p>
        Add scroll lock to <code>{"<body />"}</code> tag or any element you
        like.
      </p>
      <button
        className={["btn", scrollock && "btn-unlock"].join(" ")}
        onClick={() => toggleScrollock()}
      >
        {scrollock ? "Unlock" : "Lock"}
      </button>
      <textarea
        ref={ref!}
        rows={8}
        defaultValue={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        }
      />

      <button
        className={["btn", "btn-small"].join(" ")}
        onClick={() => textAreaLock.toggleScrollock()}
      >
        {textAreaLock.scrollock ? "Unlock" : "Lock"}
      </button>
    </div>
  );
};

export default App;
