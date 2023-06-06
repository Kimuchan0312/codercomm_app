import React, { useState } from "react";
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { deletePost } from "./postSlice";
import DeleteIcon from '@mui/icons-material/Delete';


function PostDelete({ postId }) {
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const dispatch = useDispatch();
  
    const handleDeleteButtonClick = () => {
      setIsDeleteDialogOpen(true);
    };
  
    const handleDeleteConfirmation = () => {
      dispatch(deletePost(postId));
      setIsDeleteDialogOpen(false);
    };  

  return (
    <>
      <IconButton onClick={handleDeleteButtonClick}>
        <DeleteIcon sx={{ fontSize: 25 }} />
      </IconButton>
      <Dialog open={isDeleteDialogOpen} onClose={() => setIsDeleteDialogOpen(false)}>
        <DialogTitle>Delete Post</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this post?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDeleteConfirmation} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default PostDelete