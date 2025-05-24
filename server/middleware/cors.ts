export default defineEventHandler((event) => {
  handleCors(event, {
    origin: '*',
    methods: '*',
    allowHeaders: '*',
  })
})