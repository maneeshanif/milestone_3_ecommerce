import { defineType ,defineField } from "sanity";


const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
        }),
        defineField({
            name: "images",
            title: "Images",
           type : "image",
           
        }),
        defineField({
            name: "regularPrice",
            title: "Regular Price",
            type: "number",
        }),
        defineField({
            name: "discountedPrice",
            title: "Discounted Price",
            type: "number",
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "string",
        })
        ,
        defineField({
            name: "stock",
            title: "Stock",
            type: "number",
        })]
    })

    export default product;