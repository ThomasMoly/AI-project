"use client"

import React, { useRef } from 'react'
import Link from "next/link";
import uploadimg from "@/public/uploadimg.png"
import Image from 'next/image';


const page = () => {

  const fileInputReference = useRef<HTMLInputElement | null>(null)

  const handleUpload = async(file: File | undefined) => {
    const formData = new FormData()

    if(!file){
      console.error()
       return;
    }

    formData.append('file', file);
  
    const response = await fetch("/api/extract", {
      method: "POST",
      body: formData
    })

    const data = await response.json()

    console.log(data)
  }
  

  return (
    <>
      <div className="flex flex-col text-center justify-center h-screen text-black bg-white">
        <div className='flex justify-center'>
          <div className=' w-250 h-150 bg-gray-200 rounded-3xl'>
            <div className='hover:cursor-pointer'>
            <form>
              <input type="file" className='absolute right-[9999px]' ref={fileInputReference}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files?.[0]
                handleUpload(file)
              }}
              />
            </form>
             <div className="flex justify-center items-center h-full"
             onClick={() => {
                    fileInputReference.current?.click()
                  }}
             
                  >
                <Image src={uploadimg} alt="upload" width={200} className="cursor-pointer mt-40"
                  
                />
              </div>
              <button  type='button' className='text-gray-500 mt-10 bg hover:cursor-pointer' onClick={() => {
                fileInputReference.current?.click()
              }}>Upload your resume in .pdf .docx or .doc</button>
            </div>
            
          </div>    
        </div>
        <Link className="m-5 p-5 bg-green-100 text-black rounded-3xl hover:bg-green-300 hover:cursor-pointer hover:-translate-y-2 duration-300 ease-in-out"
        href = "/">
          Return
       </Link>    
     </div>
    </>
  )
}

export default page