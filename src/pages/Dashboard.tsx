import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Plus, Search, Settings, Home, Calendar, Users, FileText, BarChart3 } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-monday-light to-white">
      {/* Header */}
      <header className="bg-white border-b border-monday-light/30 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-monday-blue to-monday-purple rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-lg"></div>
              </div>
              <h1 className="text-2xl font-bold text-monday-dark">NewCon</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6 ml-8">
              <Button variant="ghost" className="text-monday-dark hover:text-monday-blue">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
              <Button variant="ghost" className="text-monday-gray hover:text-monday-blue">
                <Calendar className="w-4 h-4 mr-2" />
                Projects
              </Button>
              <Button variant="ghost" className="text-monday-gray hover:text-monday-blue">
                <Users className="w-4 h-4 mr-2" />
                Teams
              </Button>
              <Button variant="ghost" className="text-monday-gray hover:text-monday-blue">
                <BarChart3 className="w-4 h-4 mr-2" />
                Reports
              </Button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-monday-gray hover:text-monday-blue">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-monday-gray hover:text-monday-blue relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-monday-orange rounded-full"></span>
            </Button>
            <Button variant="ghost" size="icon" className="text-monday-gray hover:text-monday-blue">
              <Settings className="w-5 h-5" />
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-monday-purple text-white">JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-monday-dark mb-2">Good morning, John! 👋</h2>
            <p className="text-monday-gray text-lg">Here's what's happening with your construction projects today.</p>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-monday-blue to-monday-purple hover:shadow-lg transition-all duration-300">
                <Plus className="w-4 h-4 mr-2" />
                New Project
              </Button>
              <Button variant="outline" className="border-monday-blue text-monday-blue hover:bg-monday-blue hover:text-white">
                <Users className="w-4 h-4 mr-2" />
                Invite Team
              </Button>
              <Button variant="outline" className="border-monday-purple text-monday-purple hover:bg-monday-purple hover:text-white">
                <FileText className="w-4 h-4 mr-2" />
                Create Template
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-monday-gray">Active Projects</CardTitle>
                  <div className="w-8 h-8 bg-monday-blue/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-monday-blue" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-monday-dark mb-1">12</div>
                <div className="flex items-center">
                  <Badge className="bg-green-100 text-green-700 text-xs">+2 this week</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-monday-gray">Team Members</CardTitle>
                  <div className="w-8 h-8 bg-monday-purple/10 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-monday-purple" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-monday-dark mb-1">47</div>
                <div className="flex items-center">
                  <Badge className="bg-blue-100 text-blue-700 text-xs">Active today</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-monday-gray">Tasks Completed</CardTitle>
                  <div className="w-8 h-8 bg-monday-green/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-monday-green" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-monday-dark mb-1">84%</div>
                <div className="flex items-center">
                  <Badge className="bg-green-100 text-green-700 text-xs">On schedule</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-monday-gray">Budget Used</CardTitle>
                  <div className="w-8 h-8 bg-monday-orange/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-monday-orange" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-monday-dark mb-1">67%</div>
                <div className="flex items-center">
                  <Badge className="bg-orange-100 text-orange-700 text-xs">$2.1M used</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-monday-dark">Recent Projects</CardTitle>
                <CardDescription className="text-monday-gray">Your latest construction projects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-monday-light/50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-monday-blue to-monday-purple rounded-xl flex items-center justify-center">
                      <span className="text-white text-sm font-bold">RC</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-monday-dark">Riverside Complex</h4>
                      <p className="text-sm text-monday-gray">Due: Dec 15, 2024</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700">On Track</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-monday-light/50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-monday-orange to-monday-red rounded-xl flex items-center justify-center">
                      <span className="text-white text-sm font-bold">MT</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-monday-dark">Metro Tower</h4>
                      <p className="text-sm text-monday-gray">Due: Jan 30, 2025</p>
                    </div>
                  </div>
                  <Badge className="bg-orange-100 text-orange-700">Behind</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-monday-light/50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-monday-green to-monday-blue rounded-xl flex items-center justify-center">
                      <span className="text-white text-sm font-bold">GH</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-monday-dark">Green Heights</h4>
                      <p className="text-sm text-monday-gray">Due: Mar 20, 2025</p>
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-700">Planning</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-monday-dark">Upcoming Deadlines</CardTitle>
                <CardDescription className="text-monday-gray">Tasks requiring your attention</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-xl border-l-4 border-monday-red">
                  <div className="w-2 h-2 bg-monday-red rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-monday-dark">Foundation Inspection</h4>
                    <p className="text-sm text-monday-gray">Riverside Complex - Tomorrow</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-xl border-l-4 border-monday-orange">
                  <div className="w-2 h-2 bg-monday-orange rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-monday-dark">Material Delivery</h4>
                    <p className="text-sm text-monday-gray">Metro Tower - Dec 20</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl border-l-4 border-monday-blue">
                  <div className="w-2 h-2 bg-monday-blue rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-monday-dark">Client Meeting</h4>
                    <p className="text-sm text-monday-gray">Green Heights - Dec 22</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-xl border-l-4 border-monday-green">
                  <div className="w-2 h-2 bg-monday-green rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-monday-dark">Safety Training</h4>
                    <p className="text-sm text-monday-gray">All Projects - Dec 25</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;