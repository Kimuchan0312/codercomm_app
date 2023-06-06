import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editPost } from './postSlice';
import { TextField, Button, Stack } from '@mui/material';

function PostEdit({ postId, initialContent, onClose }) {
    const [content, setContent] = useState(initialContent);
    const dispatch = useDispatch();
  
    const handleContentChange = (e) => {
      setContent(e.target.value);
    };
  
    const handleEditPost = () => {
      dispatch(editPost({ postId, content }));
      onClose();
    };
  
    return (
      <Stack spacing={2}>
        <TextField
          multiline
          rows={6}
          variant="outlined"
          value={content}
          onChange={handleContentChange}
        />
        <Button variant="contained" onClick={handleEditPost}>
          Save
        </Button>
      </Stack>
    );
  }
  
  export default PostEdit;