import Link from "next/link";
import resume from "@/public/resumes.png"
import Image from "next/image";

export default function Home() {

  

  return (
    <>
      <div className="flex flex-col text-center justify-center h-screen bg-gradient-to-br from-white to-blue-400 ">
        <div className="flex flex-row items-center justify-center space-x-5 lg:space-x-30 pt-10">
          <div className="text-blue-600 font-bold text-3xl lg:text-4xl w-200 ml-10">
            <h1> Hello! Welcome to Uni-res. Your professor AI resume and job seeking counselor.</h1>
            <div className="flex justify-center text-center items-center mb-4 ">
              <Link className="flex items-center justify-center px-8 py-4 text-xl bg-blue-100 text-black rounded-3xl hover:bg-blue-300 hover:cursor-pointer hover:-translate-y-2 duration-300 ease-in-out mt-15"
              href = "/upload">
                Get Started!
              </Link>
          </div> 
          </div>
          <Image src={resume} alt="Resume image" className="mr-5 lg:mr-0" />
        </div>
        
          
     </div>
    </>
  );
}
