import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizonIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";

import useStyles from "./styles";

const Post = ({ post }) => {
  const { selectedFile, creator, createdAt, tags, message, likeCount } = post;

  const classes = useStyles();
  const {
    card,
    media,
    border,
    cardActions,
    details,
    fullHeightCard,
    grid,
    overlay,
    overlay2,
    title,
  } = classes;

  return (
    <Card className={card}>
      <CardMedia className={media} image={selectedFile} />
      <div className={overlay}>
        <Typography variant="h6">{creator}</Typography>
        <Typography variant="body2">{moment(createdAt).fromNow()}</Typography>
      </div>
      <div className={overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => {}}>
          <MoreHorizonIcon fontSize="medium" />
        </Button>
      </div>
      <div>
        <Typography variant="body2" color="textSecondary">
          {tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <CardContent>
        <Typography className={title} vatiant="h5" gutterBottom>
          {message}
        </Typography>
        <CardActions className={cardActions}>
          <Button size="small" color="primary" onClick={() => {}}>
            <ThumbUpAltIcon fontSize="small" />
            Like
            {likeCount}
          </Button>
          <Button size="small" color="primary" onClick={() => {}}>
            <DeleteIcon fontSize="small" />
            Delete
            {likeCount}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Post;
