import axios from 'axios'

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycby4OGSE8vkbptTyJvK77bVv6KHVqJmbBtFpvZEmWXEAmxtbuEH5-lJ9OoaepeEiIYnmvw/exec'

export type ContactPayload = {
  nombre: string
  apellido: string
  dni: string
  telefono: string
  localidad: string
}

export function postContacto(payload: ContactPayload) {
  // Apps Script suele fallar CORS con preflight cuando se manda application/json.
  // Enviamos el JSON como texto plano para evitar el preflight, y el backend puede
  // seguir parseando con JSON.parse(e.postData.contents).
  return axios.post(APPS_SCRIPT_URL, JSON.stringify(payload), {
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8',
    },
  })
}
