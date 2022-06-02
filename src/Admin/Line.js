import { Card, Grid, CardContent, Typography, Button, Toolbar, Link, Box } from '@mui/material'
import React from 'react'

function Line() {
    let key = Math.random().toString(36).replace(/[^a-zA-Z0-9$]{10,12}/).substring(2,10)
  return (
    <div style={{backgroundColor : '#f3f4f6', height : '100vh'}}>

    <Toolbar />
    {/* <Toolbar /> */}
        <Grid container  >
        <Grid item xs={11} md={6} lg={6} align="center" sx={{mx : 'auto'}}>
           <Card elevation={1} sx={{mx : 'auto', borderRadius : 5, border : '1px solid #d1d5db', width : {xs: 400, md : 600, lg : 600}}}>
                <CardContent>
                    <Box sx={{display : 'flex', alignItems : 'center', justifyContent : 'space-between'}}>
                        <Box sx={{display : 'flex', alignItems : 'center' }}>
                            <Card variant='contained' sx={{background : 'goldenrod', color : 'white', px : 3, py : 2, borderRadius : 2, fontWeight : 'bold'}}>S</Card>
                            <Typography sx={{color : 'goldenrod', fontSize : '16', marginLeft : 2}}>Starbucks</Typography>
                        </Box>
                        <Box>
                            <Typography >No</Typography>
                            <Typography color="primary">{Math.round(Math.random())}</Typography>
                        </Box>
                    </Box>
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