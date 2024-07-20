import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CustomToast } from "./CustomToast"


export function DialogBox() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-black text-white hover:bg-slate-200 hover:text-black w-32">Donate</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Make Donation</DialogTitle>
          <DialogDescription>
            Make Donations and decide how much amount you want to donate. 
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Donation Amount
            </Label>
            <Input
              id="username"
              type = "number"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <CustomToast/>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}