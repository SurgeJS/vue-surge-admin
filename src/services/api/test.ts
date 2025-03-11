import fakeService from '@/services/serves/fake'

export class TestApi {
  static getTodoList = (query: PaginationParams<Recordable>) => fakeService.post('/getTodos', query)
}
