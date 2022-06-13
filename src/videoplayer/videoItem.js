import React, { Component } from "react";
import { Grid, GridColumn, Image, Divider, Segment } from "semantic-ui-react";
export default class videoItem extends Component {
  render() {
    const { item, onvideoselect } = this.props;
    console.log(item);
    return (
      <Grid onClick={() => onvideoselect(item)} key={item?.id?.videoId}>
        <Grid.Row columns={2}>
          <GridColumn>
            <Image
              src={item?.snippet?.thumbnails?.high?.url}
              alt="list-img"
              size="medium"
            />
          </GridColumn>
          <GridColumn>
            <h4>{item?.snippet?.title}</h4>
          </GridColumn>
        </Grid.Row>
      </Grid>
    );
  }
}
