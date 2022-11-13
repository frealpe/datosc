import { StarOutline } from '@mui/icons-material'
import {Grid} from '@mui/material'

export const NothingSelectedView = () => {
  return (
    
    <Grid 
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{
          minHeight:1500,
          minWidth: 300,
          backgroundColor:'primary.main',
        }}
    >
      <Grid item xs={12}>
          <StarOutline/>
      </Grid>

    </Grid>
          
  )
}



          /* {/* minHeight:'calc(10vh-110px)',  }
          backgroundColor:'primary.main', */