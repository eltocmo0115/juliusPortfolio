import { motion, useReducedMotion } from 'motion/react'

/**
 * Shared scroll-entrance primitives — replaces the manual IntersectionObserver
 * hook + `.animate-on-scroll` CSS class across all sections.
 *
 * <Reveal> is the stagger container; <RevealItem> is each animated child.
 * The `stagger` scales to any number of children automatically.
 *
 * Usage:
 *   <Reveal className="row g-4">
 *     {items.map((item) => (
 *       <RevealItem className="col-sm-6" key={item.id}>
 *         …card markup…
 *       </RevealItem>
 *     ))}
 *   </Reveal>
 */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, when: 'beforeChildren' },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
}



/**
 * Stagger container — triggers children once the element enters the viewport.
 * @param {{ children: React.ReactNode, className?: string }} props
 */
export function Reveal({ children, className }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  )
}

/**
 * Individual animated child — must be a direct child of <Reveal>.
 * @param {{ children: React.ReactNode, className?: string, variants?: object }} props
 */
export function RevealItem({ children, className, variants }) {
  return (
    <motion.div className={className} variants={variants ?? itemVariants}>
      {children}
    </motion.div>
  )
}
