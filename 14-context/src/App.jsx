import { useContext } from "react";
import UserContext from "./UserContext";

export default function App() {
  return (
    <>
      <UserContext.Provider value={"Fernando"}>
        <FirstParent />
      </UserContext.Provider>
    </>
  );
}

function FirstParent() {
  return (
    <>
      <SecondParent />
    </>
  );
}

function SecondParent() {
  return (
    <>
      <ThirdParent />
    </>
  );
}

function ThirdParent() {
  return (
    <>
      <LastComponent />
    </>
  );
}

function LastComponent() {
  const userName = useContext(UserContext);
  return (
    <>
      <h4>The original name is {userName}</h4>
    </>
  );
}
