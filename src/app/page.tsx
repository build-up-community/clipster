import Image from "next/image";

export default function Home() {
  return (
    <main className="border-[5px] border-red-500 h-screen bg-white flex w-screen">
      {/* Left Side Cotent*/}
      <div className="flex-[1] px-[25px] py-[15px]">
        <div className="flex flex-col h-full items-center">
          {/* Image */}
          <div className="my-[14px] flex flex-col items-center">
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
          <div className="bg-[#fdfdf6] h-full w-full shadow-2xl shadow-teal-600 px-[10px] py-[20px] rounded-[10px] flex flex-col gap-[50px] items-center">
            <div className="border border-black shadow-lg rounded-[10px] cursor-pointer w-[120px] h-[120px]"></div>
            <div className="border border-black shadow-lg rounded-[10px] cursor-pointer w-[120px] h-[120px]"></div>
            <div className="border border-black shadow-lg rounded-[10px] cursor-pointer w-[120px] h-[120px]"></div>
          </div>
        </div>
      </div>
      {/* Right Side Content */}
      <div className="flex-[5] bg-[#e0dede] w-full px-[25px] py-[15px] flex items-end justify-center pb-[20px]">
        <div className=" rounded-[10px] w-[100%] h-[85%] bg-[#FFFDE7] overflow-y-scroll">
          <div className="flex flex-wrap justify-evenly gap-[18px] p-[10px] py-[25px]">
            <div className="w-[30%] h-[240px] rounded-[10px] bg-[#fff493] cursor-pointer shadow-lg"></div>
            <div className="w-[30%] h-[240px] rounded-[10px] bg-[#fff493] cursor-pointer shadow-lg"></div>
            <div className="w-[30%] h-[240px] rounded-[10px] bg-[#fff493] cursor-pointer shadow-lg"></div>
            <div className="w-[30%] h-[240px] rounded-[10px] bg-[#fff493] cursor-pointer shadow-lg"></div>
            <div className="w-[30%] h-[240px] rounded-[10px] bg-[#fff493] cursor-pointer shadow-lg"></div>
            <div className="w-[30%] h-[240px] rounded-[10px] bg-[#fff493] cursor-pointer shadow-lg"></div>
            <div className="w-[30%] h-[240px] rounded-[10px] bg-[#fff493] cursor-pointer shadow-lg"></div>
            <div className="w-[30%] h-[240px] rounded-[10px] bg-[#fff493] cursor-pointer shadow-lg"></div>
            <div className="w-[30%] h-[240px] rounded-[10px] bg-[#fff493] cursor-pointer shadow-lg"></div>
            <div className="w-[30%] h-[240px] rounded-[10px] bg-[#fff493] cursor-pointer shadow-lg"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
