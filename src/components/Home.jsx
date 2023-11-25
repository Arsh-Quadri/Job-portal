import { useNavigate } from "react-router-dom";
import JobCard from "./JobCard";
import { useState } from "react";

const Home = ({
  data,
  isLoading,
  error,
  setJob,
  setSearchData,
  // searchData,
}) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchData(text);
    setText("");
  };

  return (
    <div className="w-full">
      <div className="bg-slate-200 h-fit ">
        <div className="flex-col flex md:flex-row justify-evenly">
          <div className="left with-[50%]">
            <h1 className="text-2xl md:text-3xl lg:text-5xl mx-[10%] md:mx-0 mt-[10%] md:mt-[30%] font-sans font-[400]">
              Get your best profession <br />{" "}
              <span className="text-green-800">with Abhyaz</span>
            </h1>
          </div>
          <div className="right with-[50%] mx-[12%] md:mx-0">
            <img
              className="w-[250px] md:w-[400px]"
              src="https://beweddy.com/gif/contact-us.gif"
              alt="contact-us"
            />
          </div>
        </div>
        <div className="form md:mt-5 flex flex-col w-full justify-center items-center pb-5 md:pb-10">
          <div className="search flex flex-col w-[78%] justify-center">
            <div className="text-2xl md:text-4xl font-sans font-[400]">
              Find your dream job here
            </div>
            <form action="">
              <div className="searchBar items-center flex bg-white mt-8 rounded-full py-2 pl-5 pr-3">
                <img
                  src="https://toppng.com/uploads/thumbnail/free-icons-png-instagram-search-icon-white-11562954322z9aahtpbae.png"
                  alt="search-icon"
                  className="w-6 h-6 mr-5"
                />
                <input
                  type="text"
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                  className="outline-none w-[50%] sm:flex-1 font-sans text-slate-800 text-md"
                />
                <button
                  onClick={handleSubmit}
                  className="touchBtn font-[600] text-slate-900 bg-green-200 px-4 py-2 rounded-full cursor-pointer hover:bg-green-300"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="Jobs mt-5 flex flex-col w-full justify-center items-center">
        <div className="flex flex-wrap w-[78%] justify-center">
          {isLoading ? (
            // <p>Loading...</p>
            <img
              src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif"
              alt="loader"
              width={400}
            />
          ) : error ? (
            <p>Something went wrong</p>
          ) : (
            data?.map((job) => (
              <>
                <JobCard
                  job={job}
                  key={`nearby-job-${job.job_id}`}
                  setJob={setJob}
                  handleNavigate={() => {
                    setJob(job);
                    navigate(`/job-details/${job.job_id}`); // /${job.job_id}
                  }}
                />
              </>
            ))
          )}
        </div>
      </div>
      <footer className="w-full mt-20">
        <div className="top">
          <div className="pages">
            <ul>
              <h3 className="text-2xl font-[500]">Abhyaz</h3>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Catalog</a>
              </li>
              <li>
                <a href="#">Search</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>

            <ul>
              <h3 className="text-xl font-[500]">Careers</h3>
              <li>
                <a href="#">Apply Online</a>
              </li>
              <li>
                <a href="#">Available Positions</a>
              </li>
            </ul>

            <ul>
              <h3 className="text-xl font-[500]">About Us</h3>
              <li>
                <a href="#">Meet Our Team</a>
              </li>
              <li>
                <a href="#">Our Responsibilities</a>
              </li>
              <li>
                <a href="#">Our Codes</a>
              </li>
              <li>
                <a href="#">Our Values</a>
              </li>
            </ul>
          </div>
          <div className="newsletter">
            <h3>Stay in Touch</h3>
            <form>
              <input
                type="email"
                name="newsletter_email"
                id="newsletter_email"
                placeholder="Email"
              />
              <input type="button" value="Submit" />
            </form>
          </div>
        </div>
        <div className="social flex gap-5 md:gap-7">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
            alt=""
            width={30}
            className="cursor-pointer"
          />
          <img
            src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7915997/github-icon-md.png"
            alt=""
            width={30}
            className="cursor-pointer"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
            alt=""
            width={30}
            className="cursor-pointer"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"
            alt=""
            width={30}
            className="cursor-pointer"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/733/733579.png"
            alt=""
            width={30}
            className="cursor-pointer"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png"
            alt=""
            width={30}
            className="cursor-pointer"
          />
        </div>
        <div className="info">
          <div className="legal flex gap-1">
            <a href="#">Terms & Conditions </a>
            <a href="#"> Privacy Policy</a>
          </div>
          <div className="copyright">
            2023 Copyright &copy; Abhyaz made with ❤️ by Arsh Quadri
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
