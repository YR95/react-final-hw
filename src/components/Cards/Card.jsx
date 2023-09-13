import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";
import ModalWindow from '../Modal/Modal';
// import ModalWindow from "../Modal/ModalWindow";

export default function CardItem({ quiz }) {
  const [isShowModal, setShowModal] = useState(false);
  const [isShowModal1, setShowModal1] = useState(true);

  const handleShowModal = () => {
    setShowModal(!isShowModal);
  };
  const handleShowModal1 = () => {
    setShowModal1(!isShowModal1);
  };
  return (
    <>
      <Card sx={{ maxWidth: 445, padding:10, backgroundColor: 'rgba(102,191,191,0.09)', boxShadow:12, margin:3}}>
        <CardMedia
          sx={{ height: 400 }}
          image={quiz.img}
          title={quiz.quiz}
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {quiz.quiz}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {quiz.desc.slice(0, 100)}...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium">Share</Button>
          <Button size="medium" onClick={handleShowModal}>Learn More</Button>
        </CardActions>
      </Card>
      {isShowModal && <ModalWindow quiz={ quiz } />}
    </>
  );
}