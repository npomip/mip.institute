import type { GetServerSideProps, GetServerSidePropsContext } from 'next'
import {
  decrypt,
  encrypt,
  type FlagValuesType,
  type FlagOverridesType
} from '@vercel/flags'
import { FlagValues } from '@vercel/flags/react'

/**
 * A function which respects overrides set by the Toolbar, and returns feature flags.
 */
async function getFlags(request: GetServerSidePropsContext['req']) {
  const overridesCookieValue = request.cookies['vercel-flag-overrides']
  const overrides = overridesCookieValue
    ? await decrypt<FlagOverridesType>(overridesCookieValue)
    : null

  const flags = {
    banner: overrides?.banner ?? false
  }

  return flags
}

export const getServerSideProps: GetServerSideProps = async context => {
  const flags = await getFlags(context.req)
  const encryptedFlagValues = await encrypt<FlagValuesType>(flags)

  return { props: { flags, encryptedFlagValues } }
}

export default function Page({
  flags,
  encryptedFlagValues
}: {
  flags: Awaited<ReturnType<typeof getFlags>>
  encryptedFlagValues: string
}) {
  return (
    <>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
        praesentium dolor, dolorem enim doloribus quaerat, dolore voluptate quos
        vero esse quis, modi inventore deleniti labore dicta nihil perspiciatis
        est. Non?
      </div>
      <FlagValues values={encryptedFlagValues} />
      {flags.banner ? <button>ФИЧА</button> : null}
    </>
  )
}
