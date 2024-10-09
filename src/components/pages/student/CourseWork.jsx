import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const assignments = [
  { id: 1, title: "React Basics", lastDate: "2024-10-15" },
  { id: 2, title: "State Management", lastDate: "2024-10-20" },
  { id: 3, title: "API Integration", lastDate: "2024-10-25" },
];

const quizzes = [
  { id: 1, title: "React Basics", lastDate: "2024-10-15" },
  { id: 2, title: "State Management", lastDate: "2024-10-20" },
  { id: 3, title: "API Integration", lastDate: "2024-10-25" },
];

const gdbs = [
  { id: 1, title: "React Basics", lastDate: "2024-10-15" },
  { id: 2, title: "State Management", lastDate: "2024-10-20" },
  { id: 3, title: "API Integration", lastDate: "2024-10-25" },
];

const Assignments = () => {
  return (
    <div className="mt-10 mx-9 md:ml-64">
      <h1 className="text-[1.75rem] font-medium">Course Work</h1>
      <div className="container mx-auto mb-4 p-4 space-y-6">
        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl">Assignments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-y-auto border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="border-r px-4 py-3">Course</TableHead>
                    <TableHead className="px-4 py-3">Last Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {assignments.map((assignment) => (
                    <TableRow key={assignment.id}>
                      <TableCell className="font-medium border-r px-4 py-3">
                        {assignment.title}
                      </TableCell>
                      <TableCell className="px-4 py-3">
                        {assignment.lastDate}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl">Quizzes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-y-auto border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="border-r px-4 py-3">Course</TableHead>
                    <TableHead className="px-4 py-3">Last Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {quizzes.map((quiz) => (
                    <TableRow key={quiz.id}>
                      <TableCell className="font-medium border-r px-4 py-3">
                        {quiz.title}
                      </TableCell>
                      <TableCell className="px-4 py-3">
                        {quiz.lastDate}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl">
              Group Discussion Boards (GDBs)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-y-auto border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="border-r px-4 py-3">Course</TableHead>
                    <TableHead className="px-4 py-3">Last Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {gdbs.map((gdb) => (
                    <TableRow key={gdb.id}>
                      <TableCell className="font-medium border-r px-4 py-3">
                        {gdb.title}
                      </TableCell>
                      <TableCell className="px-4 py-3">
                        {gdb.lastDate}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Assignments;
