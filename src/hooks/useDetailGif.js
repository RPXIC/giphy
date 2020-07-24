import useGifs from 'hooks/useGifs'
import { useState, useEffect } from 'react'
import getDetailGif from 'services/getDetailGif'

export default function useDetailGif ({ id }) {
    const { gifs } = useGifs()
    const gifFromCache = gifs.find(gif => gif.id === id)

    const [ gif, setGif ] = useState(gifFromCache)
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)

    useEffect(() => {
        (async()=>{
            if (!gif) {
                try {
                    setLoading(true)
                    const data = await getDetailGif({ id })
                    setGif(data)
                    setLoading(false)
                } catch (error) {
                    setLoading(false)
                    setError(true)
                }
            }
        })()
    }, [gif, id])

    return {gif, loading, error}
}