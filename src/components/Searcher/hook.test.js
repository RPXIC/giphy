import { act, renderHook } from '@testing-library/react-hooks'
import useForm from './hook'

const setup = (params) => renderHook(() => useForm(params))

test('should change keyword', () => {
    const { result } = setup()

    act(() => {
        result.current.updateLanguage('es')
    })

    expect(result.current.language).toBe('es')
})

test('should use initial values', () => {
    const { result } = setup({initialRating: 'g'})

    expect(result.current.rating).toBe('g')
})