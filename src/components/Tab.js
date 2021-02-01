import { sortBy } from "lodash";
import React, {useState} from "react";

const Tab = ({jobs}) => {
    const[batchNb, setBatchNb]=useState("All");
    const[jobNb, setJobNb]=useState("All");
    const[fileName, setFileName]=useState("All");
    const[complexity, setComplexity]=useState("All");
    const[executedBy, setExecutedBy]=useState("All");
    const[calibrator, setCalibrator]=useState("All");
    const[date, setDate]=useState("All");
    const[duration, setDuration]=useState("All");
    const[status, setStatus]=useState("All");
    const[errorCode, setErrorCode]=useState("All");

    const[selectedColumn, setSelectedColumn]=useState("batch_nb")

  return <div className="jobs_tab">     
      <div className="myAccountForm">
      <h2>Job Status</h2>
      <table >
        <tr>
            <th>Batch nb
            <br/>
        <select onChange={(event)=>{setBatchNb(event.target.value)}}>
            <option value="All">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        </th>
          <th>Job nb
          <br/>
          <select onChange={(event)=>{setJobNb(event.target.value)}}>
            <option value="All">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
          </th>
          <th>Input file name
          <br/>
          <select onChange={(event)=>{setFileName(event.target.value)}}>
            <option value="All">All</option>
            <option value="big_asx_dummy.xml">big_asx_dummy.xml</option>
            <option value="small_asx_dummy.xml">small_asx_dummy.xml</option>
            <option value="afh_dummy.xml">afh_dummy.xml</option>
            <option value="asx_dummy.xml">asx_dummy.xml</option>
        </select>
          </th>
          <th>Complexity
          <br/>
          <select onChange={(event)=>{setComplexity(event.target.value)}}>
            <option value="All">All</option>
            <option value="1">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
          </th>
          <th>Executed by
              <br/>
          <select onChange={(event)=>{setExecutedBy(event.target.value)}}>
            <option value="All">All</option>
            <option value="pineapple">pineapple</option>
            <option value="grapefruit">grapefruit</option>
            <option value="strawberry">strawberry</option>
            <option value="watermelon">watermelon</option>
        </select>
          </th>
          <th>Calibrator version
          <br/>
          <select onChange={(event)=>{setCalibrator(event.target.value)}}>
            <option value="All">All</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
          </th>
          <th>Date
          <br/>
          <select onChange={(event)=>{setDate(event.target.value)}}>
            <option value="All">All</option>
            <option value="11/02/2020-13:46:41">11/02/2020-13:46:41</option>
            <option value="11/02/2020-13:47:19">11/02/2020-13:47:19</option>
            <option value="11/02/2020-13:48:12">11/02/2020-13:48:12</option>
        </select>
          </th>
          <th>Duration (sec)
          <br/>
          <select onChange={(event)=>{setDuration(event.target.value)}}>
            <option value="All">All</option>
            <option value="48.53">48.53</option>
            <option value="26.13">26.13</option>
        </select>
          </th>
          <th>Status
          <br/>
          <select onChange={(event)=>{setStatus(event.target.value)}}>
            <option value="All">All</option>
            <option value="Done">Done</option>
            <option value="Doing">Doing</option>
            <option value="Todo">Todo</option>
        </select>
          </th>
          <th>Error code
            <br/>
          <select onChange={(event)=>{setErrorCode(event.target.value)}}>
            <option value="All">All</option>
            <option value="0">0</option>
            <option value="1">1</option>
        </select>
          </th>
          <th>Result Link</th>
          <th>Action</th>
        </tr>
        
        {sortBy(
            jobs
            .filter((job)=>job.batch_nb === batchNb || batchNb === "All")
            .filter((job)=>job.job_nb === jobNb || jobNb === "All")
            .filter((job)=>job.input_file_name === fileName || fileName === "All")
            .filter((job)=>job.complexity === complexity || complexity === "All")
            .filter((job)=>job.executed_by === executedBy || executedBy === "All")
            .filter((job)=>job.calibrator_version === calibrator || calibrator === "All")
            .filter((job)=>job.date === date || date === "All")
            .filter((job)=>job.duration === duration || duration === "All")
            .filter((job)=>job.status === status || status === "All")
            .filter((job)=>job.error_code === errorCode || errorCode === "All"),
            [selectedColumn])
        .map((job, index)=>{
          return(
          <tr>
            <td>{job.batch_nb}</td>
            <td>{job.job_nb}</td>
            <td>{job.input_file_name}</td>
            <td>{job.complexity}</td>
            <td>{job.executed_by}</td>
            <td>{job.calibrator_version}</td>
            <td>{job.date}</td>
            <td>{job.duration}</td>
            <td>{job.status}</td>
            <td>{job.error_code}</td>
            <td>{job.result_link}</td>
            <td>{job.action}</td>
            {/* <td>{moment(transaction.date).format('DD/MM/YYYY')}</td> */}
            {/* <td>{new Date(transaction.date).toDateString()}</td> */}
            {/* <td>
            {new Date(transaction.date).getDate()} {months[new Date(transaction.date).getMonth()]} {new Date(transaction.date).getFullYear()}
            </td> */}

            </tr>
          )
        })}
      </table>
      </div>
    
  </div>;
}

export default Tab;