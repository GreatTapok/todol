import React from 'react'
import Grid from '@mui/material/Grid'
import {Link} from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={2}><Link to='/'>To-do List</Link></Grid>
        <Grid item xs={2}><Link to='/profile'>Profile</Link></Grid>
        <Grid item xs={2}><Link to='/smth' >Something</Link></Grid>       
      </Grid>
  </nav>
  )
}
