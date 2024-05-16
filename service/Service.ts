interface HTTPInstance {
  get<T>(
    url: string,
    config?: RequestInit,
  ): Promise<T>;

  delete<T>(
    url: string,
    config?: RequestInit,
  ): Promise<T>;

  head<T>(
    url: string,
    config?: RequestInit,
  ): Promise<T>;

  options<T>(
    url: string,
    config?: RequestInit,
  ): Promise<T>;

  post<T>(
    url: string,
    data?: unknown,
    config?: RequestInit,
  ): Promise<T>;

  put<T>(
    url: string,
    data?: unknown,
    config?: RequestInit,
  ): Promise<T>;

  patch<T>(
    url: string,
    data?: unknown,
    config?: RequestInit,
  ): Promise<T>;
}

class Service {
  public http: HTTPInstance

  private baseURL: string

  private headers: Record<string, string>

  constructor() {
    // this.baseURL = `https://morning-badlands-42969-319cd5b52254.herokuapp.com/api`
    this.baseURL = `http://localhost:1337/api`
    this.headers = {
      csrf: 'token',
      Referer: this.baseURL,
      Authorization: 'bearer 4a58b85c6fed1e1980b4623afc3033a48f348f1f5cfe5ee5259c580cbd8dd8ef8b3395d17771731b87a610abe34b254c26ca0077c6cb5f9a228c639ba3af7802a8ea1bdf94dd6354f1d9cd36773b9bd5fd8dbb9faffd96d2529210daf4fe0ac8a0a362d15122c6bf240e84c2e28d89a7fc950561a9dc28109c87ae1c3953262e',
    }
    this.http = {
      get: this.get.bind(this),
      delete: this.delete.bind(this),
      head: this.head.bind(this),
      options: this.options.bind(this),
      post: this.post.bind(this),
      put: this.put.bind(this),
      patch: this.patch.bind(this),
    }
  }

  private async request<T = unknown>(
    method: string,
    url: string,
    data?: unknown,
    config?: RequestInit,
  ): Promise<T> {
    try {
      const response = await fetch(this.baseURL + url, {
        method,
        headers: {
          ...this.headers,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          ...config?.headers,
        },
        credentials: 'include',
        body: data ? JSON.stringify(data) : undefined,
        ...config,
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const responseData: T = await response.json()
      return responseData
    } catch (error) {
      console.error('Error:', error)
      throw error
    }
  }

  private get<T>(
    url: string,
    config?: RequestInit,
  ): Promise<T> {
    return this.request<T>('GET', url, undefined, config)
  }

  private delete<T>(
    url: string,
    config?: RequestInit,
  ): Promise<T> {
    return this.request<T>('DELETE', url, undefined, config)
  }

  private head<T>(
    url: string,
    config?: RequestInit,
  ): Promise<T> {
    return this.request<T>('HEAD', url, undefined, config)
  }

  private options<T>(
    url: string,
    config?: RequestInit,
  ): Promise<T> {
    return this.request<T>('OPTIONS', url, undefined, config)
  }

  private post<T>(
    url: string,
    data?: unknown,
    config?: RequestInit,
  ): Promise<T> {
    return this.request<T>('POST', url, data, config)
  }

  private put<T>(
    url: string,
    data?: unknown,
    config?: RequestInit,
  ): Promise<T> {
    return this.request<T>('PUT', url, data, config)
  }

  private patch<T>(
    url: string,
    data?: unknown,
    config?: RequestInit,
  ): Promise<T> {
    return this.request<T>('PATCH', url, data, config)
  }
}

export default Service
