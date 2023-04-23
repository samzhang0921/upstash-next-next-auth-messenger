import Pusher from 'pusher'

export const serverPusher = new Pusher({
    appId: process.env.SERVER_PUSHER_APPID!,
    key: process.env.SERVER_PUSHER_KEY!,
    secret: process.env.SERVER_PUSHER_SECRET!,
    cluster: process.env.SERVER_PUSHER_CLUSTER!,
    useTLS: true,
})

