// "use client"  
// import { FaArrowLeft } from "react-icons/fa"  
// import logo from "../assets/nextJs.png"  
// import Link from "next/link"  
// import Image from "next/image"  
// import axios from "axios"  
// import { FaLocationDot } from "react-icons/fa6"  
// import { useRouter,NextRouter } from "next/router"  

// export default function Job() {  


//     const router = useRouter();  
//     const { singleJob } = router.query;  
//     console.log(router)

    

//     const handleDeleteJob = async () => {  
//         try {  
//             let response = await axios.delete(`http://localhost:5000/jobs/${singleJob.id}`)  
//             console.log("Delete Job API call", response)  
//         } catch (error) {  
//             console.log("Delete Job Error", error)  
//         }  
//     }  

//     // Check if singleJob is available before rendering  
//     if (!singleJob) {  
//         return <div>Loading...</div>; // Show loading message or spinner  
//     }  

//     return (  
//         <>  

//             {/* Navbar Section */}  
//             <nav className="bg-gray-700 border-b border-green-500">  
//                 {/* ... existing navbar code ... */}  
//             </nav>  

//             {/* Go Back Section */}  
//             <section>  
//                 <div className="container m-auto py-6 px-6">  
//                     <Link  
//                         href="/jobs"  
//                         className="text-green-500 hover:text-green-600 flex items-center"  
//                     >  
//                         <FaArrowLeft className='mr-2' />  
//                         Back to Job Listings  
//                     </Link>  
//                 </div>  
//             </section>  

//             <section className="bg-green-50">  
//                 <div className="container m-auto py-10 px-6">  
//                     <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">  
//                         <main>  
//                             <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">  
//                                 <div className="text-gray-500 mb-4">{singleJob}</div>  
//                                 <h1 className="text-3xl font-bold mb-4">{singleJob}</h1>  
//                                 <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">  
//                                     <FaLocationDot className="text-lg text-orange-700 mr-2" />  
//                                     <p className="text-orange-700">{singleJob}</p>  
//                                 </div>  
//                             </div>  

//                             <div className="bg-white p-6 rounded-lg shadow-md mt-6">  
//                                 <h3 className="text-green-800 text-lg font-bold mb-6">  
//                                     Job Description  
//                                 </h3>  
//                                 <p className="mb-4">{singleJob}</p>  
//                                 <h3 className="text-green-800 text-lg font-bold mb-2">Salary</h3>  
//                                 <p className="mb-4">{singleJob}</p>  
//                             </div>  
//                         </main>  

//                         {/* Sidebar */}  
//                         <aside>  
//                             {/* Company Info */}  
//                             <div className="bg-white p-6 rounded-lg shadow-md">  
//                                 <h3 className="text-xl font-bold mb-6">Company Info</h3>  
//                                 <h2 className="text-2xl">{singleJob}</h2>  
//                                 <p className="my-2">{singleJob}</p>  
//                                 <hr className="my-4" />  
//                                 <h3 className="text-xl">Contact Email:</h3>  
//                                 <p className="my-2 bg-green-100 p-2 font-bold">{singleJob}</p>  
//                                 <h3 className="text-xl">Contact Phone:</h3>  
//                                 <p className="my-2 bg-green-100 p-2 font-bold">{singleJob}</p>  
//                             </div>  

//                             {/* Manage Job */}  
//                             <div className="bg-white p-6 rounded-lg shadow-md mt-6">  
//                                 <h3 className="text-xl font-bold mb-6">Manage Job</h3>  
//                                 <Link  
//                                     href="/add-job"  
//                                      state={{ singleJob }}  
//                                     className="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"  
//                                 >  
//                                     Edit Job  
//                                 </Link>  
//                                 <button   
//                                     onClick={handleDeleteJob}  
//                                     className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">  
//                                     Delete Job  
//                                 </button>  
//                             </div>  
//                         </aside>  
//                     </div>  
//                 </div>  
//             </section>  
//         </>  
//     )  
// }