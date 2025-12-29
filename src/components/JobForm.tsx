import { useState } from "react";

export default function JobForm({mode, setMode , saveFormHandler}:{mode: string , setMode: any, saveFormHandler : any}) {

    interface Job { 
    id: number;
    title: string;
    company:  string;
    location: string;
    status: "applied" | "interview" | "offer" | "rejected" | "";
    }

    const [form, setForm] = useState({
        company: "",
        title: "",
        location: "",
        status: "",
    });


    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="max-w-7xl mx-auto px-10 py-10 bg-white rounded-lg shadow m-5">
      <h2 className="text-xl font-bold mb-4">Add Job</h2>

      <form className="space-y-4">
        {/* Company */}
        <div className="px-10 py-2">
          <label className="block text-sm font-medium mb-1">
            Company *
          </label>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 
                       focus:border-blue-500 outline-none"
            placeholder="Google"
          />
        </div>

        {/* Role */}
        <div className="px-10">
          <label className="block text-sm font-medium mb-1">
            Title *
          </label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 
                       focus:border-blue-500 outline-none"
            placeholder="Backend Engineer"
          />
        </div>

        {/* Location */}
        <div className="px-10 ">
          <label className="block text-sm font-medium mb-1">
            Location
          </label>
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 
                       focus:border-blue-500 outline-none"
            placeholder="Bangalore"
          />
        </div>

        { mode == "UPDATEJOB" &&
        <div className="px-10 ">
          <label className="block text-sm font-medium mb-1">
            Status
          </label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          >
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="offer">Offer</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
        }


        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4">
            <button
              onClick={() => {
                setMode("REQ");
              }}
              type="button"
              className="px-10 py-1 border rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>
          <button
            type="button"
            onClick={(e) => {
                e.preventDefault();

                if(form.company == "" || form.title == "") {
                    alert("Please fill all required fields");
                    return;
                }
                
                const job : Job = {
                    id: 0,
                    company: form.company,
                    title: form.title,
                    location: form.location,
                    status: form.status as "applied" | "interview" | "offer" | "rejected" | "",
                };
                saveFormHandler(job);
            }}
            className="px-10 py-2 bg-blue-600 text-white rounded-lg 
                       hover:bg-blue-700 transition"
          >
            Save Job
          </button>
        </div>
      </form>
    </div>
    );
}