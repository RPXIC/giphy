import { useContext, useEffect, useState } from 'react'
import getGifs from 'services/getGifs'
import GifsContext from 'Context/GifsContext'

const INITIAL_PAGE = 0

export default ({ keyword, rating, language } = { keyword: null }) => {
    const [ loading, setLoading ] = useState(false)
    const [ loadingNextPage, setLoadingNextPage ] = useState(false)
    const { gifs, setGifs } = useContext(GifsContext)
    const [ page, setPage ] = useState(INITIAL_PAGE)

    const keywordToUse = keyword || localStorage.getItem('lastKeyword')

    useEffect(() => {
        (async() => {
            setLoading(true)
            const _gifs = await getGifs({ keyword: keywordToUse, rating, language })
            setGifs(_gifs)
        })()
        setLoading(false)
        localStorage.setItem('lastKeyword', keyword)
    }, [ keyword, setGifs, keywordToUse, rating, language ])

    useEffect(() => {
        if (page === INITIAL_PAGE) return

        setLoadingNextPage(true)

        getGifs({ keyword: keywordToUse, rating, language, page })
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadingNextPage(false)
            })
    }, [ keywordToUse, rating, language, page, setGifs ])

    return { loading, loadingNextPage, gifs, setPage, language }
}
