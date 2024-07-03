import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Header Section */}
      <header className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to SaaS Company</h1>
        <p className="text-xl mb-8">Your solution for managing everything</p>
        <Button variant="primary" size="lg">Get Started</Button>
      </header>

      {/* Features Section */}
      <section id="features" className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Feature 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature 1.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature 2.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature 3.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of Basic plan.</p>
              <Button variant="primary">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pro</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of Pro plan.</p>
              <Button variant="primary">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of Enterprise plan.</p>
              <Button variant="primary">Choose Plan</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="text-center">
                <img src="https://placehold.co/100x100" alt="Customer 1" className="mx-auto rounded-full mb-4" />
                <p className="font-bold">Customer 1</p>
                <p>"This product is amazing!"</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="text-center">
                <img src="https://placehold.co/100x100" alt="Customer 2" className="mx-auto rounded-full mb-4" />
                <p className="font-bold">Customer 2</p>
                <p>"I can't live without it."</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="text-center">
                <img src="https://placehold.co/100x100" alt="Customer 3" className="mx-auto rounded-full mb-4" />
                <p className="font-bold">Customer 3</p>
                <p>"Highly recommend to everyone."</p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      <Separator />

      {/* Footer Section */}
      <footer id="contact" className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 SaaS Company. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;