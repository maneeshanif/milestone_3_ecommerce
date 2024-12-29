import { defineType } from "sanity";

const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "product_name",
      title: "Product Category Name",
      type: "string",
    },
    {
      name: "product_image",
      title: "Category Image",
      type: "image",
    },
  ],
});

export default category;
