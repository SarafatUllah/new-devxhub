import * as Sentry from "@sentry/vue"

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const app = nuxtApp.vueApp

  Sentry.init({
    app,
    dsn: config.public.sentryDns,
    integrations: [
      new Sentry.BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(useRouter()),
        tracePropagationTargets: ["localhost", "https://devxhub.com/", /^\//],
      }),
      new Sentry.Replay(),
    ],
    trackComponents: true,
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
    // // Session Replay
    // replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    // replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });

  app.config.errorHandler = (error, context) => {
    Sentry.captureException(error)
  }
})