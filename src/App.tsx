import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 130px;
  background-color: #EF76D9;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  margin-left: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Div = styled(motion.div)`
  display: grid;
  grid-template-columns: 
  repeat(2, 1fr );
`

const Circle = styled(motion.div)`
  background-color: white;
  height: 50px;
  width: 50px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.6);
`

const hoverVariants={
  hover:{scale: 1.2}
}

const Button = styled.button`
  margin-top: 30px;
`

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = ()=> setClicked((prev)=> ! prev);
  return (
    <Wrapper>
      <Div>
        <Box variants={hoverVariants} whileHover={"hover"} style={{originX:1, originY:1}}/>
        <Box>
          {!clicked ?(
            <Circle layoutId="circle" style={{borderRadius:50}}/>
          ): null}
        </Box>
        <Box>
          {clicked ? (
            <Circle layoutId="circle" style={{borderRadius: 50}} />
          ):null}
        </Box>
        <Box variants={hoverVariants} whileHover={"hover"} style={{originX:0, originY:0}}/>
      </Div>
        <Button onClick={toggleClicked} >switch</Button>
        </Wrapper>
);
}

export default App;