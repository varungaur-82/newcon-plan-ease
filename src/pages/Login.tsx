import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import constructionHero from "@/assets/construction-hero.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Column - Hero Section */}
      <div 
        className="hidden lg:flex lg:w-1/2 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${constructionHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/40" />
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-primary">NewCon</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Construction Planning Made Simple
            </p>
            <p className="text-white/70 mt-4">
              Streamline your construction projects with our comprehensive planning and management tools.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center pb-8">
              <div className="lg:hidden mb-4">
                <h1 className="text-3xl font-bold">
                  <span className="text-primary">NewCon</span>
                </h1>
                <p className="text-muted-foreground mt-2">Construction Planning Made Simple</p>
              </div>
              <CardTitle className="text-2xl font-semibold">Welcome Back</CardTitle>
              <CardDescription className="text-muted-foreground">
                Sign in to your account to continue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Link 
                    to="#" 
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Button type="submit" className="w-full h-11 text-base font-medium">
                  Sign In
                </Button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-muted-foreground">
                  Don't have an account?{" "}
                  <Link 
                    to="/signup" 
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Sign up
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