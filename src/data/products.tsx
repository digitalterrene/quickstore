import {
  ProductAttributesObjectType,
  ProductVariationsObjectType,
} from "@/ts-types/products";

export const placeholderVariations: any[] = [
  {
    data_type: "color",
    label: "required_variation",
    name: "Red",
    description: "Classic red color",
    image: "/images/products/red-tshirt.webp",
    icon: (
      <div className="h-10 w-10 rounded-lg border-blue-600 bg-red-500"></div>
    ),
  },
  {
    data_type: "size",
    label: "required_variation",
    name: "Large",
    description: "Size large",
    image: "",
    icon: (
      <div className="h-10 w-10 rounded-lg border border-blue-600 flex items-center justify-center">
        L
      </div>
    ),
  },
  {
    data_type: "color",
    label: "required_variation",
    name: "Yellow",
    description: "Classic yellow color",
    image: "/images/products/yellow-tshirt.webp",
    icon: (
      <div className="h-10 w-10 p-4 rounded-lg border-blue-600 bg-yellow-400"></div>
    ),
  },
  {
    data_type: "size",
    label: "required_variation",
    name: "Small",
    description: "Size small",
    image: "",
    icon: (
      <div className="h-10 w-10 rounded-lg border border-blue-600 flex items-center justify-center">
        S
      </div>
    ),
  },
  {
    data_type: "color",
    label: "required_variation",
    name: "White",
    description: "Classic white color",
    image: "/images/products/white-tshirt.webp",
    icon: (
      <div className="h-10 w-10 rounded-lg shadow-lg border border-blue-600 bg-white"></div>
    ),
  },
  {
    data_type: "fabric",
    label: "optional_variation",
    name: "Silk",
    description: "Luxurious silk fabric",
    image: "",
    icon: (
      <div
        style={{
          backgroundImage: `url('https://www.dalstonmillfabrics.co.uk/pub/media/blog/post/silk-fabric/silk_fabric.jpg')`,
        }}
        className="h-10 bg-cover bg-center w-10 rounded-lg border-blue-600  "
      ></div>
    ),
  },
  {
    data_type: "fabric",
    label: "optional_variation",
    name: "Cotton",
    description: "Luxurious cotton fabric",
    image: "",
    icon: (
      <div
        style={{
          backgroundImage: `url('https://www.textileindustry.net/wp-content/uploads/2023/10/What-is-Pima-Cotton-Fabric-Its-Properties-and-Uses-1.webp')`,
        }}
        className="h-10 bg-cover bg-center w-10 rounded-lg border-blue-600 "
      ></div>
    ),
  },
];
export const placeholderAttributes: ProductAttributesObjectType[] = [
  {
    name: "Fabric",
    description:
      "Made from premium quality silk, offering a luxurious feel and elegant drape.",
    image:
      "https://www.dalstonmillfabrics.co.uk/pub/media/blog/post/silk-fabric/silk_fabric.jpg",
    icon: (
      <div
        style={{
          backgroundImage: `url('https://www.dalstonmillfabrics.co.uk/pub/media/blog/post/silk-fabric/silk_fabric.jpg')`,
        }}
        className="h-10 bg-cover bg-center w-10 rounded-lg border-gray-600  "
      ></div>
    ),
  },
  {
    name: "Fit",
    description:
      "Designed for a tailored fit, enhancing the natural shape and providing a flattering look.",
    image: "/images/products/yellow-tshirt.webp",
    icon: (
      <div
        style={{
          backgroundImage: `url('/images/products/yellow-tshirt.webp')`,
        }}
        className="h-10 bg-cover bg-center w-10 rounded-lg border-gray-600  "
      ></div>
    ),
  },
  {
    name: "Care Instructions",
    description: `We've put together a few guidelines to help you care for your new purchase. It's a good idea to pre-wash any washable natural fibres that you will be washing in the future, as some shrinkage may occur.We recommend pre-washing in the same way you intend to wash your future fabric creation including drying.
Wash light and bright colours separately, as some colours may run in their first few washes. Please note, these care tips are guidelines only and variations will apply to some fabrics. Extra care should be taken when washing high contrast prints with highly saturated pigments like red, black and navy on a light coloured base cloths. These prints can be prone to colour bleed and should be cold washed, and dried without delay.
Special washing instructions will apply to some fabrics such as satins, sequinned, beaded, coated or foiled fabrics as well as specialty weights/styles and delicate items. If you have any questions, please do not hesitate to contact us.`,
    image:
      "https://fabric-store.imgix.net/SPPLaundryimagetwotoplace_1500x.webp?auto=format&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&q=85&w=900",
    icon: (
      <div
        style={{
          backgroundImage: `url('https://fabric-store.imgix.net/Wash3.jpg?auto=format&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&q=85&w=900')`,
        }}
        className="h-10 bg-cover bg-center w-10 rounded-lg border-gray-600  "
      ></div>
    ),
  },
  {
    name: "Design Features",
    description:
      "Includes unique design features such as hand-embroidered details and custom prints.",
    image:
      "https://files.cdn.printful.com/o/upload/bfl-image/28/10325_l_statement%20eco.jpg",
    icon: (
      <div
        style={{
          backgroundImage: `url('https://files.cdn.printful.com/o/upload/bfl-image/e6/w258/10326_l_humor%20yoga%20poses__600.jpg')`,
        }}
        className="h-10 bg-cover bg-center w-10 rounded-lg border-gray-600  "
      ></div>
    ),
  },
];
export const groupVariations = (variations: ProductVariationsObjectType[]) => {
  return variations.reduce((acc: any, variation: any) => {
    if (!acc[variation.data_type]) {
      acc[variation.data_type] = [];
    }
    acc[variation.data_type].push(variation);
    return acc;
  }, {});
};
