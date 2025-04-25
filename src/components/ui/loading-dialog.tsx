"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { motion } from "framer-motion"

interface LoadingDialogProps {
  isOpen: boolean
  jobCategory?: string
}

export function LoadingDialog({ isOpen, jobCategory }: LoadingDialogProps) {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center justify-center py-6">
          <div className="relative h-16 w-16 mb-4">
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Please wait</h3>
          <p className="text-center text-muted-foreground">
            {jobCategory ? `We are processing your application for ${jobCategory}` : "We are processing your request"}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
