import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { axiosInstance } from "../config/axiosinstance";
const UserPage = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getUserData = async () => {
    try {
      let res = await axiosInstance.get("/users");
      console.log(res);
      setUserData(res.data);
      setIsLoading(false)
    } catch (error) {
      console.log("Error in user api calling:", error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  if(isLoading) return <h1 className=" text-3xl">Loading user..</h1>
  return (
    <div className="grid grid-cols-4 gap-5">
      {userData.map((val) => (
        <UserCard key={val.id} user={val} />
      ))}
    </div>
  );
};

export default UserPage;
