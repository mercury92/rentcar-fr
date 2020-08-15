import React,{useState} from "react";
import "./App.css";
import PrivateRoutes from "./components/private-routes/PrivateRoutes";
import localStorageService from "./services/localStorageService";


function App() {
  const [role,setRole] = useState(localStorageService.getRole());

  return (
    <PrivateRoutes role = {role} setRole={setRole}/>
  );
}

export default App;
