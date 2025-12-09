import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const team = [
  { name: "Arjun Singh", role: "Project Manager" },
  { name: "Sara Mehta", role: "UI/UX Designer" },
  { name: "Rahul Verma", role: "Fullstack Developer" },
  { name: "Priya Nair", role: "QA Engineer" },
];

const Team = () => {
  return (
    <div className="w-full h-full p-2 md:p-4 space-y-6">
      <h1 className="text-3xl font-bold">Team</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {team.map((member, idx) => (
          <Card key={idx}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Contributing to current active projects.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Team;
