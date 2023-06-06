import React, { useState } from "react";
import { deleteComment } from "./commentSlice";
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';

const CommentDelete = ({ commentId }) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteButtonClick = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteConfirmation = () => {
    dispatch(deleteComment(commentId));
    setIsDeleteDialogOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleDeleteButtonClick}>
        <DeleteIcon sx={{ fontSize: 25 }} />
      </IconButton>
      <Dialog
        open={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
      >
        <DialogTitle>Delete Comment</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this comment?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDeleteConfirmation} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CommentDelete;
