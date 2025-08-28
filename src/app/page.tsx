import CardOne from "@/components/cards/CardOne";
import CardTwo from "@/components/cards/CardTwo";
import JiraTicket from "@/components/cards/JiraTicket";
import {
  Box,
  Button,
  Group,
  Image,
  TextInput,
  Typography,
  Pill,
  Avatar
} from "@mantine/core";

export default function Home() {
  return (
    // <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-5 gap-2">
    <div className="flex flex-wrap gap-2">
      <CardOne></CardOne>
      <JiraTicket></JiraTicket>

      {/* <CardTwo></CardTwo> */}
    </div>
  );
}
