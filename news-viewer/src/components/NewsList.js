import React from "react"
import styled from "styled-components"
import NewsItem from "./NewsItem"
import axios from "axios"
import usePromsie from "../lib/usePromise"

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

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromsie(() => {
    const query = category === "all" ? "" : `&category=${category}`
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${API_KEY}`
    )
  }, [category])

  if (loading) {
    return <NewsListBlock>대기 중 ...</NewsListBlock>
  }

  if (!response) {
    return null
  }

  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>
  }

  const { articles } = response.data

  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem article={article} key={article.url} />
      ))}
    </NewsListBlock>
  )
}

export default NewsList
