import React, { useState } from "react";
import { Input } from "antd";
import LoatLabelWrapper from "./LoatLabelWrapper/LoatLabelWrapper";

const Example = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="example">
      <LoatLabelWrapper label="First Name" name="firstName" value={firstName}>
        <Input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </LoatLabelWrapper>
      <LoatLabelWrapper label="Last Name" name="lastName" value={lastName}>
        <Input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </LoatLabelWrapper>
    </div>
  );
};

// const treeData = [
//   {
//     title: "Node1",
//     value: "0-0",
//     key: "0-0",
//     children: [
//       {
//         title: "Child Node1",
//         value: "0-0-0",
//         key: "0-0-0",
//       },
//     ],
//   },
//   {
//     title: "Node2",
//     value: "0-1",
//     key: "0-1",
//     children: [
//       {
//         title: "Child Node3",
//         value: "0-1-0",
//         key: "0-1-0",
//       },
//       {
//         title: "Child Node4",
//         value: "0-1-1",
//         key: "0-1-1",
//       },
//       {
//         title: "Child Node5",
//         value: "0-1-2",
//         key: "0-1-2",
//       },
//     ],
//   },
// ];

export default Example;
