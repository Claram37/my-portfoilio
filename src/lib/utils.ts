import { createCn } from "cn/config"

// Class merging (clsx + tailwind-merge in one). It's told about the type scale in global.css's @theme,
// which it would otherwise read as text colours: cn("text-feature", "text-paper") would drop text-feature
export const cn = createCn({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: ["display", "stat", "hero", "chapter", "about", "section", "title", "lead", "body-lg", "body", "feature"],
        },
      ],
    },
  },
})
