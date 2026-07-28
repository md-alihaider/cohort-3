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
  Globe,
  GraduationCap,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
import Footer from "../components/components-layouts/Footer/Footer";
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
        <div className="rounded-3xl border border-zinc-700 bg-card p-8 md:p-10">
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
                className="flex gap-5 rounded-2xl border border-zinc-700 bg-card p-6 transition hover:border-primary"
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
      <section className="mx-auto mt-20 max-w-5xl px-6">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Meet the Developer
        </h2>

        <div className="rounded-3xl border border-zinc-700 bg-card p-8 md:p-10">
          <div className="flex flex-col items-center text-center">
            {/* Avatar */}
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-3xl font-bold text-black">
              AH
            </div>

            <h3 className="mt-6 text-3xl font-bold">Md Ali Haider</h3>

            <p className="mt-2 text-primary">React & MERN Stack Developer</p>

            <div className="mt-6 flex flex-wrap justify-center gap-6 text-zinc-400">
              <div className="flex items-center gap-2">
                <GraduationCap size={18} />
                <span>BCA Graduate</span>
              </div>

              <div className="flex items-center gap-2">
                <Code2 size={18} />
                <span>Frontend Developer</span>
              </div>
            </div>

            <p className="mt-8 max-w-2xl leading-8 text-zinc-400">
              I enjoy building responsive, user-friendly web applications using
              modern React technologies. SkyMart is one of my learning projects
              where I applied Context API, React Router, Tailwind CSS, API
              integration, authentication, and reusable component architecture.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/md-alihaider"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 transition hover:border-primary hover:text-primary"
              >
                <FaGithub size={18} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/md-ali-haider/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 transition hover:border-primary hover:text-primary"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>

              <a
                href="https://alihaider-dev.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-black transition hover:opacity-90"
              >
                <Globe size={18} />
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="mx-auto mt-20 mb-20 max-w-5xl px-6">
        <div className="rounded-3xl border border-primary/20 bg-card px-8 py-12 text-center">
          <h2 className="text-4xl font-bold">
            Explore <span className="text-primary">SkyMart</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-8 text-zinc-400">
            Browse products, test the shopping experience, and explore a modern
            React e-commerce application built with today's frontend
            technologies.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center rounded-xl bg-primary px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Browse Products →
          </Link>
        </div>
      </section>
      <Footer/>
    </main>
  );
};

export default AboutPage;
