import { Logger } from '@sol.ac/js-utils-logger'
const LOGGER = new Logger('CONFIG')

// Default hard-coded values
export const CONFIG: {
  AP_GAMES_ELEMENTS_PLUGIN: string
  AP_GAMES_ELEMENTS_PUBLIC: string
  AP_GAMES_ELEMENTS_ENVIRONMENT: string
} = {
  AP_GAMES_ELEMENTS_PLUGIN: 'http://localhost:8089/plugin.json',
  AP_GAMES_ELEMENTS_PUBLIC: '',
  AP_GAMES_ELEMENTS_ENVIRONMENT: 'local',
}

// Load config from env
try {
  // This cannot be factorized since webpack simply replace the full process.env.[property] strings
  if (process.env.AP_GAMES_ELEMENTS_PLUGIN) {
    CONFIG.AP_GAMES_ELEMENTS_PLUGIN = process.env.AP_GAMES_ELEMENTS_PLUGIN
  }
  if (process.env.AP_GAMES_ELEMENTS_PUBLIC) {
    CONFIG.AP_GAMES_ELEMENTS_PUBLIC = process.env.AP_GAMES_ELEMENTS_PUBLIC
  }
  if (process.env.AP_GAMES_ELEMENTS_ENVIRONMENT) {
    CONFIG.AP_GAMES_ELEMENTS_ENVIRONMENT = process.env.AP_GAMES_ELEMENTS_ENVIRONMENT
  }
} catch (error) {
  LOGGER.warn('Failed to load from process.env')
}

console.log('CONFIG')
Object.keys(CONFIG).forEach((confKey) => {
  // @ts-ignore
  console.log(` - ${confKey}: '${CONFIG[confKey]}'`)
})
