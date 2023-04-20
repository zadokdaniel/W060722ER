import { useEffect, useState } from "react";
import User from "./user";
import { getUserById } from "../services/jsonPlaceholder";
import { useUser } from "../hooks/useUser";

const Users = () => {
  const [selectedUser, setSelectedUser] = useState("");

  const { user, isLoading, error } = useUser(selectedUser);

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col">
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="users-selector">
              Users
            </label>
            <select
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              className="form-select"
              id="users-selector"
            >
              <option value="">Choose...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          {isLoading ? (
            <span>loading...</span>
          ) : user ? (
            <User user={user} />
          ) : (
            <span>{error}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
