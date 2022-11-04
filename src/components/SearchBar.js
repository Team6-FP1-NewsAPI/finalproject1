import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <Form className="d-flex">
      <Form.Control type="text" value={search} required placeholder="Search..." className="me-3" aria-label="Search" onChange={(item) => setSearch(item.target.value)} />
      <Button
        variant="outline-success"
        type="submit"
        style={{ width: "150px" }}
        onClick={() => {
          onSearch(search);
          navigate(`/search/${search}`);
        }}
      >
        Cari berita
      </Button>
    </Form>
  );
};

export default SearchBar;
