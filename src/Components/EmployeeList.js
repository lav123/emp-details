import React, { useEffect } from "react";
import MaterialTable from "material-table";
import "./EmployeeList.css";

function EmployeeList() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("empData")));
  }, []);

  return (
    <div className="employeeList">
      <MaterialTable
        title=""
        columns={[
          { title: "First Name", field: "first_name" },
          { title: "Last Name", field: "last_name" },
          { title: "Email", field: "email" },
        ]}
        data={data}
        options={{
          actionsColumnIndex: -1,
          selection: true,
          pageSize: 10,
          pageSizeOptions: [10, 20, 30],
        }}
        actions={[
          {
            tooltip: "Remove All Selected Users",
            icon: "delete",
            onClick: (evt, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...data];
                  oldData.forEach((val) => {
                    const index = val.tableData.id;
                    dataDelete.splice(index, 1);
                    localStorage.setItem("empData", JSON.stringify(dataDelete));
                    setData([...dataDelete]);
                  });
                  resolve();
                }, 1000);
              }),
          },
        ]}
        detailPanel={[
          {
            tooltip: "Show Details",
            render: (rowData) => {
              return (
                <div className="user_details">
                  <img src={rowData.imageUrl} className="user_icon" />
                  <div className="user_info">
                    <h2>{`${rowData.first_name} ${rowData.last_name}`}</h2>
                    <p>{rowData.email}</p>
                  </div>
                </div>
              );
            },
          },
        ]}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const newAdddata = [...data];
                setData([...data, newData]);
                newData.imageUrl = `https://avatars.dicebear.com/api/avataaars/${newData.tableData.id}.svg`;
                newAdddata.push(newData);
                localStorage.setItem("empData", JSON.stringify(newAdddata));
                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                localStorage.setItem("empData", JSON.stringify(dataUpdate));
                resolve();
              }, 1000);
            }),
        }}
      />
    </div>
  );
}

export default EmployeeList;
