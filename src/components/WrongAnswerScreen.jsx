import React, { useState,useEffect } from 'react'
import { Box, Button, Grid, Icon, Typography } from '@material-ui/core'
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const WrongAnswerScreen = ({classes,currentQuestion,setCurrentQuestion, setFormat,setQuestions}) => {
  const [showIcon,setShowIcon] = useState(true);

  useEffect(() => {
    setTimeout(() => {setShowIcon(false)}, 1000);    
  },[])

    const backToMainScreen = () => {
        setCurrentQuestion(0); setQuestions(); setFormat(0);
      }
    return (
        <Box textAlign="center" width={"100%"} marginTop="20%">
          {showIcon ? 
          <Icon><ThumbDownIcon style={{width:200, height:400,color:"white"}}></ThumbDownIcon></Icon> 
          :<>
          <Grid item xs={12}><Typography variant="h1" className={classes.TittleAndSubtitle} style={{fontSize:200}}>{currentQuestion}</Typography></Grid>
          <Grid item xs={12}><Button color="secondary" variant="contained" className={classes.buttonStyle} onClick={() => backToMainScreen()}>Try Again</Button></Grid>
          </>}
      </Box>
    )
}

export default WrongAnswerScreen
