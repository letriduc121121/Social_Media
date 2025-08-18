import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Feed from "./Pages/Feed";
import Messages from "./Pages/Messages";
import ChatBox from "./Pages/ChatBox";
import Discover from "./Pages/Discover";
import Connections from "./Pages/Connections";
import CreatePost from "./Pages/CreatePost";
import Profile from "./Pages/Profile";
import Layout from "./Pages/Layout";
import { useUser } from "@clerk/clerk-react";
const App = () => {
  const { user } = useUser();
  return (
    <>
      <Routes>
        <Route path="/" element={!user ? <Login /> : <Layout />}>
          <Route index element={<Feed />} />
          <Route path="messages" element={<Messages />} />
          <Route path="messages/:userId" element={<ChatBox />} />
          <Route path="discover" element={<Discover />} />
          <Route path="connections" element={<Connections />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:profileId" element={<Profile />} />
          <Route path="create-post" element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
