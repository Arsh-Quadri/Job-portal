// import { useParams } from "react-router-dom";
const JobDetails = ({ job }) => {
  // const { job_id } = useParams();
  console.log("jobDetails" + job.job_id);

  return (
    <div className="w-full  mx-auto">
      <div className="items-center flex flex-col justify-center p-2">
        <img
          src={
            job.employer_logo ??
            "https://www.freeiconspng.com/thumbs/logo-design/blank-bird-logo-design-idea-png-15.png"
          }
          alt="companyLogo"
          width={120}
        />
        <p className="text-2xl mt-3 font-[600] text-slate-900">
          {job.job_title}
        </p>
        <div className="flex mt-2 items-center">
          <p className="text-xl font-[600] text-slate-900">
            {job.employer_name} |{" "}
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/0/619.png"
            alt="location"
            className="w-[15px] h-[16px] mx-1"
          />
          <p className="text-xl font-[600] text-slate-900">
            {" "}
            {job.job_country}
          </p>
        </div>
      </div>
      <div className="desc mt-10 w-[70%] mx-auto">
        <div className="flex flex-col justify-center">
          <p className="text-2xl font-[500] text-slate-900">Qualifications:</p>
          <div className="">
            {job.job_highlights?.Qualifications ?? ["N/A"]}
          </div>
          <p className="text-2xl font-[500] mt-10 text-slate-900">
            Description:
          </p>
          <div className="">{job.job_description ?? "No Data Provided"}</div>
          <p className="text-2xl font-[500] mt-10 text-slate-900">
            Responsibilities:
          </p>
          <div className="">
            {job.job_highlights?.Responsibilities ?? "No Data Provided"}
          </div>
          <button
            className="px-5 py-2 w-[200px] mx-auto my-10 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-[500]"
            onClick={() =>
              window.open(
                job.job_google_link ?? "https://careers.google.com/jobs/results"
              )
            }
          >
            Apply for job
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
