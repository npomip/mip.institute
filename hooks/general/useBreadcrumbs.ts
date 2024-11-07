import { useMemo } from 'react'

const useBreadcrumbs = (segments, labels, slugs) => {
  const breadcrumbs = useMemo(() => {
    return segments.map((_, index) => ({
      label: labels[index],
      path: `/${segments.slice(0, index + 1).join('/')}`,
      slug: slugs && slugs[index]
    }))
  }, [segments, labels, slugs])

  return breadcrumbs
}

export default useBreadcrumbs
