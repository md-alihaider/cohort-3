import Layout from "@/components/Layout/Layout";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const LayoutPage = () => {
  const basicUsageCode = `
<Layout>
  <main className="p-5">
    <h2>Dashboard</h2>
    <p>Welcome to your dashboard.</p>
  </main>
</Layout>`;

  const headerUsageCode = `
<Layout
  header={
    <div className="px-5 py-3">
      <h2 className="font-semibold">My Application</h2>
    </div>
  }
>
  <main className="p-5">
    Page content
  </main>
</Layout>`;

  const sidebarUsageCode = `
<Layout
  sidebar={
    <nav className="space-y-1 p-3">
      <div>Dashboard</div>
      <div>Projects</div>
      <div>Settings</div>
    </nav>
  }
>
  <main className="p-5">
    Page content
  </main>
</Layout>`;

  const fullLayoutCode = `
<Layout
  header={
    <div className="px-5 py-3">
      <h2 className="font-semibold">My Application</h2>
    </div>
  }
  sidebar={
    <nav className="space-y-1 p-3">
      <div>Dashboard</div>
      <div>Projects</div>
      <div>Settings</div>
    </nav>
  }
  footer={
    <div className="px-5 py-2 text-sm text-gray-500">
      © 2026 My Application
    </div>
  }
>
  <main className="p-5">
    <h2 className="text-xl font-semibold">Dashboard</h2>
    <p className="mt-1 text-sm text-gray-500">
      Your main application content goes here.
    </p>
  </main>
</Layout>`;

  const rightSidebarCode = `
<Layout
  sidebarPosition="right"
  sidebar={
    <nav className="space-y-1 p-3">
      <div>Profile</div>
      <div>Settings</div>
      <div>Help</div>
    </nav>
  }
>
  <main className="p-5">
    Main content
  </main>
</Layout>`;

  const propsData = [
    {
      prop: "children",
      type: "React.ReactNode",
      default: "—",
      description: "The main content rendered inside the layout",
    },
    {
      prop: "header",
      type: "React.ReactNode",
      default: "—",
      description: "Optional content displayed at the top of the layout",
    },
    {
      prop: "sidebar",
      type: "React.ReactNode",
      default: "—",
      description: "Optional content displayed beside the main content",
    },
    {
      prop: "footer",
      type: "React.ReactNode",
      default: "—",
      description: "Optional content displayed at the bottom of the layout",
    },
    {
      prop: "sidebarPosition",
      type: '"left" | "right"',
      default: '"left"',
      description: "Controls which side the sidebar appears on",
    },
    {
      prop: "className",
      type: "string",
      default: "—",
      description: "Additional classes applied to the layout container",
    },
    {
      prop: "contentClassName",
      type: "string",
      default: "—",
      description: "Additional classes applied to the main content area",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-12 p-6">
      {/* Header */}
      <header className="space-y-2">
        <h1
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Layout
        </h1>

        <p className="text-lg text-gray-600">
          The Layout component provides a consistent structure for organizing
          content, navigation, and other UI elements.
        </p>
      </header>

      {/* Basic */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-(--text-color)">Basic</h2>

          <p className="mt-1 text-gray-600">
            A simple layout for displaying content.
          </p>
        </div>

        <ComponentDemo code={basicUsageCode}>
          <Layout>
            <main className="p-5">
              <h2 className="text-lg font-semibold">Dashboard</h2>

              <p className="mt-1 text-sm text-gray-500">
                Welcome to your dashboard.
              </p>
            </main>
          </Layout>
        </ComponentDemo>
      </section>

      {/* Header */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-(--text-color)">Header</h2>

          <p className="mt-1 text-gray-600">
            Add a header above the main content.
          </p>
        </div>

        <ComponentDemo code={headerUsageCode}>
          <Layout
            header={
              <div className="px-5 py-3">
                <h2 className="font-semibold">My Application</h2>
              </div>
            }
          >
            <main className="p-5">
              <p className="text-sm text-gray-500">Page content</p>
            </main>
          </Layout>
        </ComponentDemo>
      </section>

      {/* Sidebar */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-(--text-color)">
            Sidebar
          </h2>

          <p className="mt-1 text-gray-600">
            Add a sidebar for navigation or secondary content.
          </p>
        </div>

        <ComponentDemo code={sidebarUsageCode}>
          <Layout
            sidebar={
              <nav className="space-y-1 p-3 text-sm">
                <div className="rounded-md bg-gray-100 px-3 py-2 font-medium">
                  Dashboard
                </div>

                <div className="px-3 py-2 text-gray-500">Projects</div>

                <div className="px-3 py-2 text-gray-500">Settings</div>
              </nav>
            }
          >
            <main className="p-5">
              <h2 className="text-lg font-semibold">Main Content</h2>

              <p className="mt-1 text-sm text-gray-500">
                Content appears beside the sidebar.
              </p>
            </main>
          </Layout>
        </ComponentDemo>
      </section>

      {/* Full Layout */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-(--text-color)">
            Full Layout
          </h2>

          <p className="mt-1 text-gray-600">
            Combine a header, sidebar, main content, and footer.
          </p>
        </div>

        <ComponentDemo code={fullLayoutCode}>
          <Layout
            header={
              <div className="px-5 py-3">
                <h2 className="font-semibold">My Application</h2>
              </div>
            }
            sidebar={
              <nav className="space-y-1 p-3 text-sm">
                <div className="rounded-md bg-gray-100 px-3 py-2 font-medium">
                  Dashboard
                </div>

                <div className="px-3 py-2 text-gray-500">Projects</div>

                <div className="px-3 py-2 text-gray-500">Settings</div>
              </nav>
            }
            footer={
              <div className="px-5 py-2 text-xs text-gray-500">
                © 2026 My Application
              </div>
            }
          >
            <main className="p-5">
              <h2 className="text-lg font-semibold">Dashboard</h2>

              <p className="mt-1 text-sm text-gray-500">
                Your main application content goes here.
              </p>
            </main>
          </Layout>
        </ComponentDemo>
      </section>

      {/* Right Sidebar */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-(--text-color)">
            Right Sidebar
          </h2>

          <p className="mt-1 text-gray-600">
            Position the sidebar on the right side of the content.
          </p>
        </div>

        <ComponentDemo code={rightSidebarCode}>
          <Layout
            sidebarPosition="right"
            sidebar={
              <nav className="space-y-1 p-3 text-sm">
                <div className="font-medium">Profile</div>

                <div className="text-gray-500">Settings</div>

                <div className="text-gray-500">Help</div>
              </nav>
            }
          >
            <main className="p-5">
              <h2 className="text-lg font-semibold">Main Content</h2>

              <p className="mt-1 text-sm text-gray-500">
                The sidebar is positioned on the right.
              </p>
            </main>
          </Layout>
        </ComponentDemo>
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

export default LayoutPage;
