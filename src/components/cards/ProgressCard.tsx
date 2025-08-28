import { Typography, Avatar, Progress } from "@mantine/core";
import { BookOpenText, Upload } from "lucide-react";

export default function ProgressCard() {
  return (
    <div className="w-72 border rounded-3xl m-2 p-4 bg-[#fdde68] border-[#fdde68]">
      <div className="flex justify-between items-center">
        <Typography className="font-bold text-sm">PROGRESS</Typography>
        <div className="border border-[#eec942] rounded-xl p-1 bg-[#eec942]">
          <Upload color="white" />
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <BookOpenText className="mt-2" />
        <Typography className="text-3xl font-bold">543</Typography>
        <div>
          <Typography className="text-xs">Out of 1,534 pages</Typography>
          <Typography className="text-xs font-bold">
            #5 among friends
          </Typography>
        </div>
      </div>
      <div className="mt-6">
        <Progress value={50} color="black" />
        <div className="flex mt-2 justify-between">
          <div className="flex">
            <Avatar size={"xs"}>AZ</Avatar>
            <Avatar size={"xs"}>BD</Avatar>
            <Avatar size={"xs"}>CA</Avatar>
          </div>
          <div className="flex">
            <Avatar size={"xs"}>AZ</Avatar>
          </div>
          <div className="flex">
            <Avatar size={"xs"}>AZ</Avatar>
          </div>
          <div className="flex">
            <Avatar size={"xs"}>AZ</Avatar>
            <Avatar size={"xs"}>AZ</Avatar>
            <Avatar size={"xs"}>AZ</Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}
