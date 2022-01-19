import React from "react";
import Post from "./Post/Post";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "./styles";

const Posts = (props) => {
  const { setCurrentId } = props;

  const classes = useStyles();

  const posts = useSelector((state) => state.posts);

  console.table(posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid className={classes.maincontainer} container alignItems="stretch">
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
