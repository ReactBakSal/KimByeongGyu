import React, { useState, useEffect } from "react"
import styled from "styled-components"
import NewsItem from "./NewsItem"
import axios from "axios"

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const API_KEY = "2e2682361adc4777a97f72b81f6bbb00"

const NewsList = () => {
  const [articles, setArticles] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`
        )

        setArticles(response.data.articles)
      } catch (e) {
        console.error(e)
      }
      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) {
    return <NewsListBlock>대기 중 ...</NewsListBlock>
  }

  if (!articles) {
    return null
  }

  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem article={article} key={article.url} />
      ))}
    </NewsListBlock>
  )
}

export default NewsList
