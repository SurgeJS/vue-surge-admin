import type { Ref } from 'vue'
import usePaginationQuery from '@/hooks/service/use-pagination-query.ts'
import fakeService from '@/services/request/serves/fake'

interface test {
  list: any[]
  total: number
}

export class TestApi {
  static getTodoList = (query: PaginationParams<Recordable>) => fakeService.post('/getTodos', query)

  static useTodoList = (query: Ref<PaginationParams<Recordable>>) =>
    usePaginationQuery<test>(query, 'todos', this.getTodoList as any)
}
