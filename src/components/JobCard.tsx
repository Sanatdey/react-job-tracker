
interface Job { 
    id: number;
    title: string;
    company:  string;
    location: string;
    status: "applied" | "interview" | "offer" | "rejected" | "";
}


const JobCard = ({job, mode , jobEventHandler} : {job: Job, mode: string, jobEventHandler: any}) => {
    const statusColor = {
        applied: "bg-blue-600",
        interview: "bg-yellow-500",
        offer: "bg-green-600",
        rejected: "bg-red-600",
        "": "",
    };

  return (
    <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-3">
      <div>
        <h3 className="text-lg font-semibold">{job.company}</h3>
        <h4 className="text-sm text-gray-500">{job.title}</h4>
        <p className="text-sm"> {job.location} </p>

      </div>

      <div className="flex items-center justify-between mt-auto">
        {mode == "MYAPPS" && 
        <span
          className={`text-white text-xs px-3 py-1 rounded-full ${
            statusColor[job.status]
          }`}
        >
          {job.status}
        </span>
        }

        <div className="flex gap-3 text-sm">
            {mode == "MYAPPS" 
              && (job.status == "applied" 
                ? <button className="text-blue-600 hover:underline" onClick={() => { jobEventHandler("INTERVIEW", job)}} > Interview </button> 
                : job.status == "interview"
                  ? <><button className="text-blue-600 hover:underline" onClick={() => { jobEventHandler("OFFER", job)}} > Offer </button> 
                      <button className="text-blue-600 hover:underline" onClick={() => { jobEventHandler("REJECT", job)}} > Reject </button> </> 
                  : null)
          
            }{mode == "REQ" && 
            <>
             {/* <button className="text-blue-600 hover:underline">
            Edit
             </button> */}
          <button className="text-red-600 hover:underline"
            onClick={() => {
              jobEventHandler("DELETE", job)
            }}
          >
            Delete
          </button>
            </>
            }{(mode == "JOBS" && job.status == "" ) &&
            <button className="text-blue-600 hover:underline"
            onClick={() => {
              jobEventHandler("APPLY", job)
            }}
            >
            Apply
            </button>
            }
        </div>
      </div>
    </div>
    );
}

export default JobCard;