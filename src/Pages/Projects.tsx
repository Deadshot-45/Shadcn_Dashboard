
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  { name: "Website Redesign", status: "Active", progress: "75%" },
  { name: "Mobile App", status: "Pending", progress: "20%" },
  { name: "CRM Migration", status: "Completed", progress: "100%" },
];

const Projects = () => {
  return (
    <div className="w-full h-full p-2 md:p-4 space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>

      <Card>
        <CardHeader>
          <CardTitle>All Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="pb-2">Project</th>
                <th className="pb-2">Status</th>
                <th className="pb-2">Progress</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p, idx) => (
                <tr key={idx} className="border-b text-sm">
                  <td className="py-3">{p.name}</td>
                  <td className="py-3">
                    <Badge
                      className={
                        p.status === "Completed"
                          ? "bg-green-600"
                          : p.status === "Active"
                          ? "bg-blue-600"
                          : "bg-yellow-600"
                      }
                    >
                      {p.status}
                    </Badge>
                  </td>
                  <td className="py-3">{p.progress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Projects;
