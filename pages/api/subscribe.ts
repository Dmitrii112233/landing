import type { NextApiRequest, NextApiResponse } from 'next'

type SubscribeResponse = {
    success: boolean
    message: string
    email?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<SubscribeResponse>
) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST'])
        return res
            .status(405)
            .json({ success: false, message: `Method ${req.method} Not Allowed` })
    }

    const { email } = req.body as { email?: string }

    if (!email || typeof email !== 'string') {
        return res
            .status(400)
            .json({ success: false, message: 'Invalid or missing email' })
    }

    console.log('📧 New subscriber:', email)

    return res.status(200).json({
        success: true,
        message: 'Subscribed successfully!',
        email,
    })
}