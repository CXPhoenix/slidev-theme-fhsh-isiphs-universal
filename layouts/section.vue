<script setup>
import { useSlideContext } from "@slidev/client";
import useTheme from "../shared/useTheme";
import Base from "./base.vue";

const { $slidev } = useSlideContext();
const { $themeImg, $customThemeConfig } = useTheme;

const themeName = $customThemeConfig($slidev.configs).themeName;
const { sectionImg } = $themeImg(themeName);
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
      :src="sectionImg"
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
