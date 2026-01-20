<script setup>
import { computed } from "vue";
import { useSlideContext } from "@slidev/client";
import useTheme from "../shared/useTheme";
import Base from "./base.vue";

// 接收投影片的 frontmatter
const props = defineProps({
  sectionImg: {
    type: String,
    default: "",
  },
});

const { $slidev } = useSlideContext();
const { $themeImg, $customThemeConfig } = useTheme;

const themeName = $customThemeConfig($slidev.configs).themeName;
const defaultSectionImg = $themeImg(themeName).sectionImg;

// 優先順序：投影片 frontmatter > 全域 headmatter > 主題預設
const finalSectionImg = computed(() => {
  return props.sectionImg || $slidev.configs.sectionImg || defaultSectionImg;
});
</script>

<template>
  <Base>
    <div :class="$style.slideSection">
      <slot />
    </div>
    <img
      class="absolute right-[5.5%] w-[48%]"
      :class="{
        'top-[45%]': themeName == 'isip.hs',
        'top-[40%]': themeName == 'fhsh',
      }"
      :src="finalSectionImg"
      alt="Section Cover"
    />
  </Base>
</template>

<style module lang="postcss">
.slideSection {
  @apply absolute top-[21%] left-[7%] w-[86%] h-[65%] z-2;
}

.slideSection h1:first-of-type *,
.slideSection h2:first-of-type * {
  @apply block;
}

.slideSection h1 {
  @apply pl-[6rem] pt-[1.3rem];
}

.slideSection h2 {
  @apply pl-[12rem] pt-[0.4rem] text-[2.6rem];
}
</style>
