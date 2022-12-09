// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
// import "../components/style.css";

// const API_KEY = "b83f27416312482db13d478b125f4bc8";
// const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=id&apiKey=";
// const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

// export default class Inews extends React.Component {
//   constructor() {
//     super();
//     this.state = { newsArr: [] };

//     render() {
//       console.log(this.state);
//       const fetchQueryNews = async () => {
//         const response = await fetch(SEARCH_NEWS + "a" + "&apiKey=" + API_KEY);
//         let newsDataArr = [];
//         if (response.status >= 200 && response.status < 300) {
//           const myJson = await response.json();
//           newsDataArr = myJson.articles;
//         }
//         return newsDataArr;
//       }

//       return (
//         <div>
//           <Navbar bg="dark" expand="lg">
//             <Container fluid>
//               <Navbar.Brand href="#">INEWS</Navbar.Brand>
//               <Navbar.Toggle aria-controls="navbarScroll" />
//               <Navbar.Collapse id="navbarScroll">
//                 <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
//                 <Form className="d-flex">
//                   <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" id="newsQuery" />
//                   <Button variant="outline-success" id="searchBtn">
//                     Search
//                   </Button>
//                 </Form>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//           <div>
//             {/* <div ClassName="row m-3" id="newsType"></div>
//           <div ClassName="row me-2 ms-2" id="newsdetails"></div> */}
//             <div>
//               {this.state.newsArr.map((data) => (
//                 <h1>{data.title}</h1>
//               ))}
//               <button
//                 onClick={() =>
//                   fetchQueryNews().then(data => {
//                     console.log(data);
//                     this.setState({ newsArr: data });
//                   })
//                 }
//               >
//                 {" "}
//                 test
//               </button>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
// }
