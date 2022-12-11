// import React, { Component } from "react";
// import axios from "axios";
// import { Card } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

// const API_KEY = "b83f27416312482db13d478b125f4bc8";
// const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=id&apiKey=";
// const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

// export default class NewsLifecycle extends Component {
// state = {
// articles: [],
// isLoading: true,
// error: null,
// };

// componentDidMount() {
// this.fetchData();
// }

// componentDidUpdate(prevProps, prevState) {
// if (prevState.articles !== this.state.articles) {
// this.handleSearch();
// }
// }

// fetchData = async () => {
// try {
// const response = await axios.get(HEADLINES_NEWS + API_KEY);
// this.setState({
//     articles: response.data.articles,
//   });
// } catch (error) {
//   this.setState({
//     error,
//   });
// } finally {
//   this.setState({
//     isLoading: false,
//   });
// }
// };
// handleSearch = async () => {
// const searchQuery = document.getElementById("newsQuery").value;
// let searchUrl = SEARCH_NEWS + searchQuery + "&apiKey=" + API_KEY;
// try {
//   const response = await axios.get(searchUrl);

//   this.setState({
//     articles: response.data.articles,
//   });
// } catch (error) {}
// };

// render() {
// const { articles, isLoading, error } = this.state;
// if (isLoading) {
//   return <p>Loading...</p>;
// }

// if (error) {
//   return <p>{error.message}</p>;
// }

// return (
//   <div className="container"> <div/>
//     <div className="row"> <div/>
//       <div>
//         <Navbar bg="light" expand="lg">
//           <Container fluid>
//             <Navbar.Brand href="#">portal berita</Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbarScroll" />
//             <Navbar.Collapse id="navbarScroll">
//               <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
//               <Form className="d-flex">
//                 <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" id="newsQuery" />
//                 <Button variant="outline-success" id="searchBtn" onClick={this.handleSearch}>
//                   Search
//                 </Button>
//   <div/>
//     <div/>
//       <div/>
