import { AiFillFire } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

const GameCard = (props) => {
  return (
    <>
      <div className="game-container text-white pb-4 ">
        <div className="game-card my-1 ">
          <div className="game-img-container w-48 h-72 overflow-hidden relative hover:shadow-xl hover:shadow-blue-800/50 hover:duration-300  mx-2 rounded">
            <img
              src={props.img}
              alt=""
              className="w-full h-full object-cover hover:scale-110 transition-all "
            />
            <div
              className="game-price absolute top-2/4 left-2/4 flex justify-center items-center bg-blue-700/80 w-full h-full opacity-0 hover:opacity-100 transition-all   duration-300"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <span className="bg-white p-2 rounded cursor-pointer">
                <FaPlus className="text-blue-950 " />
              </span>
            </div>
          </div>
        </div>
        <div className="game-followers">
          <div className="flex items-center justify-center">
            <AiFillFire className="fire-icon text-orange-500" />
            <h4 className="text-sm">1K Followers</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameCard;
