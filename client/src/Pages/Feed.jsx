import React, { useEffect } from "react";
import { assets, dummyPostsData } from "../assets/assets";
import Loading from "../components/Loading";
import StoriesBar from "../components/StoriesBar";
import PostCard from "../components/PostCard";

const Feed = () => {
  const [feeds, setFeeds] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const fetchFeeds = async () => {
    setFeeds(dummyPostsData);
    setLoading(false);
  };
  useEffect(() => {
    fetchFeeds();
  }, []);
  return !loading ? (
    <div className="h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8">
      {/* stories and post list */}
      <div>
        <StoriesBar />
        <div className="p-4 space-y-6">
          {feeds.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
      {/* right sidebar */}
      <div className="max-xl:hidden sticky top-0">
        <div className="max-w-xs bg-white text-sx p-4 rounded-md inline-flex flex-col gap-2 shadow">
          <h1 className="text-slate-800 font-semibold">Sponsored</h1>
          <img
            src={assets.sponsored_img}
            className="w-75 h-50 rounded-md"
            alt=""
          />
          <p className="text-slate-600">Email marketing</p>
          <p className="text-slate-400">
            Supercharge your marketing with a powerful, easy-to-use platform
            built for results.
          </p>
        </div>
        <h1>Recent messages</h1>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Feed;
