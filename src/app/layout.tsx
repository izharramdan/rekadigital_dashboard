import { Providers } from "@/store/provider";
import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-quicksand">
        <Providers>
          <div className="flex min-h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Wrapper */}
            <div className="flex-1 bg-gray-50 flex flex-col">
              {/* Navbar */}
              <div className="pt-6 px-6 pb-2">
                <Navbar />
              </div>

              {/* Children Area */}
              <main className="flex-1 -mt-2">{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
