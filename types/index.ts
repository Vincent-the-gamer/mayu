export interface MenuOptions {
  name: string
  route: string
  icon?: string
  description?: string
}

export interface HTTPRequest {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  headers?: Record<string, any>
  params?: Record<string, any>
  body?: Record<string, any>
}
