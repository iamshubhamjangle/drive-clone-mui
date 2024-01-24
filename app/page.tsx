import LeftSidebar from "./_components/leftSidebar";
import MainContent from "./_components/mainContent";
import Navbar from "./_components/navbar";
import RightSidebar from "./_components/rightSidebar";

export default function Home() {
  return (
    <div className="grid grid-rows-[4rem,1fr] grid-cols-[18rem,1fr,4rem] h-screen overflow-hidden">
      <header className="bg-[#F8FAFD] col-span-full">
        <Navbar />
      </header>
      <aside className="bg-green-500">
        <LeftSidebar />
      </aside>
      <main className="bg-yellow-500">
        <MainContent />
      </main>
      <aside className="bg-red-500">
        <RightSidebar />
      </aside>
    </div>
  );
}
