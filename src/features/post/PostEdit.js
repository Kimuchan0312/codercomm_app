import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { editPost } from './postSlice';
import { TextField, Button, Stack } from '@mui/material';
import { FUploadImage } from "../../components/form";
import { FormProvider, useForm } from 'react-hook-form';


function PostEdit({ postId, initialContent, onClose }) {
    const [content, setContent] = useState(initialContent);
    const dispatch = useDispatch();
  
    const handleContentChange = (e) => {
      setContent(e.target.value);
    };
  
    const handleEditPost = () => {
      dispatch(editPost({ postId, content, image: methods.getValues("image") })); 
      onClose();
    };

  const methods = useForm();
  const {
    setValue,
  } = methods;

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          "image",
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );
  
    return (
      <FormProvider {...methods}>
      <Stack spacing={2}>
        <TextField
          multiline
          rows={6}
          variant="outlined"
          value={content}
          onChange={handleContentChange}
        />

         <FUploadImage
            name="image"
            accept="image/*"
            maxSize={3145728}
            onDrop={handleDrop}
          />

        <Button variant="contained" onClick={handleEditPost}>
          Save
        </Button>
      </Stack>
      </FormProvider>
    );
  }
  
  export default PostEdit;