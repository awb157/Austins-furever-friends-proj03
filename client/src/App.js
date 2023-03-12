import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";
import BodyMid from "./pages/BodyMid";
import Body from "./pages/Body";
import Footer from "./components/Footer";
import Dogs from "./pages/Dogs";
import Cats from "./pages/Cats";
import LoggedIn from "./pages/LoggedIn";
import InitialLoad from "./pages/InitialLoad";
import About from "./pages/About";
import NewUser from "./pages/NewUser";
import ReturnUser from "./pages/ReturnUser";
import LunaDogCardOpened from "./pages/LunaDogCardOpened";
import LokiDogCardOpened from "./pages/LokiDogCardOpened";
import CharlieDogCardOpened from "./pages/CharlieDogCardOpened";
import MiloCatCardOpened from "./pages/MiloCatCardOpened";
import OliverCatCardOpened from "./pages/OliverCatCardOpened";
import WhiskeyCatCardOpened from "./pages/WhiskeyCatCardOpened";
import AdoptForm from "./pages/AdoptForm";
import TopNav from "./components/TopNav";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <TopNav />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/returnuser" element={<ReturnUser />} />
          <Route path="/lunadog" element={<LunaDogCardOpened />} />
          <Route path="/lokidog" element={<LokiDogCardOpened />} />
          <Route path="/charliedog" element={<CharlieDogCardOpened />} />
          <Route path="/whiskeycat" element={<WhiskeyCatCardOpened />} />
          <Route path="/milocat" element={<MiloCatCardOpened />} />
          <Route path="/olivercat" element={<OliverCatCardOpened />} />
          <Route path="/adoptform" element={<AdoptForm />} />
          <Route path="/loggedin" element={<LoggedIn />} />
          <Route path="/" element={<InitialLoad />} />
        </Routes>
        <BodyMid />
        <Body />
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
