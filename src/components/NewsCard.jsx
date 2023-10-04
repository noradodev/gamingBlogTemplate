import { AiFillWindows } from "react-icons/ai";
const NewsCard = () => {
  return (
    <div>
      <div className="w-n-card-container text-white my-6 hover:bg-white/10 p-2 rounded-lg cursor-pointer">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-60 md:h-60 w-full  overflow-hidden ">
            <img
              src="https://editors.dexerto.com/wp-content/uploads/thumbnails/_thumbnailLarge/fortnite-world-cup-twitch-viewership.jpg"
              alt=""
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
          <div className="flex justify-between flex-col ml-4">
            <div className="my-4 md:my-2">
              <span className="p-2 px-6 bg-blue-950/50 rounded-lg">
                <AiFillWindows className="text-blue-600 inline-block pr-1" />
                PC
              </span>
            </div>
            <div>
              <h1 className="text-xl font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                aspernatur
              </h1>
              <p className="text-sm text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis, ut praesentium aperiam, fugiat provident laudantium
                sapiente alias necessitatibus impedit similique, doloribus eum
                dolorum reprehenderit iure a rem fugit repellendus odit.
              </p>
            </div>
            <div className="post-by my-2">
              <div className="companyPostProfile text-white ">
                <div className="flex ">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Fortnite_F_lettermark_logo.png"
                    className="w-12 rounded-md"
                    alt=""
                  />
                  <div className="flex justify-center flex-col ml-3 text-sm">
                    <h3>Fortnite</h3>
                    <p>2 Days Ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
