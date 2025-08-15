"use client"

import { useState } from "react"

export function useSidebar(defaultOpen = true) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const toggle = () => setIsOpen(!isOpen)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return {
    isOpen,
    toggle,
    open,
    close,
  }
}

