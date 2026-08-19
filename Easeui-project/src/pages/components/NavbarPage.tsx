import { Navbar } from "@/components/Navbar";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const NavbarPage = () => {
  const defaultCode = `import { Navbar } from "@/components/navbar";

<Navbar />`;

  const darkCode = `import { Navbar } from "@/components/navbar";

<Navbar variant="dark" />`;

  const primaryCode = `import { Navbar } from "@/components/navbar";

<Navbar variant="primary" />`;

  const glassCode = `import { Navbar } from "@/components/navbar";

<div className="bg-slate-900 p-6 rounded-lg">
  <Navbar variant="glass" />
</div>`;

  const smallCode = `import { Navbar } from "@/components/navbar";

<Navbar size="sm" />`;

  const largeCode = `import { Navbar } from "@/components/navbar";

<Navbar size="lg" />`;

  const animatedCode = `import { Navbar } from "@/components/navbar";

<Navbar animation="fadeIn" />`;

  const propsData = [
    {
      prop: "variant",
      type: `"dark" | "light" | "primary" | "glass"`,
      default: `"light"`,
      description:
        "Defines the visual style of the navbar including its background, text, border, and shadow.",
    },
    {
      prop: "size",
      type: `"default" | "sm" | "lg" | "xl"`,
      default: `"default"`,
      description: "Controls the height and overall size of the navbar.",
    },
    {
      prop: "animation",
      type: `"fadeIn" | ... (from entranceAnimations)`,
      default: `"fadeIn"`,
      description:
        "Specifies the entrance animation that runs when the navbar is mounted.",
    },
    {
      prop: "hoverAnimation",
      type: `"none" | ... (from hoverAnimations)`,
      default: `"none"`,
      description:
        "Specifies the GSAP-powered animation that runs when the user hovers over the navbar.",
    },
    {
      prop: "asChild",
      type: "boolean",
      default: "false",
      description:
        "If true, renders the navbar using Radix Slot instead of the default nav element.",
    },
    {
      prop: "className",
      type: "string",
      default: "-",
      description:
        "Additional custom Tailwind classes that can be used to customize the navbar.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-(--text-color)">
          Navbar
        </h1>

        <p className="text-xl text-(--text-color) opacity-70">
          The Navbar component provides navigation links and actions for moving
          between different sections of an application.
        </p>
      </div>

      {/* Usage */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-(--text-color)">
          Usage
        </h2>

        <div className="flex flex-col gap-10">
          {/* Default */}
          <ComponentDemo code={defaultCode}>
            <Navbar />
          </ComponentDemo>

          {/* Dark */}
          <ComponentDemo code={darkCode}>
            <Navbar variant="dark" />
          </ComponentDemo>

          {/* Primary */}
          <ComponentDemo code={primaryCode}>
            <Navbar variant="primary" />
          </ComponentDemo>

          {/* Glass */}
          <ComponentDemo code={glassCode}>
            <div className="bg-slate-900 p-6 rounded-lg">
              <Navbar variant="glass" />
            </div>
          </ComponentDemo>

          {/* Sizes */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-(--text-color)">
              Sizes
            </h3>

            <ComponentDemo code={smallCode}>
              <Navbar size="sm" />
            </ComponentDemo>

            <ComponentDemo code={largeCode}>
              <Navbar size="lg" />
            </ComponentDemo>
          </div>

          {/* Animation */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-(--text-color)">
              Animation
            </h3>

            <ComponentDemo code={animatedCode}>
              <Navbar animation="fadeIn" />
            </ComponentDemo>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-(--text-color)">
          API Reference
        </h2>

        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default NavbarPage;
