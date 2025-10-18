import { Button, Typography, Pill, Image } from "@mantine/core";
export default function BuyCard() {
  return (
    <div
      className="w-72 break-inside-avoid  p-4 m-2  backdrop-blur-md border border-white/30 rounded-2xl shadow-lg
    bg-[#440c0b] text-white"
    >
      <Image src="/karamazov_cover.jpg" alt="book_cover" radius="md" h={300} fit="contain" />
      <Typography className="text-lg font-bold mt-2">
        The Brothers Karamazov
      </Typography>
      <Typography className="text-[grey] text-sm">Fyodor Dostoevsky</Typography>
      <div className="flex flex-wrap gap-2 text-sm  mb-4 mt-2">
        <Pill>Novel</Pill>
        <Pill>Fantasy Fiction</Pill>
        <Pill>Suspense</Pill>
      </div>
      <div className="flex justify-between mt-8">
        <Typography className="text-lg font-bold">
          <span className="text-[grey] line-through mr-1">Rs.1800</span>Rs. 1200
        </Typography>
        <Button>Buy Now</Button>
      </div>
    </div>
  );
}
