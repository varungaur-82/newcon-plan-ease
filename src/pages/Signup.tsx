import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import constructionHero from "@/assets/construction-hero.jpg";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup attempt:", formData);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-monday-light to-white">
      {/* Left Column - Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-monday-purple via-monday-blue to-monday-purple" />
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
                Join thousands of construction professionals who trust NewCon for seamless project management and team collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Card className="border-0 shadow-xl bg-white rounded-3xl overflow-hidden">
            <CardHeader className="text-center pb-8 pt-10">
              <div className="lg:hidden mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-monday-purple to-monday-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <h1 className="text-3xl font-bold text-monday-dark">
                  NewCon
                </h1>
                <p className="text-monday-gray mt-2">Construction Planning Made Simple</p>
              </div>
              <CardTitle className="text-3xl font-bold text-monday-dark">Create your account</CardTitle>
              <CardDescription className="text-monday-gray text-lg">
                Start managing your construction projects today
              </CardDescription>
            </CardHeader>
            <CardContent className="px-10 pb-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <Label htmlFor="firstName" className="text-monday-dark font-medium">First name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="h-12 border-2 border-gray-200 focus:border-monday-blue rounded-xl transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="lastName" className="text-monday-dark font-medium">Last name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="h-12 border-2 border-gray-200 focus:border-monday-blue rounded-xl transition-all duration-200"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-monday-dark font-medium">Email address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 border-2 border-gray-200 focus:border-monday-blue rounded-xl transition-all duration-200"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="password" className="text-monday-dark font-medium">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="h-12 border-2 border-gray-200 focus:border-monday-blue rounded-xl transition-all duration-200"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="confirmPassword" className="text-monday-dark font-medium">Confirm password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="h-12 border-2 border-gray-200 focus:border-monday-blue rounded-xl transition-all duration-200"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-medium bg-gradient-to-r from-monday-purple to-monday-blue hover:shadow-lg transition-all duration-300 rounded-xl"
                >
                  Create your NewCon account
                </Button>
              </form>
              <div className="mt-8 text-center">
                <p className="text-monday-gray">
                  Already have an account?{" "}
                  <Link 
                    to="/login" 
                    className="text-monday-blue hover:text-monday-purple font-medium transition-colors"
                  >
                    Sign in instead
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

export default Signup;