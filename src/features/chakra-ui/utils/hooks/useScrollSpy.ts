import React from 'react'

/**
 * useScrollSpy Hook
 *
 * Easy interaction with the IntersectionObserver API
 * Good for tracking element visibility for TOC navs, lazy-loading and more.
 *
 * @param selectors - CSS query selectors of the elements to track
 * @param options
 * @returns void
 */
const useScrollSpy = (
  selectors: string[],
  options?: IntersectionObserverInit
) => {
  const [activeId, setActiveId] = React.useState<string>()
  const observer = React.useRef<IntersectionObserver | null>(null)
  const headerRef = React.useRef<{
    [key: string]: IntersectionObserverEntry
  }>({})

  React.useEffect(() => {
    const elements = selectors.map((selector) =>
      document.querySelector(`${selector}`)
    )

    observer.current?.disconnect()

    observer.current = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        headerRef.current[entry.target.id] = entry
      }

      const topElement = Object.values(headerRef.current).find(
        (entry) => entry.isIntersecting
      )

      if (topElement) {
        setActiveId(topElement.target.id)
      }
    }, options)

    elements.forEach((el) => {
      if (el) observer.current?.observe(el)
    })

    return () => {
      observer.current?.disconnect()
      headerRef.current = {}
    }
  }, [selectors, options])

  return activeId
}

export { useScrollSpy }
