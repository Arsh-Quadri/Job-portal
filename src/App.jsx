import "./App.css";
import Home from "./components/Home";
// import MouseFollowerDot from "./components/MouseFollower";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom"; //, Routes, Route

import { useEffect, useState } from "react";
import Cursor from "react-cursor-follow";
import useFetch from "./hook/jobsFetch";
import JobDetails from "./job-details/JobDetails";

function App() {
  const [searchData, setSearchData] = useState("");
  const { data, isLoading, error, refetch } = useFetch("search", {
    query: searchData ? searchData : "Web Developer",
    num_pages: 3, //3
  });

  useEffect(() => {
    refetch();
  }, [searchData]);

  console.log(searchData + "its searchData");
  console.log(searchData);

  const [job, setJob] = useState({});

  return (
    <div className="w-full">
      <BrowserRouter>
        <Cursor hollow color="#006400" duration={1} size={45} />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                data={data}
                isLoading={isLoading}
                error={error}
                setJob={setJob}
                setSearchData={setSearchData}
                searchData={searchData}
              />
            }
          />
          <Route
            path={`/job-details/${job.job_id}`}
            element={<JobDetails job={job} />}
          />
        </Routes>
        {/* <MouseFollowerDot /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
