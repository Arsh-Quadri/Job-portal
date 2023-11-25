import PropTypes from "prop-types";
// import { useEffect } from "react";

const JobCard = ({ job, handleNavigate }) => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   console.log("navigate...........");
  // }, [job]);
  return (
    <div
      className="flex w-[320px] cursor-pointer rounded-md text-lg flex-col bg-gray-100 justify-center m-1.5 px-5 py-5 gap-4"
      onClick={() => handleNavigate()}
    >
      <img
        src={
          job.employer_logo ??
          "https://www.freeiconspng.com/thumbs/logo-design/blank-bird-logo-design-idea-png-15.png"
        }
        alt="logo"
        width={80}
      />
      <p className="font-[600] text-slate-900">{job.job_title}</p>
      <p className="text-slate-700 text-sm font-[500]">{job.job_country}</p>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    employer_logo: PropTypes.string.isRequired,
    job_title: PropTypes.string.isRequired,
    job_country: PropTypes.string.isRequired,
    // job_description: PropTypes.string.isRequired,
    // Add other expected properties here if needed
  }).isRequired,
  handleNavigate: PropTypes.func.isRequired,
};

export default JobCard;
