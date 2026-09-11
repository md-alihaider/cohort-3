import { useEffect } from "react";
import useApi from "../../shared/useApi";
import { useAuthContext } from "../context/AuthContext";
const Profile = () => {
  const auth = useAuthContext();
  const user = auth.user;
  const api = useApi();
  const fetchProfile = async () => {
    try {
      const res = await api.get("/auth/me");
      auth.setUser(res.data.data.user);
    } catch (error) {
      console.log("Error in fetching profile.", error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>
        </div>
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          My Profile
        </h1>
        {/* User Information */}
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="text-lg font-medium text-gray-800">
              {user?.name || "Not available"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-lg font-medium text-gray-800">
              {user?.email || "Not available"}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Profile;
