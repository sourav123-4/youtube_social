import React, { Component } from "react";
import { faker } from "@faker-js/faker";
import { Button, Image } from "semantic-ui-react";
export default class videoDetails extends Component {
  render() {
    const { video } = this.props;
    const videosrc = `https://www.youtube.com/embed/${video?.id?.videoId}`;
    return (
      <div>
        <iframe src={videosrc} width="100%" height="500px" />
        <a># {video?.snippet?.publishTime}</a>
        <h2>{video?.snippet?.title}</h2>
        <hr />
        <div className="user">
          <div className="subscribe">
            <Image src={faker?.image?.avatar()} size="mini" circular />
            <h3>{video?.snippet?.channelTitle}</h3>
          </div>
          <div className="subdcribe">
            <Button content="join" basic color="blue" />
            <Button content="subscribe" color="youtube" />
          </div>
        </div>
        <h5>{video?.snippet?.description}</h5>
        <h5>{video?.snippet?.description}</h5>
        <h5>{video?.snippet?.description}</h5>
      </div>
    );
  }
}
