export const apiVersion =
<<<<<<< HEAD
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-11'
=======
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-12'
>>>>>>> 596cbc5 (configured sanity and sanity.live for realtime timedata. movinfg on to ppr:increamental)

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

<<<<<<< HEAD
=======
export const token = process.env.SANITY_WRITE_TOKEN;

>>>>>>> 596cbc5 (configured sanity and sanity.live for realtime timedata. movinfg on to ppr:increamental)
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
