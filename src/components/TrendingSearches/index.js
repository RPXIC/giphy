import React, { useState, useEffect } from 'react'
import getTrendingGifs from 'services/getTrendingGifs'
import { Category } from 'components'

export default () => {
    const [ trends, setTrends ] = useState()
    
    useEffect(() => {
        (async () => {
            const gifs = await getTrendingGifs()
            setTrends(gifs)
        })()
    },[])
    
    return <Category name='Trendings' options={trends}/>
}