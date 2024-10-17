import { CogIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

import * as demo from "@/sanity/lib/demo";

export default defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "title",
      description: "This field is the title of your blog.",
      title: "Title",
      type: "string",
      initialValue: demo.title,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subheader",
      description: "Used for the blog subheader.",
      title: "Subheader",
      type: "array",
      initialValue: demo.subheader,
      of: [
        defineArrayMember({
          type: "block",
          options: {},
          styles: [],
          lists: [],
          marks: {
            decorators: [],
            annotations: [
              defineField({
                type: "object",
                name: "link",
                fields: [
                  {
                    type: "string",
                    name: "href",
                    title: "URL",
                    validation: (rule) => rule.required(),
                  },
                ],
              }),
            ],
          },
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "introTitle",
      description:
        "Used for the title of the website introduction on the Home screen.",
      title: "Introduction Title",
      type: "string",
      initialValue: demo.introTitle,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "introContent",
      description:
        "Used for the content of the website introduction on the Home screen.",
      title: "Introduction Content",
      type: "string",
      initialValue: demo.introContent,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      description: "Displayed on social cards and search engine results.",
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: "alt",
        },
      },
      fields: [
        defineField({
          name: "alt",
          description: "Important for accessibility and SEO.",
          title: "Alternative text",
          type: "string",
          validation: (rule) => {
            return rule.custom((alt, context) => {
              if ((context.document?.ogImage as any)?.asset?._ref && !alt) {
                return "Required";
              }
              return true;
            });
          },
        }),
        defineField({
          name: "metadataBase",
          type: "url",
          description: (
            <a
              href="https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase"
              rel="noreferrer noopener"
            >
              More information
            </a>
          ),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Settings",
      };
    },
  },
});
