"use client"
import LinkForm from "@/components/form";
import axios from "axios";


export default function Home() {

  const handleLinkShorten = async (link: string): Promise<string  | null> => {
    
   try{
    const response = await axios.post(
      'https://api-ssl.bitly.com/v4/shorten',
      {
        long_url: link,
        domain: 'bit.ly',
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BITLY_ACCESS_TOKEN}`,
          'Content-Type' : 'application/json',
        },
      }
    );

    return response.data.link;
    } catch (error) {
    console.error('Error shortening the link:', error);
    return null;
    }

  };

  return (
    <div box-content mx-8 w-full>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="p-6 bg-white rounded-md shadow-md">
          <h1 className="text-2xl font-bold mb-2">
            Link shortener
          </h1>
          <LinkForm onShorten={handleLinkShorten} />
        </div> 
      </div>
    </div>
      
  );
}
