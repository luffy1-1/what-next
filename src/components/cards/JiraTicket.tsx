import {
  Typography,
  Pill,
  Avatar,
} from "@mantine/core";
import { Bookmark } from "lucide-react";

export default function JiraTicket() {
  return (
    <div className="w-72 break-inside-avoid  border p-4 m-2  rounded-xl bg-black/20 border-black/20">
      <Typography className="text-lg font-bold">Migrate Flash Pages</Typography>
      <Pill className="mt-2">Story/Epic 1</Pill>
      <div className="flex justify-between mt-8">
        <div className="flex">
          <Bookmark />
          <Typography className="text-sm">CIT-230</Typography>
        </div>
        <Avatar color={"blue"}>AB</Avatar>
      </div>
    </div>
  );
}
