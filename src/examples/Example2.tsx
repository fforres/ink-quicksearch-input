import React, { FC, useState } from "react";
import { render, Text, Newline } from "ink";

import { QuickSearchInput } from "../QuickSearchInput";

export const Example2Name = "Case-Sensitive, No Query/Status Element";

export const Example2: FC = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <>
      <Text key="header">Example 2: {Example2Name}</Text>
      <Text color="green" key="selected-item">
        Selected item is {selectedValue}
      </Text>
      <Newline />
      <QuickSearchInput
        key="input"
        {...{
          items: [
            { label: "Animal" },
            { label: "Antilope" },
            { label: "Animation" },
            { label: "Animate" },
            { label: "Arizona" },
            { label: "Aria" },
            { label: "Arid" },
          ],
          onSelect: (d) => setSelectedValue(d.label),
          caseSensitive: true,
          // Hide the statusComponent
          // eslint-disable-next-line react/display-name
          statusComponent: () => <></>,
        }}
      />
    </>
  );
};

if (require.main && require.main.filename === __filename) {
  render(<Example2 />);
}
