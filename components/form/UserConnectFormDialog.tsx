'use client';
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
import UserDataForm from "./UserDataForm"
import React, { ReactNode } from "react"

type Props = {
  button: ReactNode
}

export function UserConnectFormDialog({ button }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}> 
      <DialogTrigger asChild>
        {button}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Hubungi Kami Cepat Via WhatsApp</DialogTitle>
          <DialogDescription>
            Isi data singkat Anda di bawah ini, tim kami akan segera terhubung dengan Anda di WhatsApp untuk konsultasi dan bantuan lebih lanjut.
          </DialogDescription>
        </DialogHeader>
        <UserDataForm 
          submitButton={
            <DialogFooter>
              <Button type="submit" className="w-full">Submit</Button>
            </DialogFooter>
          } 
          onSubmitForm={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  )
}
