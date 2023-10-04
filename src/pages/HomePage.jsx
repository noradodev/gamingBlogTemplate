import React from "react";
import GameCard from "../components/GameCard";
import GamingImage from "../assets/img/gaming.png";
import BgGamingImage from "../assets/img/main-bg.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import popularPCGames from "../api/index.js"; // Assuming your data is imported from this file
import blogBannerTest from "../assets/img/banner.jpg";
import CocProfile from "../assets/img/coc.png";
import NewsCard from "../components/NewsCard";
import CocEsportBanner from "../assets/img/cocesport.jpg";

import Marquee from "react-fast-marquee";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto ">
        <div
          className="main-content-container  "
          style={{ backgroundImage: `url("${BgGamingImage}")` }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 text-white px-10">
            <div className="main-content-header grid items-center pt-40 md:pt-0">
              <div className="">
                <span className="text-sm text-blue-800">
                  Discover Your Favorite
                </span>
                <h1 className="text-5xl mb-4">
                  Talk about Game that you enjoy!
                </h1>
                <a href="#" className="bg-blue-800 p-3 inline-block">
                  Start Explore <AiOutlineArrowRight className="inline-block" />
                </a>
              </div>
            </div>
            <div className="img-container py-36 flex items-center justify-center">
              <img src={GamingImage} alt="" />
            </div>
          </div>
        </div>
        <div className="px-8">
          <div className="trending-game ">
            <div className="text-white py-4 flex justify-between items-center">
              <h1 className="text-lg md:text-3xl  font-bold">
                Currently Trending Game
              </h1>
              <span className="text-sm bg-blue-900/30 px-4 rounded-md py-3">
                See All
              </span>
            </div>
            <div>
              <Marquee
                pauseOnHover
                gradient
                gradientColor="#030323"
                gradientWidth={100}
              >
                {popularPCGames.map((game) => (
                  <GameCard key={game.id} img={game.img} />
                ))}
              </Marquee>
            </div>
            {/* <div className="tranding-game-container flex flex-rows overflow-x-scroll">
             
            </div> */}
          </div>
        </div>

        <div className="recommend-article-for-u px-4">
          <div className="text-white py-4 flex justify-between items-center">
            <h1 className="text-lg md:text-3xl  font-bold">
              Recommend Article For You
            </h1>
            <span className="text-sm bg-blue-900/30 px-4 rounded-md py-3">
              See All
            </span>
          </div>

          <div className="article">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* First Column */}
              <div
                className="bg-red-500 md:row-span-2 md:col-span-2 rounded-lg relative md:w-full md:h-[500px] h-[400px] bg-cover"
                style={{
                  backgroundImage: `url("https://df1fpszckop4s.cloudfront.net/images/cbw7s1mh/production/71d3321384c5d7c9f0fa0c5ddacc6760e423654c-2048x1365.jpg?rect=0,0,2048,1189&w=768&h=446&q=90&auto=format")`,
                }}
              >
                <div className="companyProviderGame absolute top-8 left-10 text-white ">
                  <div className="flex ">
                    <img
                      src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1466606599/ru85id4npmnfued4ikqv.jpg"
                      className="w-12 rounded-md"
                      alt=""
                    />
                    <div className="flex justify-center flex-col ml-4">
                      <h3>Supercell</h3>
                      <p>20.20.2020</p>
                    </div>
                  </div>
                </div>

                <div className="game-info-post flex items-end h-full bg-gradient-to-r rounded-lg from-indigo-500  text-white">
                  <div>
                    <img
                      src={CocProfile}
                      className="w-40 rounded-bl-lg"
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col pl-4">
                    <h2 className="text-lg font-bold md:text-2xl">
                      This is header text for testing the post
                    </h2>
                    <p className="text-sm mb-3">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nemo eveniet at dolorem. Error, corporis? Quidem, quaerat
                      doloremque. Pariatur atque
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Column */}
              <div className="sub-info-recom bg-blue-500 rounded-md relative md:w-full  md:h-auto h-[400px] bg-[url('https://i.guim.co.uk/img/media/378c6fc5bffa626b9f1ff4efdc2c5c870878205f/0_396_6048_3628/master/6048.jpg?width=1200&quality=85&auto=format&fit=max&s=8a775fb307568fcd123f0b70337ad062')] bg-cover">
                <div className="companyProviderGame absolute top-6 left-10 text-white ">
                  <div className="flex">
                    <img
                      src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/steamworks_docs/english/steamLogo_300.jpg"
                      className="w-12 rounded-md"
                      alt=""
                    />
                    <div className="flex justify-center flex-col ml-4 text-sm">
                      <h3>Steam</h3>
                      <p>20.20.2020</p>
                    </div>
                  </div>
                </div>

                <div className="game-info-post flex items-end h-full rounded-lg bg-gradient-to-r rounded-bl-lg from-indigo-500  text-white">
                  <div>
                    <img
                      src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/392197afff641b8387a5aac90ebebe59.jpg"
                      className="w-20 rounded-bl-lg"
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col pl-4">
                    <h2 className="text-md">
                      This is header text for testing the post
                    </h2>
                    <p className="text-sm mb-3">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nemo eveniet at dolorem. Error, corporis?
                    </p>
                  </div>
                </div>
              </div>

              {/* Third Column */}
              <div className="sub-info-recom  rounded-md relative md:w-full md:h-auto h-[400px] bg-[url('https://editors.dexerto.com/wp-content/uploads/thumbnails/_thumbnailLarge/fortnite-world-cup-twitch-viewership.jpg')] bg-cover">
                <div className="companyProviderGame absolute top-6 left-10 text-white ">
                  <div className="flex">
                    <img
                      src="https://images-eds-ssl.xboxlive.com/image?url=Q_rwcVSTCIytJ0KOzcjWTYl.n38D8jlKWXJx7NRJmQKBAEDCgtTAQ0JS02UoaiwRj.VcHXTwP3Gcq532nGGgSKf4ferNm21lnFyesDcwO1IjkFhrnS4yfNTRIVWYDpbzZkQlW1wufJ_rzu.AgnvejQ--&format=source"
                      className="w-12 rounded-md"
                      alt=""
                    />
                    <div className="flex justify-center flex-col ml-4 text-sm">
                      <h3>Epic Game</h3>
                      <p>20.20.2020</p>
                    </div>
                  </div>
                </div>

                <div className="game-info-post flex items-end h-full  rounded-lg bg-gradient-to-r rounded-bl-lg from-indigo-500  text-white">
                  <div>
                    <img
                      src="https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/392197afff641b8387a5aac90ebebe59.jpg"
                      className="w-20 rounded-bl-lg"
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col pl-4">
                    <h2 className="text-md">
                      This is header text for testing the post
                    </h2>
                    <p className="text-sm ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nemo eveniet at dolorem. Error, corporis?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="what-news-section px-4">
          <div className="text-white py-4 flex justify-between items-center">
            <h1 className="text-lg md:text-3xl  font-bold">Whats new?</h1>
            <span className="text-sm bg-blue-900/30 px-4 rounded-md py-3">
              See All
            </span>
          </div>
          <div className="all-articles">
            <div className="article-l-full ">
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
