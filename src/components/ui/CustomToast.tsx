'use client'
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function CustomToast() {
  const handleClick = () => {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    toast("Donation has been accepted", {
      description: `Donation accepted on ${formattedDate}`,
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  };

  return (
    <Button variant="outline" className="bg-black text-white hover:bg-slate-300 hover:text-black" onClick={handleClick}>
      Show Toast
    </Button>
  );
}
