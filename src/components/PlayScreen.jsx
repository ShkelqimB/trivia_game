import React from 'react'
// NPM packages
import ReactHtmlParser from 'react-html-parser';

// Components
import CustomizeButton from "./CustomizeButton"

// Material UI
import { Box, Button, Grid, Typography } from '@material-ui/core'

const PlayScreen = ({classes,questions,currentQuestion,setFormat, setCurrentQuestion,setQuestions}) => {

  const backToMainScreen = () => {
    setCurrentQuestion(0); setQuestions(); setFormat(0);
  }

    return (
        <Box textAlign="center" width={"100%"}>
        <Grid item xs={12}><Typography variant="h4" className={classes.TittleAndSubtitle}>{questions[currentQuestion] ? ReactHtmlParser(questions[currentQuestion].question) : null }</Typography></Grid>
       {questions[currentQuestion]?.incorrect_answers?.map((res,index)=> (
         <Grid item xs={12} key={index}><CustomizeButton color="primary" variant="contained" onClick={() => setFormat(2)}>{res}</CustomizeButton></Grid>
       ))}
        {currentQuestion <= 4 && 
        <Grid item xs={12}><CustomizeButton color="primary" variant="contained" onClick={() => setFormat(3)}>{questions[currentQuestion] ? questions[currentQuestion].correct_answer : null}</CustomizeButton></Grid>
        }
        {currentQuestion === 5 && <>
          <Grid item xs={12}><Typography variant="h1" className={classes.TittleAndSubtitle}>Your score is: {currentQuestion}/{currentQuestion} </Typography></Grid>
          <Grid item xs={12}><Button color="secondary" variant="contained" className={classes.buttonStyle} onClick={() => backToMainScreen()}>Try Again</Button></Grid>
        </>
        }
        <Typography variant="caption" style={{color:"white",fontWeight:900}}>{currentQuestion + "/" + questions.length}</Typography> 
        </Box>
    )
}

export default PlayScreen
