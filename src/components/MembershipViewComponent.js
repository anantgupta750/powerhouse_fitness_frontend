import { useEffect, useState } from "react";
import { useUser } from "../hooks/useUserRole";
import AdminNav from "./admin/Admin_Nav";
import UserNavbar from "./user/Usernavbar";

const loadData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export const MembershipViewComponent = () => {
  const info = useUser();
  const [trainers, setTrainers] = useState([]);
  const [programs, setPrograms] = useState([]);
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
      setPrograms(p);
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
    const filteredMemberships = memberships.filter(
      (m) => m.membershipId !== membership.membershipId
    );
    setMemberships(filteredMemberships);
  };

  const filteredMemberships = isAdmin
    ? memberships
    : memberships.filter((m) => m.userId === USER_ID);

  return (
    <>
      {isAdmin ? <AdminNav /> : <UserNavbar />}

      <section className="container mt-4">
        <h1 className="title">
          {isUser ? "Your Registered Membership" : "Membership"}
        </h1>

        <table className="table mt-4">
          <thead className="bg-dark text-white">
            <tr>
              {isAdmin && <th>User Name</th>}
              <th>Program Name</th>
              <th>Trainer Name</th>
              <th>Payment Detail</th>
              {isAdmin && <th>Delete</th>}
            </tr>
          </thead>

          <tbody>
            {filteredMemberships.map((membership) => (
              <tr key={membership.membershipId}>
                {isAdmin && (
                  <td>
                    {getFullName(
                      users.find((u) => u.userId === membership.userId)
                    )}
                  </td>
                )}
                <td>
                  {programs.find((p) => p.programId === membership.programId)
                    ?.name ?? ""}
                </td>
                <td>
                  {trainers.find((t) => t.trainerId === membership.trainerId)
                    ?.name ?? ""}
                </td>
                <td>{membership.payment}</td>

                {isAdmin && (
                  <td
                    title="Delete membership"
                    onClick={() => onDeleteHandler(membership)}
                    style={{ cursor: "pointer" }}
                  >
                    <button className="btn btn-danger">Delete</button>
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

export default MembershipViewComponent;
