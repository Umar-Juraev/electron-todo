'use client'

import { TextField } from '@mui/material';
import { FC } from 'react'



type Props = {
  onEnter?: (event: React.KeyboardEvent<HTMLDivElement>) => void
}

const Input: FC<Props> = ({ onEnter }): JSX.Element => {
  return (
    <TextField
      label="Add a Todo"
      variant="outlined"
      fullWidth
      onKeyDown={(event) => event.key === 'Enter' && onEnter(event)}
    />
  )
}

export default Input
