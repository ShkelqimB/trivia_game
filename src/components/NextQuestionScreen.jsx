import React from 'react'
// Materail UI
import { Box, Button, Grid, Icon } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const NextQuestionScreen = ({classes,setCurrentQuestion,currentQuestion,setFormat}) => {
    return (
        <Box textAlign="center" width={"100%"}>
     <Icon><ThumbUpIcon style={{width:200, height:400,color:"white"}}></ThumbUpIcon></Icon>
      <Grid item xs={12}><Button color="secondary" variant="contained" className={classes.buttonStyle} onClick={() => {setCurrentQuestion(++currentQuestion);setFormat(1)}}>Next</Button></Grid>
    </Box>
    )
}

export default NextQuestionScreen
