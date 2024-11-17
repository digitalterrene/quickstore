import React from "react";
const collections = [
  {
    name: "Handcrafted Elegance",
    href: "/industries/all?category=handcrafted-essentials",
    imageSrc:
      "https://img.freepik.com/free-photo/keys-set-arrangement-still-life_23-2151011294.jpg?ga=GA1.2.1350161568.1719153480&semt=ais_user",
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on a wood table.",
    description:
      "Discover the beauty of artisan craftsmanship with our Handcrafted Elegance collection. Perfect for keeping your essentials stylishly together.",
  },
  {
    name: "Organized Desk Essentials",
    href: "/industries/all?category=work-essentials",
    imageSrc:
      "https://img.freepik.com/free-photo/desk-supplies-arrangement-still-life_23-2149511867.jpg?ga=GA1.2.1350161568.1719153480&semt=ais_user",
    imageAlt:
      "Natural leather mouse pad on white desk next to a porcelain mug and keyboard.",
    description:
      "Transform your workspace with our Organized Desk Essentials. Keep your desk tidy and professional with our sleek and functional designs.",
  },
  {
    name: "Focus & Productivity",
    href: "/industries/all?category=productivity-essentials",
    imageSrc:
      "https://img.freepik.com/free-photo/cropped-image-laptop-with-eyeglasses-mobile-phone-coffee-cup-diary-beige-background_23-2148080462.jpg?ga=GA1.2.1350161568.1719153480&semt=ais_user",
    imageAlt:
      "Person placing a task list card into a walnut card holder next to a felt carrying case on a leather desk pad.",
    description:
      "Maximize your productivity with our Focus & Productivity collection. Stay organized and on top of your tasks with our elegant and practical solutions.",
  },
];

export default function ShopByCollection() {
  return (
    <section aria-labelledby="collection-heading" className="mx-auto p-4  ">
      <h2
        id="collection-heading"
        className="text-2xl font-bold tracking-tight text-gray-900"
      >
        Shop by Collection
      </h2>
      <p className="mt-4 text-base text-gray-500">
        Each season, we collaborate with world-className designers to create a
        collection inspired by the natural world.
      </p>

      <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
        {collections.map((collection) => (
          <a
            key={collection.name}
            href={collection.href}
            className="group block"
          >
            <div
              aria-hidden="true"
              className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
            >
              <img
                src={collection.imageSrc}
                alt={collection.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-gray-900">
              {collection.name}
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              {collection.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
