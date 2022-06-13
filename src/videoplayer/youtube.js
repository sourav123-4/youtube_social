import React, { Component } from "react";
import Searchbar from "./searchBar";
import Videodetails from "./videoDetails";
import Videolist from "./videoList";
import { Grid } from "semantic-ui-react";
export default class youtube extends Component {
  state = { searchval: "", data: [], selectedVideo: null };
  handleChange = (value) => {
    this.setState({ searchval: value });
  };
  handleData = (res) => {
    this.setState({
      data: res,
      selectedVideo: res?.data?.items[0],
    });
  };
  onvideoselect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    console.log(this.state.data);
    return (
      <Grid centered padded>
        <Grid.Row centered>
          <Searchbar
            searchval={this.state.searchval}
            onChange={this.handleChange}
            handleData={this.handleData}
          />
        </Grid.Row>
        {this.state.data?.data && (
          <Grid.Row>
            <Grid.Column width={10}>
              <Videodetails video={this.state.selectedVideo} />
            </Grid.Column>
            <Grid.Column width={5}>
              <Videolist
                data={this.state.data}
                onvideoselect={this.onvideoselect}
              />
            </Grid.Column>
          </Grid.Row>
        )}
      </Grid>
    );
  }
}
