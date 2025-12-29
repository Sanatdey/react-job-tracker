import Feature from "./components/Feature";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Flow from "./components/Flow";
import Footer from "./components/Footer";
import Jobs from "./components/Jobs";
import Login from "./components/Login";
import { useState, useEffect } from "react";
import JobForm from "./components/JobForm";

interface Job { 
    id: number;
    title: string;
    company:  string;
    location: string;
    status: "applied" | "interview" | "offer" | "rejected" | "";
}


const App = () => {

  const [jobs, setJobs] = useState<Job[]>(() => {
    const stored = localStorage.getItem("jobs");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);


  const [mode, setMode] = useState("STD");
  
  const saveFormHandler = (job: Job) => {
    setJobs((prevJobs) => [
                    ...prevJobs, 
                    { ...job, id: prevJobs.length + 1 }
    ]);
    setMode("REQ");
  };

  const deleteJob = (id : number) => {

  }

  const jobEventHandler = (action :string , job: Job) => {
    switch(action){
      case "DELETE":
        setJobs(jobs.filter(j => j.id !== job.id));
        break;
      case "EDIT":
        setJobs(jobs.map(j => j.id === job.id ? job : j));
        break;
      case "APPLY":
        setJobs(jobs.map(j => j.id === job.id ? { ...job, status: "applied" } : j));
        break;
      case "INTERVIEW":
        setJobs(jobs.map(j => j.id === job.id ? { ...job, status: "interview" } : j));
        break;
      case "OFFER":
        setJobs(jobs.map(j => j.id === job.id ? { ...job, status: "offer" } : j));
        break;
      case "REJECT":
        setJobs(jobs.map(j => j.id === job.id ? { ...job, status: "rejected" } : j));
        break;
    }
  };


  return (
    <>
      <Header setMode={setMode}/>
      { mode == "STD" &&
      <>
        <Hero setMode={setMode} />
        <Flow />
        <Feature />
        <Login />
      </>
      }
      {mode == "ADDJOB" && 
        <JobForm mode={mode} setMode={setMode} saveFormHandler={saveFormHandler}/>
      }
      { (mode == "JOBS" || mode == "MYAPPS" || mode == "REQ") &&
        <Jobs jobs={jobs} mode={mode} setMode={setMode} jobEventHandler={jobEventHandler}/>
      }
      <Footer />
    </>
  );
};

export default App;
