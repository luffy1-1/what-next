import CardOne from "@/components/cards/CardOne";
import {
  Box,
  Button,
  Group,
  Image,
  TextInput,
  Typography,
  Pill,
} from "@mantine/core";

export default function Home() {
  return (
    <div className="flex gap-2 mt-2">
      <CardOne></CardOne>
      <div>
        <Typography> Header 1</Typography>
        <Typography>Small Description Description</Typography>
        <Typography>Rs. 500</Typography>
        <Typography>Unisex</Typography>
      </div>
    </div>
  );
}
