import { renderHook, act } from '@testing-library/react-hooks'
import useForm from './hook'

const setup = (params) => {
  const { result } = renderHook(() => useForm(params))
  return result
}

test('should change the keyword', () => {
  const result = setup()

  act(() => {
    result.current.changeKeyword({ keyword: 'batman' })
  })

  expect(result.current.keyword).toBe('batman')
})

test('should use the initial values', () => {
  const result = setup({ initialKeyword: 'avengers' })

  expect(result.current.keyword).toBe('avengers')
  expect(result.current.rating).toBe('g')
})
