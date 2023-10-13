'use client'
import React from 'react'
import { ThemeProvider } from "@/components/theme-provider"
type Props = {
  children: React.ReactNode
}

const Providers = (props: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {props.children}
    </ThemeProvider>
  );
}

export default Providers