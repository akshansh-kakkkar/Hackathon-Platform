import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useUser, useAuth, AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import { loginUser, setAuthToken } from "./api/Api";
import HomeScreen from "./component/HomeScreen";

function App() {
  const { user, isSignedIn } = useUser();
  const { getToken } = useAuth();
  const hasSynced = useRef(false);

  useEffect(() => {
    if (isSignedIn && user && !hasSynced.current) {
      const syncUser = async () => {
        try {
          const token = await getToken();
          setAuthToken(token);
          
          await loginUser({
            name: user.fullName || user.username,
            email: user.primaryEmailAddress?.emailAddress,
            picture: user.imageUrl,
          });
          console.log("User synced with MongoDB");
          hasSynced.current = true;
        } catch (err) {
          console.error("Failed to sync user:", err);
        }
      };
      syncUser();
    }
    if (!isSignedIn) {
      hasSynced.current = false;
    }
  }, [isSignedIn, user]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route
          path="/sso-callback"
          element={<AuthenticateWithRedirectCallback />}
        />
      </Routes>
    </Router>
  );
}

export default App;
