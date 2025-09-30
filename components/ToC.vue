<script setup>
import { useSlideContext } from "@slidev/client";

const props = defineProps({
  layoutsIncludeInToc: {
    type: Array,
    default: ["section"],
    validator: (value, props) =>
      ["cover", "section", "default", "image", "quiz"].includes(value),
  },
  tocShowRange: {
    type: Array,
    default: [0],
    validator: (value, props) =>
      value.length > 0 && value.length < 3 && value[0] >= 0,
  },
});

const { $slidev } = useSlideContext();

/**
 * @param { object } nav
 * @param { import("@slidev/types").SlideRoute[] } nav.slides
 * @param { import("@slidev/types").TocItem[] } nav.tocTree
 * @returns { import("@slidev/types").TocItem[] }
 */
function filterPageNumber(nav) {
  const slides = nav.slides;
  let layoutsIncludeInToc = slides[0]?.meta?.slide?.frontmatter?.layoutsIncludeInToc || props.layoutsIncludeInToc;
  if (typeof layoutsIncludeInToc !== typeof Array()) {
    layoutsIncludeInToc = [layoutsIncludeInToc];
  }
  const filteredPages = slides.filter(
    (v) =>
      v.no !== 1 &&
      !v.meta?.slide?.frontmatter?.skipInToc &&
      (v.meta?.slide?.frontmatter?.includeInToc ||
      layoutsIncludeInToc.includes(v.meta?.layout ?? "default"))
  );
  const filteredPageNumbers = filteredPages.map((v) => v.no);
  const filteredTocTree = nav.tocTree.filter((v) =>
    filteredPageNumbers.includes(v.no)
  );
  if (props.tocShowRange.length === 2) {
    return filteredTocTree.slice(props.tocShowRange[0], props.tocShowRange[1]);
  }
  return filteredTocTree.slice(props.tocShowRange[0]);
}
</script>

<template>
  <ol>
    <li v-for="toc in filterPageNumber($slidev.nav)">
      {{ toc.title }}
    </li>
  </ol>
</template>

<style scoped>
ol {
  @apply list-decimal text-4xl px-12 pl-16 pt-3 space-y-4;
}
</style>