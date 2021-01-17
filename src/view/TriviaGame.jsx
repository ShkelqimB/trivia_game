import React,{useState} from "react";

// Materail UI
import { Box, Button, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

// Axios
import axios from "axios";

// Components
import CustomizeButton from "../components/CustomizeButton"
import PlayScreen from "../components/PlayScreen";
import WrongAnswerScreen from "../components/WrongAnswerScreen";
import NextQuestionScreen from "../components/NextQuestionScreen";

// Sounds
import changeMode from "../sounds/ui_tap-variant-01.wav";
import play from "../sounds/ui_unlock.wav";


const theme = createMuiTheme();

theme.typography.h1 = {
  fontSize: '2.2rem',
  '@media (min-width:600px)': {
    fontSize: '3.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '5rem',
  },
};

theme.typography.h4 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(() => ({
  buttonStyle:{
    borderRadius: 25,width:350,height:55,margin:10,fontWeight:900,color:"white",
  },
  TittleAndSubtitle:{
    fontWeight:900,color:"white",margin:10
  }
}));

const TriviaGame = () => {
  const classes = useStyles();
  const changeModeAudio = new Audio(changeMode);
  const playAudio = new Audio(play);

  const [format,setFormat] = useState(0); //0 - Default form, 1- PLAY , 2- Failed , 3-  NextQuestion
  let [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState();
  const [loading,setLoading] = useState(false);
  const [mode, setMode] = useState('easy');
  const [error, setError] = useState();

  const changeModeHandler = (type) => {
    playSound(changeModeAudio)
    setMode(type);
  }

  const playSound = audioFile => {
    audioFile.play();
  };

  const getQuestion = async() => {
    setLoading(true);
    try{
      const res = await axios.get(`https://opentdb.com/api.php?amount=5&category=15&difficulty=${mode}`);
      setQuestions(res.data.results);
      playSound(playAudio)
      setLoading(false);
      setFormat(1);
    } catch(err) {
      setError(err.message)
      setLoading(false);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Snackbar open={error} autoHideDuration={6000} onClose={()=>setError()} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
  <Alert onClose={()=>setError()} severity="error">
    {error && error}
  </Alert>
</Snackbar>
      {format === 0 ? 
        <Box textAlign="center" width={"100%"} >
          <Grid item xs={12}><Typography variant="h1" className={classes.TittleAndSubtitle} style={{marginBottom:30}}>TriviaTime</Typography></Grid>
          <Grid item xs={12}><Typography variant="h4" className={classes.TittleAndSubtitle} >Pick your level of difficulty</Typography></Grid>
          <Grid item xs={12}><CustomizeButton color="primary" variant="contained" onClick={()=>changeModeHandler('easy')} startIcon={mode === 'easy' && <StarIcon color="secondary" fontSize="large"/>}>Go easy on me</CustomizeButton></Grid>
          <Grid item xs={12}><CustomizeButton color="primary" variant="contained" onClick={()=>changeModeHandler('medium')} startIcon={mode === 'medium' && <StarIcon color="secondary" fontSize="large"/>} >Bring it on</CustomizeButton></Grid>
          <Grid item xs={12}><CustomizeButton color="primary" variant="contained" onClick={()=>changeModeHandler('hard')} startIcon={mode === 'hard' && <StarIcon color="secondary" fontSize="large"/>}>Insanity mode</CustomizeButton></Grid>
          <Grid item xs={12}><Button color="secondary" variant="contained" className={classes.buttonStyle} onClick={() => getQuestion()} endIcon={loading && <CircularProgress color="primary" />} >Play Now</Button></Grid>
        </Box>  
      : format === 1 && questions ? // Play Screen
          <PlayScreen classes={classes} questions={questions} currentQuestion={currentQuestion} setFormat={setFormat} setCurrentQuestion={setCurrentQuestion} setQuestions={setQuestions}/>
        : format === 2 ? // Wrong Answer
          <WrongAnswerScreen classes={classes} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} setFormat={setFormat} setQuestions={setQuestions}/>
       : format === 3 ? // NextQuestionScreen
          <NextQuestionScreen classes={classes} setCurrentQuestion={setCurrentQuestion} currentQuestion={currentQuestion} setFormat={setFormat}/>
       :  null }
     </ThemeProvider>
  );
}

export default TriviaGame;


