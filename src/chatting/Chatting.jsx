import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getlawyers } from "../redux toolkit/lawyerSlice";
import {useNavigate} from "react-router-dom";
import {me } from "../redux toolkit/authSlice.js"
const Chatting = () => {
  const dispatch = useDispatch();
const navigate=useNavigate();
const userid=useSelector((state)=>state?.auth?.userdata?._id);

const handleClick=(lawyerid)=>{
  navigate("/chatsection",{state:{userId:userid, lawyerId:lawyerid}})
}
  useEffect(() => {
    dispatch(getlawyers());
    dispatch(me())
  }, []);
  const lawyerdata = useSelector((state) => state.lawyer.lawyerdata);
  const arrayofapproved = lawyerdata.filter((lawyer) => {
    return lawyer.status === "approved";
  });
  console.log("this is filtered array of approved:" + arrayofapproved);
  arrayofapproved.forEach((element) => {
    console.log(element);
  });
  return (
    <div className="bg-black min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center underline underline-offset-2 text-[#FF0055] mb-8">
        Lawyer List
      </h1>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col gap-11">
          {arrayofapproved?.map((lawyer) => (
            <div
              key={lawyer._id}
              className="bg-black  shadow-cyan-700   rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Status: {lawyer.status}
                </h3>
                {lawyer.userid && (
                  <img
                    src={lawyer.userid.profile}
                    alt="User Profile"
                    className="w-12 h-12 rounded-full"
                  />
                )}
              </div>
              <p className="text-gray-300 mb-2">
                User: {lawyer.userid ? lawyer.userid.name : "Unknown"}
              </p>
              <p className="text-gray-300 mb-2">
                Created At: {new Date(lawyer.createdAt).toLocaleString()}
              </p>
              {lawyer.documents && (
                <div className="mb-2">
                  <p className="text-gray-300">Document Preview:</p>
                  <button
                    // onClick={() => handlePreview(lawyer.documents)}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                  >
                    Preview
                  </button>
                </div>
              )}
              {lawyer.adminnotes && (
                <p className="text-gray-300 mb-2">
                  Admin Notes: {lawyer.adminnotes}
                </p>
              )}
              <button
              onClick={()=>handleClick(lawyer._id)}
               className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-pink-500 hover:via-purple-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition duration-300">
                Chat Now
              </button>

              {/* {renderActionButton(lawyer)} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chatting;

