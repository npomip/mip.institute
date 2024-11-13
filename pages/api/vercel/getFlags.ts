import { decrypt, FlagOverridesType } from '@vercel/flags'
import type { GetServerSideProps, GetServerSidePropsContext } from 'next'

async function getFlags(request: GetServerSidePropsContext['req']) {
  const overridesCookieValue = request.cookies['vercel-flag-overrides']
  const overrides = overridesCookieValue
    ? await decrypt<FlagOverridesType>(overridesCookieValue)
    : null

  const flags = {
    btn: overrides?.btn ?? false
  }

  return flags
}

export default getFlags
