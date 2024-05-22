import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen border-[5px] border-red-500 bg-white flex">
      {/* Left Side Cotent*/}
      <div className=" w-[200px] px-[25px] py-[18px] h-full border-r-[1px] border-red-500 overflow-y-scroll">
        <div className="flex flex-col h-full items-center">
          {/* Image */}
          <div className="my-[14px] flex flex-col items-center ">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_02cqDXO6TLB4z_RAOn8P_HVs_F4ioYZgllyIgbPrQ&s"
              width={150}
              height={150}
              alt="hi"
              className="rounded-full object-cover shadow-xl"
            />
            <h1 className="mt-[5px] text-[21px] font-extrabold ">Hi BUC</h1>
          </div>
          {/* Buttons */}
          <div 
        // style={{ height: "calc(100% - 215px)" }}
          className="bg-[#fdfdf6] h-full w-full shadow-2xl shadow-teal-600 px-[10px] py-[20px] rounded-[10px] flex flex-col gap-[50px] items-center mb-[px]">
            <div className="border border-black shadow-lg rounded-[10px] cursor-pointer w-[40px] h-[40px] "></div>
            <div className="border border-black shadow-lg rounded-[10px] cursor-pointer w-[40px] h-[40px] "></div>
            <div className="border border-black shadow-lg rounded-[10px] cursor-pointer w-[40px] h-[40px] "></div>
          </div>
        </div>
      </div>
      {/* Right Side Content */}
      <div
        style={{ width: "calc(100% - 200px)" }}
        className=" bg-[#e0dede] px-[25px] py-[15px] flex items-end justify-center pb-[20px]"
      >
        {/*best value - h-[80%] w-full  */}
        <div className=" rounded-[10px] w-full h-[85%] bg-[#FFFDE7] overflow-y-scroll">
          <div className="flex flex-wrap justify-start gap-[18px] p-[25px] py-[25px]">
            {/* perfect width -> w-[24%] h-[240px]or w-[380px] h-[240px] or rem*/}
            <div className="w-96 h-72 rounded-[10px] bg-[#fff493] cursor-pointer shadow-lg flex justify-center items-center text-[35px]">
              ▷
            </div>
            <div className="w-96 h-72 rounded-[10px] bg-[#fff493] cursor-pointer shadow-lg flex justify-center items-center text-[35px]">
              ▷
            </div>
            <div className="w-96 h-72 rounded-[10px] bg-[#fff493] cursor-pointer shadow-lg flex justify-center items-center text-[35px]">
              ▷
            </div>
            <div className="w-96 h-72 rounded-[10px] bg-[#fff493] cursor-pointer shadow-lg flex justify-center items-center text-[35px]">
              ▷
            </div>
            <div className="w-96 h-72 rounded-[10px] bg-[#fff493] cursor-pointer shadow-lg flex justify-center items-center text-[35px]">
              ▷
            </div>
            <div className="w-96 h-72 rounded-[10px] bg-[#fff493] cursor-pointer shadow-lg flex justify-center items-center text-[35px]">
              ▷
            </div>
            <div className="w-96 h-72 rounded-[10px] bg-[#fff493] cursor-pointer shadow-lg flex justify-center items-center text-[35px]">
              ▷
            </div>
            <div className="w-96 h-72 rounded-[10px] bg-[#fff493] cursor-pointer shadow-lg flex justify-center items-center text-[35px]">
              ▷
            </div>
            <div className="w-96 h-72 rounded-[10px] bg-[#fff493] cursor-pointer shadow-lg flex justify-center items-center text-[35px]">
              ▷
            </div>
            <div className="w-96 h-72 rounded-[10px] bg-[#fff493] cursor-pointer shadow-lg flex justify-center items-center text-[35px]">
              ▷
            </div>
            <div className="w-96 h-72 rounded-[10px] bg-[#fff493] cursor-pointer shadow-lg flex justify-center items-center text-[35px]">
              ▷
            </div>
            <div className="w-96 h-72 rounded-[10px] bg-[#fff493] cursor-pointer shadow-lg flex justify-center items-center text-[35px]">
              ▷
            </div>
            <div className="w-96 h-72 rounded-[10px] bg-[#fff493] cursor-pointer shadow-lg flex justify-center items-center text-[35px]">
              ▷
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
