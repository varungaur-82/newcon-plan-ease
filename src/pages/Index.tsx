import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import constructionHero from "@/assets/construction-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-monday-blue via-monday-purple to-monday-blue">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-monday-blue/90 via-monday-purple/80 to-monday-blue/90" />
        
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-20 p-6">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">
              <span className="text-white">NewCon</span>
            </h1>
            <div className="space-x-4">
              <Button 
                variant="outline" 
                asChild 
                className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-monday-dark transition-all duration-300"
              >
                <Link to="/login">Sign In</Link>
              </Button>
              <Button 
                asChild 
                className="bg-white text-monday-blue hover:bg-white/90 shadow-lg transition-all duration-300"
              >
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
            NewCon
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-white/90">
            Construction Planning Made Simple
          </p>
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-3xl mx-auto">
            Streamline your construction projects with our comprehensive planning and management tools. 
            From project inception to completion, we've got you covered.
          </p>
          <div className="space-x-4">
            <Button 
              size="lg" 
              asChild 
              className="text-lg px-8 py-6 bg-white text-monday-blue hover:bg-white/90 shadow-xl transition-all duration-300 rounded-xl"
            >
              <Link to="/signup">Start Your Project</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="text-lg px-8 py-6 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-monday-dark transition-all duration-300 rounded-xl"
            >
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
