import Carousel from "@/components/Carousel/Carousel";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const CarouselPage = () => {
  const basicUsageCode = `
<Carousel
  items={[
    <div>Slide 1</div>,
    <div>Slide 2</div>,
    <div>Slide 3</div>,
  ]}
/>`;

  const imageCarouselCode = `
<Carousel
  items={[
    <img src="/images/image-1.jpg" alt="Image 1" />,
    <img src="/images/image-2.jpg" alt="Image 2" />,
    <img src="/images/image-3.jpg" alt="Image 3" />,
  ]}
/>`;

  const cardCarouselCode = `
<Carousel
  items={[
    <ProductCard
      title="MacBook Pro"
      description="Powerful laptop for developers"
      price="$1999"
    />,
    <ProductCard
      title="iPhone"
      description="The latest iPhone"
      price="$999"
    />,
    <ProductCard
      title="AirPods"
      description="Wireless audio experience"
      price="$249"
    />,
  ]}
/>`;

  const customControlsCode = `
<Carousel
  items={[
    <div>First Content</div>,
    <div>Second Content</div>,
    <div>Third Content</div>,
  ]}
  showArrows={true}
  showDots={false}
/>`;

  const noLoopCode = `
<Carousel
  items={[
    <div>Slide 1</div>,
    <div>Slide 2</div>,
    <div>Slide 3</div>,
  ]}
  loop={false}
/>`;

  const propsData = [
    {
      prop: "items",
      type: "React.ReactNode[]",
      default: "—",
      description: "The collection of content displayed inside the carousel",
    },
    {
      prop: "className",
      type: "string",
      default: "—",
      description: "Additional CSS classes applied to the carousel",
    },
    {
      prop: "showArrows",
      type: "boolean",
      default: "true",
      description: "Controls whether previous and next buttons are displayed",
    },
    {
      prop: "showDots",
      type: "boolean",
      default: "true",
      description: "Controls whether slide indicator dots are displayed",
    },
    {
      prop: "loop",
      type: "boolean",
      default: "true",
      description:
        "Determines whether the carousel loops back to the first or last slide",
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
          Carousel
        </h1>

        <p className="text-lg text-gray-600">
          The Carousel component allows users to browse through a collection of
          content or images one item at a time.
        </p>
      </header>

      {/* 1. Basic Carousel */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-(--text-color)">Basic</h2>

          <p className="mt-1 text-gray-600">
            A simple carousel with text content.
          </p>
        </div>

        <ComponentDemo code={basicUsageCode}>
          <Carousel
            items={[
              <div
                key="1"
                className="flex h-48 items-center justify-center text-2xl font-semibold"
              >
                Slide 1
              </div>,

              <div
                key="2"
                className="flex h-48 items-center justify-center text-2xl font-semibold"
              >
                Slide 2
              </div>,

              <div
                key="3"
                className="flex h-48 items-center justify-center text-2xl font-semibold"
              >
                Slide 3
              </div>,
            ]}
          />
        </ComponentDemo>
      </section>

      {/* 2. Image Carousel */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-(--text-color)">
            Image Carousel
          </h2>

          <p className="mt-1 text-gray-600">
            Display images inside the carousel.
          </p>
        </div>

        <ComponentDemo code={imageCarouselCode}>
          <Carousel
            items={[
              <img
                key="1"
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Workspace"
                className="h-64 w-full object-cover"
              />,

              <img
                key="2"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Developer workspace"
                className="h-64 w-full object-cover"
              />,

              <img
                key="3"
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                alt="Code"
                className="h-64 w-full object-cover"
              />,
            ]}
          />
        </ComponentDemo>
      </section>

      {/* 3. Card Carousel */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-(--text-color)">
            Card Carousel
          </h2>

          <p className="mt-1 text-gray-600">
            Use the carousel to display cards or other complex components.
          </p>
        </div>

        <ComponentDemo code={cardCarouselCode}>
          <Carousel
            items={[
              <div key="1" className="p-8">
                <p className="text-sm text-gray-500">PRODUCT</p>
                <h3 className="mt-2 text-2xl font-bold">MacBook Pro</h3>
                <p className="mt-2 text-gray-600">
                  Powerful laptop for developers.
                </p>
                <p className="mt-5 text-xl font-semibold">$1999</p>
              </div>,

              <div key="2" className="p-8">
                <p className="text-sm text-gray-500">PRODUCT</p>
                <h3 className="mt-2 text-2xl font-bold">iPhone</h3>
                <p className="mt-2 text-gray-600">
                  The latest iPhone with powerful performance.
                </p>
                <p className="mt-5 text-xl font-semibold">$999</p>
              </div>,

              <div key="3" className="p-8">
                <p className="text-sm text-gray-500">PRODUCT</p>
                <h3 className="mt-2 text-2xl font-bold">AirPods</h3>
                <p className="mt-2 text-gray-600">Wireless audio experience.</p>
                <p className="mt-5 text-xl font-semibold">$249</p>
              </div>,
            ]}
          />
        </ComponentDemo>
      </section>

      {/* 4. Arrows Only */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-(--text-color)">
            Arrows Only
          </h2>

          <p className="mt-1 text-gray-600">
            Hide the pagination dots and use navigation arrows only.
          </p>
        </div>

        <ComponentDemo code={customControlsCode}>
          <Carousel
            showArrows={true}
            showDots={false}
            items={[
              <div
                key="1"
                className="flex h-48 items-center justify-center text-xl font-semibold"
              >
                First Content
              </div>,

              <div
                key="2"
                className="flex h-48 items-center justify-center text-xl font-semibold"
              >
                Second Content
              </div>,

              <div
                key="3"
                className="flex h-48 items-center justify-center text-xl font-semibold"
              >
                Third Content
              </div>,
            ]}
          />
        </ComponentDemo>
      </section>

      {/* 5. Non Looping */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-(--text-color)">
            Non-looping
          </h2>

          <p className="mt-1 text-gray-600">
            Prevent the carousel from wrapping around when reaching the first or
            last slide.
          </p>
        </div>

        <ComponentDemo code={noLoopCode}>
          <Carousel
            loop={false}
            items={[
              <div
                key="1"
                className="flex h-48 items-center justify-center text-xl font-semibold"
              >
                First Slide
              </div>,

              <div
                key="2"
                className="flex h-48 items-center justify-center text-xl font-semibold"
              >
                Middle Slide
              </div>,

              <div
                key="3"
                className="flex h-48 items-center justify-center text-xl font-semibold"
              >
                Last Slide
              </div>,
            ]}
          />
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

export default CarouselPage;
