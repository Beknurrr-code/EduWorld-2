import { App } from './core/App'
import { CharSelect } from './screens/CharSelect'
import { TeacherLevel } from './levels/TeacherLevel'

// Mount app
const container = document.getElementById('app')!
const app = new App(container)
app.start()

// Character select → game
const charSelect = new CharSelect()
charSelect.open(async (charData) => {
  charSelect.close()

  // Get API key from localStorage or URL param (optional)
  const params = new URLSearchParams(location.search)
  const apiKey = params.get('apiKey') ?? localStorage.getItem('ew2_apikey') ?? ''

  const level = new TeacherLevel(app, apiKey)
  await level.start(charData)
})
