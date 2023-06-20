import { useEffect, useState } from "react";
import { useUser } from "../hooks/useUserRole";
import AdminNav from "./admin/Admin_Nav";
import Usernavbar from "./user/Usernavbar";

const loadData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export const MembershipViewComponent = () => {
  const info = useUser();
  const [trainers, setTrainers] = useState([]);
  const [programmes, setProgramme] = useState([]);
  const [memberships, setMemberships] = useState([]);
  const [users, setUsers] = useState([]);

  const USER_ID = info.user.userId;
  const ROLE_ID = info.user.roleId;

  const role = ROLE_ID === 1 ? "admin" : "user";

  const isAdmin = role === "admin";
  const isUser = role === "user";

  useEffect(() => {
    (async () => {
      const [t, p, m] = await Promise.all([
        loadData("https://localhost:7255/api/Trainers"),
        loadData("https://localhost:7255/api/TrainingProgram"),
        loadData("https://localhost:7255/api/Membership"),
      ]);
      setTrainers(t);
      setProgramme(p);
      setMemberships(m);
    })();
  }, []);

  useEffect(() => {
    if (!isAdmin) return;
    loadData("https://localhost:7255/api/Users").then((u) => setUsers(u));
  }, [isAdmin]);

  const getFullName = (user) => `${user.firstName} ${user.lastName}`;

  const onDeleteHandler = async (membership) => {
    await fetch(
      `https://localhost:7255/api/Membership/${membership.membershipId}`,
      { method: "DELETE" }
    );
    const memid = memberships.filter(
      (m) => m.membershipId != membership.membershipId
    );
    setMemberships(memid);
  };

  const filterMembership = isAdmin
    ? memberships
    : memberships.filter((m) => m.userId === USER_ID);

  console.log({ programmes });

  return (
    <>
      {isAdmin ? <AdminNav /> : <Usernavbar />}

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
              {isAdmin && <th>Delete</th>}
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
                  {programmes.find((p) => p.programId === membership.programId)
                    ?.name ?? ""}
                </td>
                <td>
                  {trainers.find((t) => t.trainerId === membership.trainerId)
                    ?.name ?? ""}
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
