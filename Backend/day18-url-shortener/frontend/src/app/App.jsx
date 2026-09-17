import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const dummyUrls = [
  {
    _id: "1",
    originalUrl:
      "https://www.amazon.in/Brightening-Instant-Brightness-Blemishes-Natural/dp/B0HBBDW1J4/ref=sr_1_6?_encoding=UTF8&s=beauty&sr=1-6",
    shortCode: "UDISST",
    clicks: 9,
  },
  {
    _id: "2",
    originalUrl:
      "https://www.amazon.in/Brightening-Instant-Brightness-Blemishes-Natural/dp/B0HBBDW1J4/ref=sr_1_6?_encoding=UTF8&s=beauty&sr=1-6",
    shortCode: "UDISST",
    clicks: 8,
  },
  {
    _id: "3",
    originalUrl:
      "https://www.amazon.in/Brightening-Instant-Brightness-Blemishes-Natural/dp/B0HBBDW1J4/ref=sr_1_6?_encoding=UTF8&s=beauty&sr=1-6",
    shortCode: "UDISST",
    clicks: 5,
  },
];
const App = () => {
  const [urls, setUrls] = useState(dummyUrls);
  const [inputValue, setInputValue] = useState("");
  const [currentUrl, setCurrentUrl] = useState(null);

  const fetchUrls = async () => {
    const res = await axios.get("http://localhost:5173/api/url");
    const resData = res.data;
    setUrls(resData.data.urls);
  };

  const createShortUrl = async () => {
    const res = await axios.post("http://localhost:5173/api/url", {
      url: inputValue,
    });
    setCurrentUrl({
      originalUrl: res.data.data.originalUrl,
      shortCode: res.data.data.shortCode,
    });
    fetchUrls();
  };

  const deleteUrl = async (id) => {
    await axios.delete(`http://localhost:5173/api/url/${id}`);
    fetchUrls();
  };

  // fetchUrls();
  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <main className="p-10 flex flex-col gap-4">
      <div className="w-full max-w-4xl p-2 flex gap-2">
        <input
          type="text"
          value={inputValue}
          placeholder="Enter Long URL"
          className="border rounded w-full p-2 "
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="rounded p-2 bg-orange-600 text-white cursor-pointer"
          onClick={createShortUrl}
        >
          Shorten
        </button>
      </div>
      <div className="w-full max-w-4xl p-2"></div>
      <div className="w-full max-w-4xl p-2 flex flex-col gap-2">
        {urls.map((url) => {
          return (
            <div className="border border-neutral-200 p-2 flex gap-8 justify-evenly items-center">
              <a
                href={`http://localhost:3000/${url.shortCode}`}
                target="_blank"
              >
                {url.shortCode}
              </a>
              <p className="truncate">{url.originalUrl}</p>
              <p> {url.clicks} </p>
              <div className="flex gap-2">
                <button className="p-2 rounded bg-orange-600 text-white cursor-pointer">
                  COPY
                </button>
                <button
                  onClick={() => deleteUrl(url._id)}
                  className="p-2 rounded bg-orange-600 text-white cursor-pointer"
                >
                  DELETE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default App;
