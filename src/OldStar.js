import React from "react";
import { FaStar } from "react-icons/fa";

export default function OldStar({ selected = false, onClick = f => f }) {
  return <FaStar color={selected ? "red" : "grey"} onClick={onClick} />;
}
