import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import { color } from "@storybook/addon-knobs/react";

import { wInfo } from "./utils";

storiesOf("Button", module)
  .addWithJSX(
    "with background",
    wInfo(`<h1>descriptive text of component<h1>
~~~js
    <Button>Click here</Button>
~~~
    `)(() => <Button bg={color("bg", "green", "group1")}>Hello World</Button>)
  )
  .addWithJSX("with background 2", () => (
    <Button bg="lightblue">Hello World</Button>
  ));
