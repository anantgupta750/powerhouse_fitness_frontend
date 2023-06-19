import { useEffect, useState } from "react";
import AdminNav from "./admin/Admin_Nav";
import UserNav from "./user/User_Nav";

const trainersSample = [
  {
    trainerId: 1,
    name: "Saksham Sonker",
    gender: "Male",
    dateOfBirth: "2023-06-07T00:00:00",
    phone: "9874573687",
    experience: 2,
    address: "Amethi",
  },
  {
    trainerId: 2,
    name: "Aman Singh",
    gender: "Male",
    dateOfBirth: "2022-05-02T00:00:00",
    phone: "9854637638",
    experience: 7,
    address: "Lucknow",
  },
  {
    trainerId: 1002,
    name: "Harsh",
    gender: "string",
    dateOfBirth: "2023-06-19T00:00:00",
    phone: "1351743771",
    experience: 12,
    address: "string",
  },
  {
    trainerId: 1003,
    name: "Om",
    gender: "string",
    dateOfBirth: "2023-06-19T00:00:00",
    phone: "1351743771",
    experience: 22,
    address: "string",
  },
];

const programmesSample = [
  {
    programId: 1,
    name: "Yoga",
    duration: 2,
    description: "Stress Relive",
    cost: 4500,
    trainerId: 1,
  },
  {
    programId: 2,
    name: "Dance",
    duration: 0,
    description: "string",
    cost: 1220,
    trainerId: 2,
  },
  {
    programId: 3,
    name: "Swim",
    duration: 0,
    description: "string",
    cost: 1220,
    trainerId: 1002,
  },
  {
    programId: 5,
    name: "Aerobics",
    duration: 0,
    description: "string",
    cost: 1220,
    trainerId: 1003,
  },
];

const MembershipSample = [
  {
    membershipId: 1,
    userId: 1,
    programId: 1,
    trainerId: 1,
    payment: "string",
  },
  {
    membershipId: 2,
    userId: 2,
    programId: 3,
    trainerId: 1002,
    payment: "string",
  },
  {
    membershipId: 3,
    userId: 1002,
    programId: 5,
    trainerId: 1003,
    payment: "string",
  },
  {
    membershipId: 4,
    userId: 1,
    programId: 2,
    trainerId: 1003,
    payment: "string",
  },
];

const usersSample = [
  {
    userId: 1,
    firstName: "Anant",
    lastName: "Gupta",
    email: "anant@gmail.com",
    password: "$2a$11$bL7O1/8T4eEeMkF6qV9Ciew3ZK8kiiSSBtswgtw2sDdY86iebTV.y",
    gender: "Male",
    joinDate: "2023-06-18T18:13:12.628",
    dateOfBirth: "2023-06-01T00:00:00",
    phoneNumber: "7505454380",
    address: "Noida",
    roleId: 2,
  },
  {
    userId: 2,
    firstName: "Om",
    lastName: "Gupta",
    email: "om@gmail.com",
    password: "qwertyuiop",
    gender: "Male",
    joinDate: "2023-06-18T00:00:00",
    dateOfBirth: "2023-06-18T00:00:00",
    phoneNumber: "8318597515",
    address: "Lucknow",
    roleId: 1,
  },
  {
    userId: 1002,
    firstName: "Harsh",
    lastName: "string",
    email: "harsh@example.com",
    password: "stringst",
    gender: "string",
    joinDate: "2023-06-19T00:00:00",
    dateOfBirth: "2023-06-19T00:00:00",
    phoneNumber: "1388841794",
    address: "string",
    roleId: 2,
  },
  {
    userId: 1003,
    firstName: "sashwat",
    lastName: "string",
    email: "sas@example.com",
    password: "stringst",
    gender: "string",
    joinDate: "2023-06-19T00:00:00",
    dateOfBirth: "2023-06-19T00:00:00",
    phoneNumber: "1388841794",
    address: "string",
    roleId: 2,
  },
];

export const MembershipViewComponent = () => {
  const [trainers, setTrainers] = useState([]);
  const [programmes, setProgramme] = useState([]);
  const [memberships, setMemberships] = useState([]);
  const [users, setUsers] = useState([]);

  const USER_ID = 1;
  const ROLE_ID = 2;

  const role = ROLE_ID === 2 ? "admin" : "user";

  const isAdmin = role === "admin";
  const isUser = role === "user";

  useEffect(() => {
    setTrainers(trainersSample);
    setProgramme(programmesSample);
    setMemberships(MembershipSample);
  }, []);

  useEffect(() => {
    if (!isAdmin) return;
    setUsers(usersSample);
  }, [isAdmin]);

  const getFullName = (user) => `${user.firstName} ${user.lastName}`;

  const onDeleteHandler = (membership) => alert(membership.membershipId);

  const filterMembership = isAdmin
    ? memberships
    : memberships.filter((m) => m.userId === USER_ID);

  return (
    <>
      {isAdmin ? <AdminNav /> : <UserNav />}

      <section className="container mt-4">
        <h1 className="title">
          {isUser ? "Your registered membership" : "Membership"}
        </h1>

        <table className="table mt-4">
          <thead>
            <tr>
              {isAdmin && <th>User Name</th>}
              <th>Program Name</th>
              <th>Trainer Name</th>
              <th>Payment Detail</th>
              {isAdmin && <th></th>}
            </tr>
          </thead>

          <tbody>
            {filterMembership.map((membership) => (
              <tr key={membership.membershipId}>
                {isAdmin && (
                  <td>
                    {getFullName(
                      users.find((u) => u.userId === membership.userId)
                    )}
                  </td>
                )}
                <td>
                  {
                    programmes.find((p) => p.programId === membership.programId)
                      .name
                  }
                </td>
                <td>
                  {
                    trainers.find((t) => t.trainerId === membership.trainerId)
                      .name
                  }
                </td>
                <td>{membership.payment}</td>

                {isAdmin && (
                  <td
                    title="delete membership"
                    onClick={() => onDeleteHandler(membership)}
                  >
                    ❌
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};
