import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const CustomizeButton = withStyles(() => ({
    root: {
      borderRadius: 25,width:350,height:55,margin:10,fontWeight:900,color:"white", boxShadow: "none",backgroundColor: "rgba(0, 0, 0, 0.12)",
      '&:hover': {
        boxShadow: "none",backgroundColor: "rgba(0, 0, 0, 0.12)",
      },
    },
  }))(Button);
export default CustomizeButton;
