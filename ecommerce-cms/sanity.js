import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: '7ilyf8mn',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
  token: 'skqXv7zDtrZtNjf18Un96uPenQrNDIaOmddZKlxpUdrvDMKJQEyrE062sVlAO8j2H82AdR9JPjYLzJnWwcMKsiQY8ZviyF2VbldjdYsMN4ZXmEnsxDOIvfnIlVfFJA6zuCV5DHERc6tsU1MPsErqohgC9Sjzkfn75bQId4t3hdJaQmxFxNNP',
})
