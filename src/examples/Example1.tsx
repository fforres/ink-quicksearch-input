import React, { FC, useState } from "react";
import { render, Text, Newline } from "ink";

import { QuickSearchInput } from "../QuickSearchInput";

export const Example1Name = "Basic";

export const Example1: FC = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <>
      <Text>Example 1: {Example1Name}</Text>
      <Text color="green">Selected item is {selectedValue}</Text>
      <Newline />
      <QuickSearchInput
        {...{
          items: [
            { value: 1, label: "Animal" },
            { value: 3, label: "Antilope" },
            { value: 2, label: "Animation" },
            { value: 0, label: "Animate" },
            { value: 4, label: "Arizona" },
            { value: 5, label: "Aria" },
            { value: 6, label: "Arid" },
          ],
          onSelect: (item) => setSelectedValue(item.label),
        }}
      />
    </>
  );
};

if (require.main && require.main.filename === __filename) {
  render(<Example1 />);
}
