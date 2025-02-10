import type {
  DialogProviderInst,
  LoadingBarProviderInst,
  MessageProviderInst,
  NotificationProviderInst,
} from 'naive-ui'

declare global {

  export interface Window {
    $loadingBar: LoadingBarProviderInst

    $dialog: DialogProviderInst

    $message: MessageProviderInst

    $notification: NotificationProviderInst
  }
}
