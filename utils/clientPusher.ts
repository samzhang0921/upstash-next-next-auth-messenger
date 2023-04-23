import ClientPusher from "pusher-js";

export const clientPusher = new ClientPusher ('199016d8b924de4f49d6', {
    cluster: 'eu',
    forceTLS: true
  }
)