import React from 'react'
import { Button } from '@mui/material'

const FormButton = ({ ButtonText, TypeButton }) => {
  return (
    <Button 
        type={TypeButton}
        variant="contained" 
        className='w-full h-12'
        sx={{ 
            backgroundColor: '#6C63FF', 
            color: '#FFFFFF',
            '&:hover': {
            backgroundColor: '#6C63FF',
            }
        }}
        >
        {ButtonText}
    </Button>
  )
}

export default FormButton