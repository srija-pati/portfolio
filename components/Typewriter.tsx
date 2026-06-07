'use client'

import { useState, useEffect } from 'react'

interface TypewriterProps {
  words: string[]
  baseSpeed?: number
}

export function Typewriter({ words, baseSpeed = 50 }: TypewriterProps) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    let timeout: NodeJS.Timeout

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false)
        setIsDeleting(true)
      }, 2000)
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1))
      }, baseSpeed / 2)

      if (text.length === 0) {
        setIsDeleting(false)
        setWordIndex((wordIndex + 1) % words.length)
      }
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1))
      }, baseSpeed)

      if (text.length === currentWord.length) {
        setIsWaiting(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, wordIndex, isDeleting, isWaiting, words, baseSpeed])

  return (
    <span>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}
