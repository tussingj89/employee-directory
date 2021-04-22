import React from "react";

function DataBody({ users }) {
  function formatDate(date) {
    const DateArr = date.split("-");
    const year = DateArr[0];
    const month = DateArr[1];
    const dayArr = DateArr[2].split("T");
    const day = dayArr[0];
    const FormattedDate = [month, day, year].join("-");
    return FormattedDate;
  }

  return (
    <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ login, name, picture, email, gender, phone, dob, location }) => {
          return (
            <tr key={login.uuid}>
              
              <td data-th="Name" className="name-cell align-middle">
                {name.first} {name.last}
              </td>
              <td data-th="Image" className="align-middle">
                <img
                  src={picture.medium}
                  alt={"profile image for " + name.first + " " + name.last}
                  className="img-responsive"
                />
              </td>
              <td data-th="Email" className="align-middle">
                <a href={"mailto:" + email} target="__blank">
                  {email}
                </a>
              </td>
              < td data-th="Gender" className="align-middle">
                {gender}
              </td>
              <td data-th="Phone" className="align-middle">
                {phone}
              </td>

              <td data-th="DOB" className="align-middle">
                {formatDate(dob.date)}
              </td>
              <td data-th="Location" className="align-middle" >
                {location.state}, {location.city}
              </td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );
}

export default DataBody;