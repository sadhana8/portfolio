"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-14 h-8 rounded-full bg-muted" />
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative flex items-center w-14 h-8 rounded-full transition-colors duration-500 
        ${isDark ? "bg-gradient-to-r from-indigo-600 to-purple-600" : "bg-gradient-to-r from-yellow-400 to-orange-500"}`}
    >
      {/* Sliding circle */}
      <motion.div
        className="absolute w-7 h-7 bg-background rounded-full shadow-md flex items-center justify-center"
        initial={false}
        animate={{ x: isDark ? 24 : 2 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-indigo-500" />
        ) : (
          <Sun className="h-4 w-4 text-yellow-500" />
        )}
      </motion.div>
    </button>
  )
}
