import React from 'react'
import { Card } from '@mui/material'

const CardArt = ({ art }) => {
  return (
    <Card sx={{ maxWidth: 300 }} >
        <img src={art.primaryImageSmall || art.primaryImage} alt=''/>
    </Card>
  )
}

export default CardArt