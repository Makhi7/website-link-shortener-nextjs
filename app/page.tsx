"use client"
import LinkForm from "@/components/form";


export default function Home() {

  const handleLinkShorten = (link: string): string => {
    // Simulate the link shortening process (replace with your logic)
    return `https://short.ly/${btoa(link).slice(0, 8)}`;
  };

  return (
    <div box-content mx-8 w-full>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="p-6 bg-white rounded-md shadow-md">
          <h1 className="text-2xl font-bold mb-4">
            Link shortener
          </h1>
          <LinkForm onShorten={handleLinkShorten} />
        </div> 
      </div>
    </div>
      
  );
}
