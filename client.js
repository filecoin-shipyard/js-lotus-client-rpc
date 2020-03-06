export default class Client {
  constructor ({ url, token }) {
    this.url = url
    this.token = token
    this.idCounter = 0
  }

  async request (method, ...params) {
    const headers = {
      'Content-Type': 'text/plain;charset=UTF-8',
      Accept: '*/*'
    }
    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`
    }
    const data = {
      jsonrpc: '2.0',
      method: `Filecoin.${method}`,
      params: [...params],
      id: this.idCounter++
    }
    console.log('Jim1', this.url)
    try {
      const response = await fetch(this.url, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
      })
      // FIXME: Check return code, errors
      const { result } = await response.json()
      console.log('Jim2')
      return result
    } catch (e) {
      console.log('Jim3', e.message)
      const promise = new Promise(resolve => {}) // Sleep forever
      return promise
    }
  }
}
