import React from "react";
import styles from "./MyComponent.module.css";
import { registerVevComponent } from "@vev/react";
import Controls from "./controls";

type Props = {
  title: string;
};

const MyComponent = ({ title = "Vev" }: Props) => {
  return (
    <div className={styles.wrapper}>
      <h1>Hello, {title}</h1>
    </div>
  );
};

registerVevComponent(MyComponent, {
  name: "My Component",
  props: [{ name: "title", type: "number" }, {
    type: 'object',
    component: Controls,
    name: 'config',
    fields: [{
      name: 'voice',
      type: 'string'
    }]
  } ]],
  editableCSS: [
    {
      selector: styles.wrapper,
      properties: ["background"],
    },
  ],
});

export default MyComponent;
