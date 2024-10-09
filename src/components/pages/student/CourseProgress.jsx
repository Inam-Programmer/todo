import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

// Course data with the specified courses
const courses = [
  { id: "react", name: "React Fundamentals", progress: 75 },
  { id: "javascript", name: "Advanced JavaScript", progress: 60 },
  { id: "database", name: "Database Systems", progress: 40 },
  { id: "uiux", name: "UI/UX Design Principles", progress: 90 },
  { id: "dsa", name: "Data Structures and Algorithms", progress: 55 },
];

const CircleChart = ({ progress }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg className="size-60">
      <circle
        className="text-red-200"
        strokeWidth="12"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx="116"
        cy="116"
      />
      <circle
        className="text-green-500"
        strokeWidth="12"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx="116"
        cy="116"
      />
      <text
        className="text-3xl font-bold"
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {`${progress}%`}
      </text>
    </svg>
  );
};

const CourseProgress = () => {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  return (
    <div className="mt-10 mx-9 md:ml-64">
      <Card className="w-full mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Course Progress</CardTitle>
          <CardDescription>
            Track your progress across different courses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs
            defaultValue={courses[0].id}
            className="w-full bg-none"
            onValueChange={(value) =>
              setSelectedCourse(
                courses.find((course) => course.id === value) || courses[0]
              )
            }
          >
            <TabsList className="grid grid-cols-5 w-full">
              {courses.map((course) => (
                <TabsTrigger
                  key={course.id}
                  value={course.id}
                  className="text-xs sm:text-sm bg-none hover:bg-slate-200"
                >
                  {course.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {courses.map((course) => (
              <TabsContent key={course.id} value={course.id} className="mt-6">
                <div className="flex flex-col items-center space-y-4">
                  <CircleChart progress={course.progress} />
                  <h3 className="text-xl font-semibold text-center">
                    {course.name}
                  </h3>
                  <div className="w-full max-w-md space-y-2">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span className="text-green-500">
                        Completed: {course.progress}%
                      </span>
                      <span className="text-red-500">
                        Not Completed: {100 - course.progress}%
                      </span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseProgress;
