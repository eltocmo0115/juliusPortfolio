import { useMemo } from 'react'
import { createCvPdf } from '@/utils/pdfUtils'

/**
 * Returns a stable PDF URL for the given CV lines.
 * Recomputes only when `cvLines` reference changes.
 *
 * @param {string[]} cvLines
 * @returns {string} object URL or data URL
 */
export function usePdfUrl(cvLines) {
  return useMemo(() => createCvPdf(cvLines), [cvLines])
}
