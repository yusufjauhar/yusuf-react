import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "b83f27416312482db13d478b125f4bc8";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=id&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

const NewsPortal = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(HEADLINES_NEWS + API_KEY);

        setArticles(response.data.articles);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="container">
      <div className="row">
        <NavNews />
        {articles.map((article) => {
          return (
            <div className="col-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={article.urlToImage} />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.author}</Card.Text>
                  <Card.Text>{article.description}</Card.Text> <br />
                  <Card.Footer>
                    <small className="text-muted">{article.publishedAt}</small>
                  </Card.Footer>{" "}
                  <br />
                  <a href={article.url}>
                    <Button variant="primary">Read more</Button>
                  </a>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );

  function NavNews() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">portal berita</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
              <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" id="newsQuery" />
                <Button variant="outline-success" id="searchBtn" onClick={handleSearch}>
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }

  async function handleSearch() {
    const searchQuery = document.getElementById("newsQuery").value;
    let searchUrl = SEARCH_NEWS + searchQuery + "&apiKey=" + API_KEY;

    try {
      const response = await axios.get(searchUrl);

      setArticles(response.data.articles);
    } catch (error) {}
  }
};

export default NewsPortal;
