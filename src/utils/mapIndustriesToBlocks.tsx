export const mapIndustriesToBlocks = (industries: any, numBlocks: number) => {
  const mappedBlocks = [];

  // Utility function to generate image URL
  const getImageUrl = (industryName: string, elementName: string) =>
    `/images/sidebar/${industryName}/${elementName}.jpg`; // Assuming .jpg format for simplicity

  // Step 1: Start with industries
  for (
    let i = 0;
    i < industries?.length && mappedBlocks?.length < numBlocks;
    i++
  ) {
    mappedBlocks.push({
      type: "industry",
      name: industries[i]?.industry,
      image: getImageUrl(industries[i]?.industry, industries[i]?.industry),
      link: `/industries/${industries[i]?.industry}`,
    });
  }

  // Step 2: If industries are not enough, add categories
  if (mappedBlocks?.length < numBlocks) {
    for (let industry of industries) {
      for (let category of industry?.categories || []) {
        if (mappedBlocks?.length >= numBlocks) break;
        mappedBlocks?.push({
          type: "category",
          name: category?.name,
          image: getImageUrl(industry?.industry, category?.name),
          link: `/industries/${industry?.industry}/categories/${category?.name}`,
        });
      }
      if (mappedBlocks?.length >= numBlocks) break;
    }
  }

  // Step 3: If categories are not enough, add subcategories
  if (mappedBlocks?.length < numBlocks) {
    for (let industry of industries || []) {
      for (let category of industry?.categories || []) {
        for (let subcategory of category?.subcategories || []) {
          if (mappedBlocks?.length >= numBlocks) break;
          mappedBlocks?.push({
            type: "subcategory",
            name: subcategory?.name,
            image: getImageUrl(industry?.industry, subcategory?.name),
            link: `/industries/${industry?.industry}/categories/${category?.name}/subcategories/${subcategory?.name}`,
          });
        }
        if (mappedBlocks?.length >= numBlocks) break;
      }
      if (mappedBlocks?.length >= numBlocks) break;
    }
  }

  // Step 4: If subcategories are not enough, add items
  if (mappedBlocks?.length < numBlocks) {
    for (let industry of industries || []) {
      for (let category of industry?.categories || []) {
        for (let subcategory of category?.subcategories || []) {
          for (let item of subcategory?.items || []) {
            if (mappedBlocks?.length >= numBlocks) break;
            mappedBlocks?.push({
              type: "item",
              name: item,
              image: getImageUrl(industry?.industry, item),
              link: `/industries/${industry?.industry}/categories/${category?.name}/subcategories/${subcategory?.name}/items/${item}`,
            });
          }
          if (mappedBlocks?.length >= numBlocks) break;
        }
        if (mappedBlocks?.length >= numBlocks) break;
      }
      if (mappedBlocks?.length >= numBlocks) break;
    }
  }

  return mappedBlocks;
};

// export const mapIndustriesToBlocks = (industries: any, numBlocks: number) => {
//   const mappedBlocks: any = [];

//   // Ensure industries is an array; if not, return an empty array
//   if (!Array.isArray(industries)) {
//     return mappedBlocks; // or handle this case differently if needed
//   }

//   // Utility function to generate image URL
//   const getImageUrl = (industryName: string, elementName: string) =>
//     `/images/sidebar/${industryName}/${elementName}.jpg`; // Assuming .jpg format for simplicity

//   // Step 1: Start with industries
//   for (
//     let i = 0;
//     i < industries.length && mappedBlocks.length < numBlocks;
//     i++
//   ) {
//     mappedBlocks.push({
//       type: "industry",
//       name: industries[i]?.industry,
//       image: getImageUrl(industries[i]?.industry, industries[i]?.industry),
//       link: `/industries/${industries[i]?.industry}`,
//     });
//   }

//   // Step 2: If industries are not enough, add categories
//   if (mappedBlocks.length < numBlocks) {
//     for (let industry of industries) {
//       for (let category of industry?.categories || []) {
//         if (mappedBlocks.length >= numBlocks) break;
//         mappedBlocks.push({
//           type: "category",
//           name: category?.name,
//           image: getImageUrl(industry?.industry, category?.name),
//           link: `/industries/${industry?.industry}/categories/${category?.name}`,
//         });
//       }
//       if (mappedBlocks.length >= numBlocks) break;
//     }
//   }

//   // Step 3: If categories are not enough, add subcategories
//   if (mappedBlocks.length < numBlocks) {
//     for (let industry of industries) {
//       for (let category of industry?.categories || []) {
//         for (let subcategory of category?.subcategories || []) {
//           if (mappedBlocks.length >= numBlocks) break;
//           mappedBlocks.push({
//             type: "subcategory",
//             name: subcategory?.name,
//             image: getImageUrl(industry?.industry, subcategory?.name),
//             link: `/industries/${industry?.industry}/categories/${category?.name}/subcategories/${subcategory?.name}`,
//           });
//         }
//         if (mappedBlocks.length >= numBlocks) break;
//       }
//       if (mappedBlocks.length >= numBlocks) break;
//     }
//   }

//   // Step 4: If subcategories are not enough, add items
//   if (mappedBlocks.length < numBlocks) {
//     for (let industry of industries) {
//       for (let category of industry?.categories || []) {
//         for (let subcategory of category?.subcategories || []) {
//           for (let item of subcategory?.items || []) {
//             if (mappedBlocks.length >= numBlocks) break;
//             mappedBlocks.push({
//               type: "item",
//               name: item,
//               image: getImageUrl(industry?.industry, item),
//               link: `/industries/${industry?.industry}/categories/${category?.name}/subcategories/${subcategory?.name}/items/${item}`,
//             });
//           }
//           if (mappedBlocks.length >= numBlocks) break;
//         }
//         if (mappedBlocks.length >= numBlocks) break;
//       }
//       if (mappedBlocks.length >= numBlocks) break;
//     }
//   }

//   return mappedBlocks;
// };
