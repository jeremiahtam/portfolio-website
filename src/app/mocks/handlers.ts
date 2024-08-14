import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get(
    'https://jsonplaceholder/typicode.com/users',
    ({ request, params, cookies }) => {
      return HttpResponse.json(
        [{ name: 'Mark' }, { name: 'Mark' }, { name: 'Mark' }],
        {
          status: 200,
        },
      )
    },
  ),
]
