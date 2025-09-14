import { Typography } from "@mantine/core";
import React from "react";

export default function GradientCard() {
  return (
    <div className="w-72 p-4 m-2 rounded-3xl bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%">
      <Typography className="text-gray-100 font-bold">GradientCard</Typography>
    </div>
  );
}
