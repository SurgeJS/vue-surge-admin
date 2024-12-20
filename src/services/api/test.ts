import type { Ref } from 'vue'
import paginationQuery from '@/hooks/service/pagination-query.ts'
import fakeService from '@/services/request/serves/fake'

interface test {
  list: any[]
  total: number
}

export class TestApi {
  static getTodoList = (query: PaginationParams<Recordable>) => fakeService.post('/getTodos', query)

  static useTodoList = (query: Ref<PaginationParams<Recordable>>) =>
    paginationQuery<test>(query, 'todos', this.getTodoList as any)
}
