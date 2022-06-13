import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";
export default class searchBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { searchval, onChange, handleData } = this.props;
    const KEY = "AIzaSyATODTy1dTlWwMBXey2_Mgve6t60IPo0Bk";
    const handleClick = async (term) => {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            part: "snippet",
            key: KEY,
            maxResults: 10,
            q: searchval,
          },
        }
      );
      console.log(res);
      handleData(res);
    };
    return (
      <div>
        <Input
          placeholder="search..."
          value={searchval}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          size="large"
        />
        <Button size="large" primary content="search" onClick={handleClick} />
      </div>
    );
  }
}
