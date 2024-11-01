import './CSS/styles.css'
import ContextProvider from "./Contexts/Context";
import MainComponent from "./Components/MainComponent";


function App() {
  return (
      <ContextProvider>
         <MainComponent />
      </ContextProvider>
  )
}


export default App




