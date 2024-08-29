import {  useState } from "react"

interface LinkShortnerFormProps {
    onShorten: (link: string) => Promise<string | null>; // Function to shorten link
}

export default function LinkForm(onShorten:LinkShortnerFormProps) 
{
    const [link, setLink] = useState("");
    const [shortenedLink, setShortenedLink] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(link) {
            setLoading(true);
            const newShortenedLink = await onShorten.onShorten(link);
            setShortenedLink(newShortenedLink);
            setLoading(false);
        }
    }

    const handleCopy = () => {
        if (shortenedLink){
            navigator.clipboard.writeText(shortenedLink);
            alert("Shortened Link copied to clipboard");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="url"
                    placeholder="Enter link here"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={loading}
                >
                    {loading? 'Shortening...' : 'Create Shortened Link'}
                </button>
            </form>

            {shortenedLink && (
                <div className="flex flex-col space-y-2">
                    <div className="p-2 mt-2 border border-gray-300 rounded-md">
                        {shortenedLink}
                    </div>
                    <button
                        onClick={handleCopy}
                        className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:ring-green-500"
                    >
                        Copy Shortened Link
                    </button>
                </div>
            )}
        </div>
    )
}