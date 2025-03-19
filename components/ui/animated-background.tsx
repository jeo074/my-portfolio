'use client'
import { cn } from '../../lib/utils'
import { AnimatePresence, Transition, motion } from 'motion/react'
import {
  Children,
  cloneElement,
  ReactElement,
  useEffect,
  useState,
  useId,
} from 'react'

export type AnimatedBackgroundProps = {
  children:
    | ReactElement<{ 'data-id': string; className?: string; children?: React.ReactNode }>[]
    | ReactElement<{ 'data-id': string; className?: string; children?: React.ReactNode }>
  defaultValue?: string
  onValueChange?: (newActiveId: string | null) => void
  className?: string
  transition?: Transition
  enableHover?: boolean
}

export function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className,
  transition,
  enableHover = false,
}: AnimatedBackgroundProps) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const uniqueId = useId()

  const handleSetActiveId = (id: string | null) => {
    setActiveId(id)

    if (onValueChange) {
      onValueChange(id)
    }
  }

  useEffect(() => {
    if (defaultValue !== undefined) {
      setActiveId(defaultValue)
    }
  }, [defaultValue])

  return (
    <>
      {Children.map(children, (child, index) => {
        if (!child || !('props' in child)) return null

        const id = child.props['data-id']
        if (!id) return child

        const interactionProps = enableHover
          ? {
              onMouseEnter: () => setActiveId(id),
              onMouseLeave: () => setActiveId(null),
            }
          : {
              onClick: () => setActiveId(id),
            }

        return cloneElement(
          child as ReactElement<any>,
          {
            key: id || index,
            className: cn('relative inline-flex', child.props.className ?? ''),
            'data-checked': activeId === id ? 'true' : 'false',
            ...interactionProps,
          },
          <>
            <AnimatePresence initial={false}>
              {activeId === id && (
                <motion.div
                  layoutId={`background-${uniqueId}`}
                  className={cn('absolute inset-0', className)}
                  transition={transition}
                  initial={{ opacity: defaultValue ? 1 : 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </AnimatePresence>
            <div className="z-10">{child.props.children}</div>
          </>
        )
      })}
    </>
  )
}