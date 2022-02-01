import React, { useEffect } from "react";
import { fetchUserAsyncAddToRedux } from "./store/userSlice";
import { useDispatch } from "react-redux";
import UserTable from "./components/UserTable/UserTable";
import { useSelector } from "react-redux";
import "./App.scss";

const App = () => {
  const disptach = useDispatch();

  const { user, isLoading } = useSelector((state) => state.user);
  useEffect(() => {
    disptach(fetchUserAsyncAddToRedux());
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <>
          <h1>Loading.......</h1>
        </>
      ) : (
        <>
          <UserTable user={user} />
        </>
      )}
    </div>
  );
};

export default App;
