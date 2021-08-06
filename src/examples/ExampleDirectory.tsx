import React, { FC, useState } from "react";
import { render, Text, Newline } from "ink";
import { QuickSearchInput } from "../QuickSearchInput";
// import { Example1, Example1Name } from "./Example1";
// import { Example2, Example2Name } from "./Example2";
// import { Example3, Example3Name } from "./Example3";
// import { Example4, Example4Name } from "./Example4";

const ExampleDirectory: FC = () => {
  const [selectedExample, setSelectedExample] = useState("");

  // if (selectedExample === Example1Name) {
  //   return <Example1 />;
  // } else if (selectedExample === Example2Name) {
  //   return <Example2 />;
  // } else if (selectedExample === Example3Name) {
  //   return <Example3 />;
  // } else if (selectedExample === Example4Name) {
  //   return <Example4 />;
  // } else {
  return (
    <>
      <Text color="green">Which example would you like to explore?</Text>
      <Newline />
      <QuickSearchInput
        {...{
          items: [
            { label: "Example1Name" },
            { label: "Example2Name" },
            { label: "Example3Name" },
            { label: "Example4Name" },
          ],
          onSelect: (item) => setSelectedExample(item.label),
        }}
      />
    </>
  );
  // }
};

render(<ExampleDirectory />);
