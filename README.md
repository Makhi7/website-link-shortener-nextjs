## Website link(URL) shortner

This is a simple link shortener application built with Next.js, TypeScript, and Tailwind CSS. It utilizes the Bitly API to shorten URLs, allowing users to input a link, shorten it, and then copy the shortened link.

## Features

- **Link Shortening:** Users can input a URL and generate a shortened link using the Bitly API.
- **Copy to Clipboard:** The shortened link can be easily copied to the clipboard.


## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js** (latest version)
- **npm** (latest version)


### Installation

1. **Clone the repository:**

    ```bash
    git clone git@github.com:Makhi7/website-link-shortener-nextjs.git
    cd nextjs-link-shortener
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up the Bitly API:**

   - Sign in to your [Bitly account](https://bitly.com/) and generate an access token.
   - Create a `.env.local` file in the root directory of the project:

     ```bash
     touch .env.local
     ```

   - Add your Bitly access token to the `.env.local` file:

     ```env
     NEXT_PUBLIC_BITLY_ACCESS_TOKEN=your_bitly_access_token
     ```

     Replace `your_bitly_access_token` with your actual Bitly access token.

### Running the Application

To run the application locally:

```bash
npm run dev






