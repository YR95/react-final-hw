import { ModalWrapp } from "./styled";
import { Paper } from "@mui/material";

export default function ModalWindow({ quiz }) {

  return (
    <ModalWrapp>
      <Paper style={{ width: '400px' }}>{quiz.desc}</Paper>
    </ModalWrapp>
  );
};