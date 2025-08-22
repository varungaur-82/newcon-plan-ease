import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import constructionHero from "@/assets/construction-hero.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Bypass authentication for now - redirect directly to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-monday-light to-white">
      {/* Left Column - Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-monday-blue via-monday-purple to-monday-blue" />
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <div className="max-w-md">
            <div className="mb-8">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h1 className="text-5xl font-bold mb-4 text-white">
                NewCon
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Construction Planning Made Simple
              </p>
              <p className="text-white/70 mt-4">
                Join thousands of construction teams who streamline their projects with our intuitive planning platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Card className="border-0 shadow-xl bg-white rounded-3xl overflow-hidden">
            <CardHeader className="text-center pb-8 pt-10">
              <div className="lg:hidden mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-monday-blue to-monday-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <h1 className="text-3xl font-bold text-monday-dark">
                  NewCon
                </h1>
                <p className="text-monday-gray mt-2">Construction Planning Made Simple</p>
              </div>
              <CardTitle className="text-3xl font-bold text-monday-dark">Welcome back</CardTitle>
              <CardDescription className="text-monday-gray text-lg">
                Sign in to continue to your workspace
              </CardDescription>
            </CardHeader>
            <CardContent className="px-10 pb-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-monday-dark font-medium">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 border-2 border-gray-200 focus:border-monday-blue rounded-xl transition-all duration-200"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="password" className="text-monday-dark font-medium">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-12 border-2 border-gray-200 focus:border-monday-blue rounded-xl transition-all duration-200"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Link 
                    to="#" 
                    className="text-sm text-monday-blue hover:text-monday-purple transition-colors font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-medium bg-gradient-to-r from-monday-blue to-monday-purple hover:shadow-lg transition-all duration-300 rounded-xl"
                >
                  Sign in to NewCon
                </Button>
              </form>
              <div className="mt-8 text-center">
                <p className="text-monday-gray">
                  Don't have an account?{" "}
                  <Link 
                    to="/signup" 
                    className="text-monday-blue hover:text-monday-purple font-medium transition-colors"
                  >
                    Create account
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;