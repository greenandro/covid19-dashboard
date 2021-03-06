export const API_ADDRESSES_URL = process.env.API_ADDRESSES_URL || 'https://api-adresse.data.gouv.fr'

export async function searchAddress(input) {
  const options = {
    mode: 'cors',
    method: 'GET'
  }

  const url = `${API_ADDRESSES_URL}/search?q=${encodeURIComponent(input)}`
  const response = await fetch(url, options)
  const contentType = response.headers.get('content-type')

  if (response.ok && contentType && contentType.includes('application/json')) {
    return response.json()
  }

  throw new Error('Une erreur est survenue')
}
