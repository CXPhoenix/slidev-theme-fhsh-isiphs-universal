<script setup>
import Section from "./section.vue";
import { useSlideContext } from "@slidev/client";
import useTheme from "../shared/useTheme";

const { $slidev } = useSlideContext();
const { $themeImg, $customThemeConfig } = useTheme;

const themeName = $customThemeConfig($slidev.configs).themeName
const { slogonImg } = $themeImg(themeName);
</script>

<template>
  <Section>
    <div :class="$style.slideCover">
      <slot />
    </div>
  </Section>
  <img
    :src="slogonImg"
    alt="FHSH AiSP title"
    class="absolute left-[8%] w-[42%]"
    :class="{
      'top-[50%]': themeName == 'isip.hs',
      'top-[56%]': themeName == 'fhsh',
    }"
  />
</template>

<style module lang="postcss">
.slideCover {
  @apply block;
}

.slideCover h1,
.slideCover h2 {
  @apply pl-0 text-center;
}
</style>
