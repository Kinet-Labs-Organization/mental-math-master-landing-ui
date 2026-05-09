/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IOS_APPSTORE_LINK_AVAILABLE?: string;
  readonly VITE_ANDROID_PLAYSTORE_LINK_AVAILABLE?: string;
  readonly VITE_IOS_APPSTORE_LINK?: string;
  readonly VITE_ANDROID_PLAYSTORE_LINK?: string;
}
