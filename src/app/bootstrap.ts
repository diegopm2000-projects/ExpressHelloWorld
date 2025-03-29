import express from 'express'

export async function init(): Promise<void> {
  const app = express()
  const port = 3000

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on http://localhost:${port}`)
  })

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
}
