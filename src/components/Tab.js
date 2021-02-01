import React, {useState} from "react";
import { Table, Button } from 'element-react';
import 'element-theme-default';

import { i18n } from 'element-react'
import locale from 'element-react/src/locale/lang/en'

i18n.use(locale);

const Tab = ({jobs}) => {
    const columns = [
        {
            label: "Batch nb",
            prop: "batch_nb",
            width: 140,
            sortable: true,
            filters: [{ text: '0', value: '0' }, { text: '1', value: '1' }, { text: '2', value: '2' }, { text: '3', value: '3' }],
            filterMethod(value, row) {
                              return row.batch_nb === value;
                            },
          },
        {
          label: "Job nb",
          prop: "job_nb",
          width: 120,
          sortable: true,
          filters: [{ text: '0', value: '0' }, { text: '1', value: '1' }, { text: '2', value: '2' }, { text: '3', value: '3' }],
          filterMethod(value, row) {
            return row.job_nb === value;
          },
        },
        {
          label: "Input file name",
          prop: "input_file_name",
          width: 180,
          sortable: true,
          fixed: 'left'
        },
        {
          label: "Complexity",
          prop: "complexity",
          width: 150,
          sortable: true,
          filters: [{ text: '0', value: '0' }, { text: '1', value: '1' }, { text: '2', value: '2' }, { text: '3', value: '3' }],
          filterMethod(value, row) {
            return row.complexity === value;
        },
        },
        {
            label: "Executed by",
            prop: "executed_by",
            width: 160,
            sortable: true,
            filters: [{ text: 'pineapple', value: 'pineapple' }, { text: 'grapefruit', value: 'grapefruit' }],
            filterMethod(value, row) {
              return row.executed_by === value;
          },
          },
          {
            label: "Calibrator version",
            prop: "calibrator_version",
            width: 190,
            sortable: true,
            filters: [{ text: '0', value: '0' }, { text: '1', value: '1' }],
            filterMethod(value, row) {
              return row.calibrator === value;
          },
          },
          {
            label: "Date",
            prop: "date",
            width: 180,
            sortable: true
          },
          {
            label: "Duration (sec)",
            prop: "duration",
            width: 180,
            sortable: true
          },
          {
            label: "Status",
            prop: "status",
            width: 120,
            sortable: true,
            filters: [{ text: 'Todo', value: 'Todo' }, { text: 'doing', value: 'doing' }, { text: 'done', value: 'done' }],
            filterMethod(value, row) {
              return <row className="status"></row> === value;
          },
          },
          {
            label: "Error code",
            prop: "error_code",
            width: 130,
            sortable: true
          },
          {
            label: "Result Link",
            width: 180,
            fixed: 'right',
            render: (row)=>{
                return row.status !== "Doing" && <span><Button type="success" >Output File</Button></span>
              }
          },
          {
            label: "Action",
            width: 180,
            fixed: 'right',
            render: (row)=>{
                return row.status === "Doing" && <><span><Button type="danger" >Kill Job</Button></span><span><Button type="warning" >Kill Batch</Button></span></>
              }
          }
      ]

  return <div className="jobs_tab">     
      <div className="myAccountForm">
      <h2>Job Status</h2>
      <Table
      style={{width: '100%'}}
      columns={columns}
      data={jobs}
      border={true}
    />
      </div>
    
  </div>;
}

export default Tab;