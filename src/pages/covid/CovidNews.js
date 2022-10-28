import { useState, useEffect } from "react";
import NewsCard from "../../components/NewsCard";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const CovidNews = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const key = `e514fbc0b0714c5a914615a4720158c1`;
    const category = `q=covid`;
    const endpoints = `/v2/top-headlines`;
    const api = `https://newsapi.org${endpoints}?${category}&apiKey=${key}`;

    const fetchData = async () => {
      const res = await axios.get(api);
      console.log(res);
      setArticles(res.data.articles);
    };

    fetchData();
  }, []);

  return (
    <Container fluid="md" style={{ paddingLeft: "55px" }}>
      <Row>
        {articles.map((article) => {
          return <NewsCard source={article.source.name} title={article.title} author={article.author} description={article.description} url={article.url} urlToImage={article.urlToImage} />;
        })}
      </Row>
    </Container>
  );
};

export default CovidNews;
