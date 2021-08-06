import React, { FC, useState } from "react";
import { render, Text, Newline } from "ink";

import { QuickSearchInput, ItemProps } from "../QuickSearchInput";

export const Example3Name =
  "Case-Sensitive, Hiding Status & non-selected Items";

// Hide elements which are not selected
const ItemComponent = ({ isHighlighted, isSelected, children }: ItemProps) => {
  if (!isHighlighted) {
    return <></>;
  }
  return <Text color={isSelected ? "#00FF00" : ""}>{children}</Text>;
};

const StatusComponent = () => <></>; // No-op

export const Example3: FC = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <>
      <Text>Example 3: {Example3Name}</Text>
      <Text color="green">Selected item is {selectedValue}</Text>
      <Newline />
      <QuickSearchInput
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
          statusComponent: StatusComponent,
          // Only show items which are selected
          itemComponent: ItemComponent,
        }}
      />
    </>
  );
};

if (require.main && require.main.filename === __filename) {
  render(<Example3 />);
}
