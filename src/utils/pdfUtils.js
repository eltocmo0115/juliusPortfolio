/**
 * Escapes special PDF string characters.
 * @param {string|number} value
 * @returns {string}
 */
export function escapePdfText(value) {
  return String(value)
    .replaceAll('\\', '\\\\')
    .replaceAll('(', '\\(')
    .replaceAll(')', '\\)')
}

/**
 * Builds the plain-text lines array used to populate the CV PDF.
 * Keeping this separate makes it easy to unit-test without touching the PDF renderer.
 *
 * @param {{ profile, programmingSkills, softwareProjects, capstoneProject }} data
 * @returns {string[]}
 */
export function buildCvLines({ profile, programmingSkills, softwareProjects, capstoneProject }) {
  return [
    profile.name,
    profile.role,
    `Location: ${profile.location}`,
    `Email: ${profile.email}`,
    '',
    'Programming Skills',
    ...programmingSkills.slice(0, 5).map((s) => `${s.name} - ${s.level}%`),
    '',
    'Selected Works',
    ...softwareProjects.slice(0, 2).map((p) => `${p.year}: ${p.title}`),
    '',
    'Capstone Project',
    capstoneProject.title,
  ]
}


/**
 * Builds a minimal valid PDF from the supplied content lines and returns a
 * Blob URL (preferred) or a base64 data URL as a fallback.
 *
 * The original implementation used `btoa(String.fromCharCode(...pdfBytes))`
 * which causes a call-stack overflow for large payloads. This version uses
 * Array.from to avoid that, and prefers a Blob URL when the browser supports it.
 *
 * @param {string[]} cvLines  - plain-text lines to embed in the PDF
 * @returns {string}          - object URL or data URL for the generated PDF
 */
export function createCvPdf(cvLines) {
  const contentLines = [
    'BT',
    '/F1 18 Tf',
    '72 760 Td',
    `(${escapePdfText('CURRICULUM VITAE')}) Tj`,
    '/F1 11 Tf',
    '0 -28 Td',
    ...cvLines.flatMap((line) => [
      `(${escapePdfText(line)}) Tj`,
      '0 -18 Td',
    ]),
    'ET',
  ]

  const contentStream = contentLines.join('\n')
  const encoder = new TextEncoder()

  const pdfParts = []
  const offsets = []
  let byteLength = 0

  const push = (text) => {
    offsets.push(byteLength)
    pdfParts.push(text)
    byteLength += encoder.encode(text).length
  }

  push('%PDF-1.4\n')
  push('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n')
  push('2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n')
  push(
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n',
  )
  push(
    `4 0 obj\n<< /Length ${encoder.encode(contentStream).length} >>\nstream\n${contentStream}\nendstream\nendobj\n`,
  )
  push('5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n')

  const xrefOffset = byteLength
  const xref = [
    'xref',
    '0 6',
    '0000000000 65535 f ',
    ...offsets.map((offset) => `${String(offset).padStart(10, '0')} 00000 n `),
    'trailer',
    '<< /Size 6 /Root 1 0 R >>',
    'startxref',
    String(xrefOffset),
    '%%EOF',
  ].join('\n')

  const pdfText = `${pdfParts.join('')}${xref}`
  const pdfBytes = encoder.encode(pdfText)

  // Prefer Blob URL (no size limit, memory-managed by browser)
  if (typeof URL !== 'undefined' && URL.createObjectURL) {
    const blob = new Blob([pdfBytes], { type: 'application/pdf' })
    return URL.createObjectURL(blob)
  }

  // Fallback: safe base64 encoding that avoids call-stack overflow
  const base64 = btoa(
    Array.from(pdfBytes, (b) => String.fromCharCode(b)).join(''),
  )
  return `data:application/pdf;base64,${base64}`
}
