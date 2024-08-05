export type Strapis<T> = {
  data: { id: number; attributes: T }[]
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number
    }
  }
}

export type Strapi<T> = {
  data: { id: number; attributes: T }
}
