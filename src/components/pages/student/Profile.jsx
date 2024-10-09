import React from "react";
import default_pic from "../../../../public/ava1.avif";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircleUser, GraduationCap, IdCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <div className="mt-10 mx-9 md:ml-64">
      <h1 className="text-[1.75rem] font-medium">Student Profile</h1>
      <div className="flex gap-8 my-12">
        <div className="p-6 bg-white shadow-[10px_10px_15px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)] border border-slate-200 w-[21rem]">
          <div className="flex flex-col gap-2">
            <div className="border border-slate-200 flex items-center justify-center rounded-full p-2">
              <img
                src={default_pic}
                width={200}
                className="rounded-full box-border align-middle"
              />
            </div>
            <div className="text-center my-10 flex flex-col gap-y-2">
              <h2 className="text-xl font-semibold">MUHAMMAD INAM ASLAM</h2>
              <p>bc110101102</p>
              <p className="text-blue-500">bc110101102mia@vu.edu.pk</p>
            </div>
          </div>
        </div>
        <div className="w-full p-3 shadow-[10px_10px_15px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)] border border-slate-200 bg-white">
          <Tabs defaultValue="account">
            <TabsList className="flex gap-x-3 p-5 w-[34rem]">
              <TabsTrigger className="px-4 hover:bg-slate-200" value="account">
                <CircleUser className="size-4 mr-2" />
                Student Profile
              </TabsTrigger>
              <TabsTrigger className="px-4 hover:bg-slate-200" value="password">
                <IdCard className="size-4 mr-2" />
                Personal Information
              </TabsTrigger>
              <TabsTrigger
                className="px-4 hover:bg-slate-200"
                value="academic-history"
              >
                <GraduationCap className="size-4 mr-2" />
                Academic History
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="account"
              className="border border-slate-200 h-80"
            >
              <div className="px-10 py-4 flex gap-10">
                <div className="flex flex-col gap-2 text-left">
                  <p>Form No</p>
                  <p>Study Program</p>
                  <p>Admission Date</p>
                </div>
                <div className="flex flex-col gap-2 text-left font-semibold">
                  <p>BW123456</p>
                  <p>Software Engineering</p>
                  <p>Apr 01, 2022</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="password"
              className="border border-slate-200 h-auto"
            >
              <div className="px-10 py-4 flex gap-20">
                <div className="flex flex-col gap-2 text-left">
                  <p>Father's Name</p>
                  <p>Gender</p>
                  <p>Birth Date</p>
                  <p>CNIC</p>
                </div>
                <div className="flex flex-col gap-2 text-left font-semibold">
                  <p>MUHAMMAD ASLAM</p>
                  <p>Male</p>
                  <p>Jan 28, 2003</p>
                  <p>32301-1001011-5</p>
                </div>
              </div>
              <div className="flex px-10 py-4">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-9">
                    <p>Permanent Address</p>
                    <textarea className="border border-slate-200 rounded-md text-gray-400 font-normal px-2 py-1 w-[38rem]">
                      Address
                    </textarea>
                  </div>
                  <div className="flex items-center gap-3">
                    <p>Student Personal Email</p>
                    <input
                      className="border border-slate-200 rounded-md text-gray-400 font-normal px-2 py-1 w-[38rem]"
                      type="text"
                      name="text"
                      id="text"
                      value="someone@gmail.com"
                    />
                  </div>
                  <div className="flex items-center gap-16">
                    <p>Phone (Mobile)</p>
                    <input
                      className="border border-slate-200 rounded-md text-gray-400 font-normal px-2 py-1 w-[38rem]"
                      type="text"
                      name="text"
                      id="text"
                      value="+92 123 4567890"
                    />
                  </div>
                </div>
              </div>
              <div className="px-10 py-4">
                <Button className="px-6">Save</Button>
              </div>
            </TabsContent>
            <TabsContent
              className="border border-slate-200 h-80"
              value="academic-history"
            >
              <div className="px-10 py-4 flex gap-10">
                <div className="flex flex-col gap-2 text-left">
                  <p>Marks in Matric</p>
                  <p>Marks in Intermediate</p>
                </div>
                <div className="flex flex-col gap-2 text-left font-semibold">
                  <p>964 / 1100</p>
                  <p>642 / 1100</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
