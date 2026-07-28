import React from "react";
import {
  Package,
  Users,
  Star,
  Truck,
  Zap,
  ShieldCheck,
  Smartphone,
  Code2,
} from "lucide-react";
const AboutPage = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Clean Code",
      description:
        "Building reusable and maintainable React components following modern development practices.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimized state management and smooth interactions for a better user experience.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Designed with a mobile-first approach using Tailwind CSS.",
    },
    {
      icon: Code2,
      title: "Continuous Learning",
      description:
        "Applying modern React technologies through practical projects and hands-on experience.",
    },
  ];
  const stats = [
    {
      icon: Package,
      value: "20+",
      label: "Products",
    },
    {
      icon: Users,
      value: "6+",
      label: "Pages",
    },
    {
      icon: Star,
      value: "15+",
      label: "Components",
    },
    {
      icon: Truck,
      value: "100%",
      label: "Responsive",
    },
  ];
  return (
    <main className="bg-[#0B0B0B] text-white">
      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-12 md:py-16 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
          <Zap size={28} strokeWidth={3} className="fill-black text-black" />
        </div>

        <h1 className="text-4xl font-bold md:text-6xl">
          About <span className="text-lime-400">SkyMart</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8  text-zinc-400">
          SkyMart is a modern React e-commerce application built as a learning
          project. It showcases responsive UI design, product browsing, shopping
          cart management, authentication, and state management using modern
          React technologies.
        </p>
      </section>

      {/* Stats */}
      <section className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-5 px-6 md:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div className="rounded-2xl border border-zinc-700 p-6 text-center">
              <Icon className="mx-auto text-lime-400" size={20} />

              <h2 className="mt-4 text-3xl font-bold">{item.value}</h2>

              <p className="mt-2 text-sm text-zinc-500">{item.label}</p>
            </div>
          );
        })}
      </section>

      {/* Story */}
      <section className="mx-auto mt-16 max-w-5xl px-6">
        <div className="rounded-3xl border border-zinc-700 bg-[#111111] p-8 md:p-10">
          <h2 className="mb-6 text-3xl font-bold text-white">Our Story</h2>

          <div className="space-y-5 text-[15px] leading-8 text-zinc-400">
            <p>
              SkyMart was developed as a personal learning project to apply
              modern React concepts in a real-world e-commerce application. The
              goal was to build a responsive shopping experience while following
              clean code practices and reusable component architecture.
            </p>

            <p>
              This project includes product browsing, category filtering,
              authentication, shopping cart management, wishlist functionality,
              toast notifications, and responsive layouts powered by Context API
              and React Router.
            </p>

            <p>
              Building SkyMart strengthened my understanding of component
              design, state management, API integration, and creating
              user-friendly interfaces using modern frontend technologies.
            </p>
          </div>
        </div>
      </section>
      {/* Values */}
      <section className="mx-auto mt-20 max-w-5xl px-6">
        <h2 className="mb-10 text-center text-3xl font-bold">
          What We Stand For
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex gap-5 rounded-2xl border border-zinc-700 bg-[#111111] p-6 transition hover:border-primary"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="text-primary" size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* Developer */}

      {/* CTA */}
    </main>
  );
};

export default AboutPage;
