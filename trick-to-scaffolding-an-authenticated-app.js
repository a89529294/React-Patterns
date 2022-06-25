import * as React from "react";
import { useUser } from "./context/auth";

const AuthenticatedApp = React.lazy(() => import("./authenticated-app"));
const UnauthenticatedApp = React.lazy(() => import("./unauthenticated-app"));

function App() {
  const user = useUser();
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;

//Usually the <UnauthenticatedApp /> is just a login page
//Even better is the following, now the app loads faster for everyone
