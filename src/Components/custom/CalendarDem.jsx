"use client"

import * as React from "react"

// import { Calendar } from "@/components/ui/calendar"
import { Calendar } from "../ui/calendar"

export default function CalendarDemo() {
    const [date, setDate] = React.useState(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border border-light-border shadow-none bg-backgrounds w-full"
      captionLayout="dropdown"
    />
  )
}
