import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import VideoItem from "./videoItem";
export default class videoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onvideoselect } = this.props;
    return (
      <div className="video-list">
        {this.props.data?.data?.items?.map((item) => {
          return <VideoItem item={item} onvideoselect={onvideoselect} />;
        })}
      </div>
    );
  }
}
