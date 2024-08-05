import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Dog, Bone } from "lucide-react";

const dogImages = [
  "https://images.unsplash.com/photo-1517849845537-4d257902454a",
  "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
];

const funFacts = [
  "Dogs' sense of smell is at least 40x better than ours",
  "The Basenji is the only breed of dog that can't bark",
  "A dog's nose print is unique, much like a human's fingerprint",
  "Dalmatians are born completely white, and develop their spots as they get older",
];

const Index = () => {
  const [showFunFact, setShowFunFact] = useState(false);
  const [funFactIndex, setFunFactIndex] = useState(0);

  const toggleFunFact = () => {
    setShowFunFact(!showFunFact);
    if (!showFunFact) {
      setFunFactIndex(Math.floor(Math.random() * funFacts.length));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center text-indigo-800 flex items-center justify-center">
          <Dog className="mr-4 h-12 w-12" />
          All About Dogs
          <Bone className="ml-4 h-12 w-12" />
        </h1>
        
        <Carousel className="mb-8">
          <CarouselContent>
            {dogImages.map((src, index) => (
              <CarouselItem key={index}>
                <img 
                  src={src}
                  alt={`Cute dog ${index + 1}`}
                  className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Card className="mb-8 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-indigo-700">What are Dogs?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated.</p>
          </CardContent>
        </Card>

        <Card className="mb-8 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-indigo-700">Characteristics of Dogs</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-none pl-5 space-y-2">
              {["Loyal and affectionate companions", "Highly intelligent and trainable", "Come in a wide variety of breeds, sizes, and colors", "Have an excellent sense of smell and hearing", "Require regular exercise and mental stimulation"].map((item, index) => (
                <li key={index} className="flex items-center">
                  <Bone className="mr-2 h-5 w-5 text-indigo-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-indigo-700">Popular Dog Breeds</CardTitle>
            <CardDescription>Here are some of the most popular dog breeds worldwide:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-4">
              {["Labrador Retriever", "German Shepherd", "Golden Retriever", "French Bulldog", "Bulldog", "Poodle", "Beagle", "Rottweiler"].map((breed, index) => (
                <li key={index} className="flex items-center bg-indigo-100 p-2 rounded-md">
                  <Dog className="mr-2 h-5 w-5 text-indigo-500" />
                  <span>{breed}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-indigo-700">Fun Fact Toggle</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Switch id="fun-fact" checked={showFunFact} onCheckedChange={toggleFunFact} />
              <Label htmlFor="fun-fact">Show a random fun fact about dogs</Label>
            </div>
            {showFunFact && (
              <p className="mt-4 p-4 bg-indigo-100 rounded-md text-indigo-800">
                {funFacts[funFactIndex]}
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
