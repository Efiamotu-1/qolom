import { Card, Grid, CardContent, Typography, CardActions, Button, Toolbar, Link, Box } from '@mui/material'
import { height } from '@mui/system'
import React from 'react'

function Line() {
    let key = Math.random().toString(36).replace(/[^a-zA-Z0-9$]{10,12}/).substring(2,10)
  return (
    <div style={{backgroundColor : 'gray', height : '100vh'}}>

    <Toolbar />
    <Toolbar />
        <Grid container  >
        <Grid xs={11} md={6} lg={6} align="center" sx={{mx : 'auto'}}>
           <Card elevation={5} sx={{mx : 'auto', borderRadius : 5, width : {xs: 400, md : 600, lg : 600}}}>
                <CardContent>
                    <Typography sx={{ fontSize: 18, mb : '1px'}} color="blue" >
                        Coffee Line
                    </Typography>
                    <Typography variant="body2" color="gray">
                       key is <span style={{color : 'blue'}}>{key}</span>         
                    </Typography>

                    <Typography sx={{ fontSize: 12, fontWeight : 'bold', my :1}} color="green">
                       OPEN        
                    </Typography>

                    <Typography sx={{ fontSize: 12, color : 'gray', my:1}}>
                       closes by 11:59 PM       
                    </Typography>

                    <Typography variant="h6" color="goldenrod">
                       About        
                    </Typography>

                    <Typography paragraph > 
                       Please wait in line to get coffee      
                    </Typography>

                    <Typography variant="h6" color="goldenrod">
                       Instruction       
                    </Typography>

                    <Typography variant="body2">
                      Be Available before its your turn      
                    </Typography>

                    <Box sx={{display : 'flex', mx : 4, justifyContent : 'space-between', alignItems : 'center'}}>
                    <Link underline='hover' href="">show recently removed</Link>
                    <Button  variant="contained">Show ID</Button>
                    </Box><br/>

                    <Card elevation={5} sx={{mx : 4}}>
                        <CardContent align="center" >
                            <Typography color="goldenrod">
                                Nobody in Line
                            </Typography>
                        </CardContent>
                    </Card>
                </CardContent>
            
            </Card>
        </Grid>
        </Grid>
    </div>
  )
}

export default Line