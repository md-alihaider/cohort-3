import Tooltip from "@/components/Tooltip/Tooltip";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Info, Settings, Trash2, User, HelpCircle } from "lucide-react";

const TooltipPage = () => {
  const basicUsageCode = `
<Tooltip content="This is a tooltip">
  <button>Hover me</button>
</Tooltip>`;

  const positionsCode = `
<Tooltip content="Tooltip on top" position="top">
  <button>Top</button>
</Tooltip>

<Tooltip content="Tooltip on bottom" position="bottom">
  <button>Bottom</button>
</Tooltip>

<Tooltip content="Tooltip on left" position="left">
  <button>Left</button>
</Tooltip>

<Tooltip content="Tooltip on right" position="right">
  <button>Right</button>
</Tooltip>`;

  const iconUsageCode = `
<Tooltip content="Settings">
  <button>
    <Settings />
  </button>
</Tooltip>

<Tooltip content="Delete item">
  <button>
    <Trash2 />
  </button>
</Tooltip>`;

  const customContentCode = `
<Tooltip
  content={
    <div>
      <p className="font-semibold">Account</p>
      <p>Manage your account settings</p>
    </div>
  }
>
  <button>Account</button>
</Tooltip>`;

  const delayCode = `
<Tooltip content="Appears after 1 second" delay={1000}>
  <button>Delayed Tooltip</button>
</Tooltip>`;

  const propsData = [
    {
      prop: "children",
      type: "React.ReactNode",
      default: "—",
      description: "The element that triggers the tooltip",
    },
    {
      prop: "content",
      type: "React.ReactNode",
      default: "—",
      description: "The content displayed inside the tooltip",
    },
    {
      prop: "position",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "Controls the position of the tooltip",
    },
    {
      prop: "delay",
      type: "number",
      default: "200",
      description: "Delay in milliseconds before showing the tooltip",
    },
    {
      prop: "className",
      type: "string",
      default: "—",
      description: "Additional classes applied to the tooltip",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-14">
      {/* Header */}
      <header className="space-y-3">
        <h1
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Tooltip
        </h1>

        <p className="text-lg text-gray-600">
          The Tooltip component displays helpful information when users hover
          over or interact with an element.
        </p>
      </header>

      {/* 1. Basic */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-(--text-color)">Basic</h2>

          <p className="mt-1 text-gray-600">
            A simple tooltip displayed when hovering over an element.
          </p>
        </div>

        <ComponentDemo code={basicUsageCode}>
          <div className="flex min-h-40 items-center justify-center">
            <Tooltip content="This is a tooltip">
              <button className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700">
                Hover me
              </button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      {/* 2. Positions */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-(--text-color)">
            Positions
          </h2>

          <p className="mt-1 text-gray-600">
            Position the tooltip on any side of the trigger element.
          </p>
        </div>

        <ComponentDemo code={positionsCode}>
          <div className="flex min-h-52 flex-wrap items-center justify-center gap-8">
            <Tooltip content="Tooltip on top" position="top">
              <button className="rounded-md border border-gray-300 px-4 py-2 text-sm">
                Top
              </button>
            </Tooltip>

            <Tooltip content="Tooltip on bottom" position="bottom">
              <button className="rounded-md border border-gray-300 px-4 py-2 text-sm">
                Bottom
              </button>
            </Tooltip>

            <Tooltip content="Tooltip on left" position="left">
              <button className="rounded-md border border-gray-300 px-4 py-2 text-sm">
                Left
              </button>
            </Tooltip>

            <Tooltip content="Tooltip on right" position="right">
              <button className="rounded-md border border-gray-300 px-4 py-2 text-sm">
                Right
              </button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      {/* 3. Icon Buttons */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-(--text-color)">
            Icon Buttons
          </h2>

          <p className="mt-1 text-gray-600">
            Tooltips are useful for explaining icon-only buttons.
          </p>
        </div>

        <ComponentDemo code={iconUsageCode}>
          <div className="flex min-h-40 items-center justify-center gap-4">
            <Tooltip content="Settings">
              <button
                className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100"
                aria-label="Settings"
              >
                <Settings size={19} />
              </button>
            </Tooltip>

            <Tooltip content="Delete item">
              <button
                className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100"
                aria-label="Delete"
              >
                <Trash2 size={19} />
              </button>
            </Tooltip>

            <Tooltip content="Account">
              <button
                className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100"
                aria-label="Account"
              >
                <User size={19} />
              </button>
            </Tooltip>

            <Tooltip content="Information">
              <button
                className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100"
                aria-label="Information"
              >
                <Info size={19} />
              </button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      {/* 4. Custom Content */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-(--text-color)">
            Custom Content
          </h2>

          <p className="mt-1 text-gray-600">
            Tooltips can contain more than simple text.
          </p>
        </div>

        <ComponentDemo code={customContentCode}>
          <div className="flex min-h-40 items-center justify-center">
            <Tooltip
              content={
                <div className="max-w-52">
                  <p className="font-semibold">Account</p>
                  <p className="mt-1 text-xs text-gray-300">
                    Manage your account settings and preferences.
                  </p>
                </div>
              }
            >
              <button className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white">
                Account
              </button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      {/* 5. Delay */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-(--text-color)">
            Custom Delay
          </h2>

          <p className="mt-1 text-gray-600">
            Control how long the user needs to hover before the tooltip appears.
          </p>
        </div>

        <ComponentDemo code={delayCode}>
          <div className="flex min-h-40 items-center justify-center">
            <Tooltip content="Appears after 1 second" delay={1000}>
              <button className="flex items-center gap-2 rounded-md border border-gray-300 px-5 py-2.5 text-sm hover:bg-gray-100">
                <HelpCircle size={18} />
                Delayed Tooltip
              </button>
            </Tooltip>
          </div>
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

export default TooltipPage;
