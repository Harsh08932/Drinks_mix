import React from "react";
import Wrapper from "../assets/wrappers/SearchForm";
import { Form, useNavigation } from "react-router-dom";
const SearchForm = ({SearchTerm}) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form" method="get">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue={SearchTerm === "all" ? "" : SearchTerm}
          placeholder="search cocktails"
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Searching..." : "search"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
