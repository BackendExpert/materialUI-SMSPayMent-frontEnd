import React from 'react'
import { TextField } from '@mui/material'

const TextFeildInput = ({ InputType, PlaceText, TextColor, BorderColor, value, onChange, name }) => {
  return (
    <TextField
        label={PlaceText}
        type={InputType}
        value={value}
        name={name}
        onChange={onChange}
        variant="outlined"
        className="w-full"
        sx={{
        '& .MuiInputLabel-root': {
            color: TextColor, 
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: TextColor, // Label color when focused
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            borderColor: BorderColor, // Default border color
            },
            '&:hover fieldset': {
            borderColor: BorderColor, // Border color on hover
            },
            '&.Mui-focused fieldset': {
            borderColor: BorderColor, // Border color when focused
            },
            '& input': {
            color: '#212121', // Default text color
            },
            '&.Mui-focused input': {
            color: TextColor, // Text color when focused
            },
        },
        }}
    />
  )
}

export default TextFeildInput