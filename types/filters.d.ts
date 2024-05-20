import { ErrorMessage } from "~/types/toaster";

declare module "#app" {
  interface NuxtApp {
    $toast: (name: string, value?: ErrorMessage) => void;
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $toast: (name: string, value?: ErrorMessage) => void;
  }
}

export {};
