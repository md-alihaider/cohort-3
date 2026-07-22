import { Mail, Phone, MapPin, User, Hash, ArrowRight } from "lucide-react";

const UserCard = ({ user }) => {
  return (
    <div className="w-full max-w-sm rounded-3xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Top */}
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-violet-600 to-indigo-500 text-2xl font-bold text-white">
          {user.name.firstname[0].toUpperCase()}
          {user.name.lastname[0].toUpperCase()}
        </div>

        <div>
          <h2 className="text-xl font-bold capitalize text-gray-800">
            {user.name.firstname} {user.name.lastname}
          </h2>

          <p className="text-sm text-gray-500">@{user.username}</p>

          <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            Active User
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-gray-200"></div>

      {/* Details */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Mail size={18} className="text-violet-600" />
          <span className="text-sm text-gray-700">{user.email}</span>
        </div>

        <div className="flex items-center gap-3">
          <Phone size={18} className="text-violet-600" />
          <span className="text-sm text-gray-700">{user.phone}</span>
        </div>

        <div className="flex items-center gap-3">
          <Hash size={18} className="text-violet-600" />
          <span className="text-sm text-gray-700">User ID : {user.id}</span>
        </div>

        <div className="flex items-start gap-3">
          <MapPin size={18} className="mt-1 text-violet-600" />
          <div>
            <p className="text-sm font-medium capitalize">
              {user.address.street}, {user.address.number}
            </p>
            <p className="text-sm text-gray-500 capitalize">
              {user.address.city} • {user.address.zipcode}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-3 font-medium text-white transition hover:bg-black">
        View Details
        <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default UserCard;
 