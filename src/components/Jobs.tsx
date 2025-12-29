import JobCard from "./JobCard";

interface Job { 
    id: number;
    title: string;
    company:  string;
    location: string;
    status: "applied" | "interview" | "offer" | "rejected" | "";
}

const Jobs = ({jobs, mode, setMode, jobEventHandler}: {jobs : Job[] , mode:string, setMode: any, jobEventHandler: any}) => {
    return (
    <section className="max-w-7xl mx-auto px-10 py-10 ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold"> { mode == "MYAPPS" ? " Applications " : " Jobs " }</h2>
          <p className="text-sm text-gray-500">
            { mode == "MYAPPS" ? " Track and manage all your applications " : " Available Jobs " }
          </p>
        </div>
        {mode == "REQ" && 
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" onClick={() =>{
            setMode("ADDJOB");
        }}>
          + Add Job
        </button>
    }
      </div>

      {/* Jobs List */}
      {jobs.length > 0 &&
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} mode={mode} jobEventHandler={jobEventHandler}/>
          ))}
        </div>
      }
    </section>
    );
};

export default Jobs;

