import { useForm } from "react-hook-form";
import axios from "axios";
const App = () => {
  const { register, handleSubmit, } = useForm();

  const submitHandler = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    // loop through images and append them to formData
    for (let i = 0; i < data.images.length; i++) {
      formData.append("images", data.images[i]);
    }

    await axios.post("http://localhost:3000/user/create", formData);
    
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl"
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">Create Profile</h1>
            <p className="text-zinc-400 mt-2">Enter your details below</p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Name
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="Enter your name"
                className="w-full rounded-lg bg-zinc-950 border border-zinc-700 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Email
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Enter your email"
                className="w-full rounded-lg bg-zinc-950 border border-zinc-700 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Profile Picture
              </label>
              <input
                type="file"
                {...register("images")}
                multiple
                className="w-full rounded-lg bg-zinc-950 border border-zinc-700 text-zinc-400 file:mr-4 file:border-0 file:bg-indigo-500 file:px-4 file:py-3 file:text-sm file:font-medium file:text-white hover:file:bg-indigo-600 transition"
              />
            </div>

            <input
              type="submit"
              value="Create Profile"
              className="w-full cursor-pointer rounded-lg bg-indigo-500 px-4 py-3 font-semibold text-white transition hover:bg-indigo-600 active:scale-[0.98]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
