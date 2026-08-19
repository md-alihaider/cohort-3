import React from "react";
import { cn } from "@/libs/utils";

interface LayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  footer?: React.ReactNode;
  sidebarPosition?: "left" | "right";
  className?: string;
  contentClassName?: string;
}

const Layout = ({
  children,
  header,
  sidebar,
  footer,
  sidebarPosition = "left",
  className,
  contentClassName,
}: LayoutProps) => {
  const sidebarElement = sidebar && (
    <aside className="w-48 shrink-0 border-gray-200">{sidebar}</aside>
  );

  return (
    <div
      className={cn(
        "flex min-h-64 flex-col overflow-hidden rounded-lg border border-gray-200 bg-white",
        className,
      )}
    >
      {/* Header */}
      {header && (
        <header className="shrink-0 border-b border-gray-200">{header}</header>
      )}

      {/* Content */}
      <div className="flex min-h-48 flex-1">
        {sidebar && sidebarPosition === "left" && (
          <div className="border-r border-gray-200">{sidebarElement}</div>
        )}

        <main className={cn("min-w-0 flex-1", contentClassName)}>
          {children}
        </main>

        {sidebar && sidebarPosition === "right" && (
          <div className="border-l border-gray-200">{sidebarElement}</div>
        )}
      </div>

      {/* Footer */}
      {footer && (
        <footer className="shrink-0 border-t border-gray-200">{footer}</footer>
      )}
    </div>
  );
};

export default Layout;
