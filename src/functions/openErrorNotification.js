import { notification } from 'antd/lib'

export const openErrorNotification = (message, key) => {
  notification.open({
    key,
    placement: 'bottomRight',
    message,
    duration: 5,
    style: {
      backgroundColor: 'red',
    },
  })
}
