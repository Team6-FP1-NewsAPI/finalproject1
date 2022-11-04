import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const SearchBar = ({ placeholder, articles }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = articles.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <Form className="d-flex">
      <Form.Control type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} className="me-3" aria-label="Search" />
      {filteredData.length === 0 ? (
        <Button variant="outline-success" style={{ width: "150px" }}>
          Cari berita
        </Button>
      ) : (
        <Button variant="outline-danger" style={{ width: "150px" }} onClick={clearInput}>
          Hapus
        </Button>
      )}
    </Form>
  );
};

export default SearchBar;
