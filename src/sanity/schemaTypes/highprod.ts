import { defineType, defineField } from "sanity";

const Highlightproducts = defineType({
  name: "highlight_product",
  title: "Highlight Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "highlights_image",
      title: "Highlights Image",
      type: "image",
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
    }),
    {
      name: "buttonTitle",
      title: "Button Title",
      type: "string",
    },
    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "string",
    }),
  ],
});

export default Highlightproducts;
