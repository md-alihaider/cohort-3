import { Navbar } from "@/components/navbar";
import ComponentDemo from "../ComponentsDemo";

const NavbarPage = () => {
  const usageCode = `import ComponentDemo from "../ComponentsDemo";
      <Navbar />


  `;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-(--text-color)">
          Navbar
        </h1>
        <p className="text-xl text-gray-600">
          The Navbar component provides navigation links and actions for moving
          between different sections of an application.
        </p>
      </div>
      <ComponentDemo code={usageCode}>
        <Navbar />
      </ComponentDemo>
    </div>
  );
};

export default NavbarPage;
