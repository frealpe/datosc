import { SaveAsOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"


export const NoteView = () => {

    
  return (
    <Grid 
      container 
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{mb:2}}>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>
                
            </Typography>
        </Grid>

        <Grid item>
            <Button color="primary" sx={{padding:2}}>
              <SaveAsOutlined
                sx={{fontSize:30,mr:1}}
              />
              Guardar
            </Button>
        </Grid>

        <Grid container>
          <TextField
              type="text"
              variant="filled"
              fullWidth
              placeholder="ingresar todolo "
              label="titulo"
              sx={{border:'none', mb:'1'}}
          />

          <TextField
              type="text"
              variant="filled"
              fullWidth
              multiline
              placeholder="Qeu paso en el dia de hoy "
              //label="Titulo"
              minRows={5}
          />

          <ImageGallery/>

        </Grid>
      
    </Grid>
  )
}
