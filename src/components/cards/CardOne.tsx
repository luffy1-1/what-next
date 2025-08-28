import {
  Button,
  Typography,
  Pill,
} from "@mantine/core";
export default function CardOne() {
    return (
      <div className="w-72 break-inside-avoid  p-4 m-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg">
        <Typography className="text-lg font-bold">The Metamorphosis</Typography>
        <Typography className="text-[grey] text-sm">Franz Kakfa</Typography>
        <div className="flex flex-wrap gap-2 text-sm  mb-4 mt-2">
          <Pill>Novella</Pill>
          <Pill>Absurdist fiction</Pill>
          <Pill>Fantasy fiction</Pill>
        </div>
        <div className="flex justify-between mt-8">
          <Typography className="text-lg font-bold">
            <span className="text-[grey] line-through mr-1">Rs.800</span>Rs. 500
          </Typography>
          <Button>Buy Now</Button>
        </div>
      </div>
    );
}
