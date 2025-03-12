import NavLink from "../components/NavLink";
import Projects from "../components/ProjectsSection";

export default function Dashboard() {
  return (
    <main data-theme="dark">
      <h1>Private Projects Dashboard</h1>
      {/* HEADER*/}
      <section className="bg-base-300">
        <div className="flex justify-between items-center px-8 py-2 max-w-5xl mx-auto">
          <div className="font-bold">Voichita Portofolio Projects</div>
          <div className="space-x-4">
            <NavLink href="#1">Project1</NavLink>
            <NavLink href="#2">Project2</NavLink>
            <NavLink href="#3">Project3</NavLink>
            <NavLink href="#4">Project4</NavLink>
          </div>
        </div>
      </section>

      <Projects />
    </main>
  );
}
