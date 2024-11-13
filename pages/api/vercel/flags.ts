import type { NextApiRequest, NextApiResponse } from 'next'
import { type ApiData, verifyAccess } from '@vercel/flags'
import { dev } from '@/config/index'

export async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const access = await verifyAccess(request.headers['authorization'])
  if (!access) return response.status(401).json(null)

  return response.status(200).json({
    definitions: {
      newFeature: {
        description: 'Controls whether the new feature is visible',
        origin: dev ? 'http://localhost:3000' : 'https://mip.institute',
        options: [
          { value: false, label: 'Off' },
          { value: true, label: 'On' }
        ]
      }
    }
  })
}
