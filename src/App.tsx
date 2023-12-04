import {Content} from "./components/Content";
import {Form} from "./components/Form";
import {Flex} from "./StyledItems";

function App() {
  const smallScreen = window.innerWidth<450;
  return (
    <>
    <Flex width="100%" height="100vh" justifyContent="space-between">
      {smallScreen ? <Form/> : (<><Content /><Form /></>)}
      
    </Flex>
    </>
  )
}

export default App
