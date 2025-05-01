import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  success: boolean
  message: string
  data?: {
    name: string
    email: string
    message: string
  }
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res
        .status(405)
        .json({ success: false, message: `Method ${req.method} Not Allowed` })
  }

  const { name, email, message } = req.body as {
    name: string
    email: string
    message: string
  }

  console.log('📬 Contact form submitted:', { name, email, message })

  return res.status(200).json({
    success: true,
    message: 'Message received (fake send)!',
    data: { name, email, message },
  })
}