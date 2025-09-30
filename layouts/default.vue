<script setup>
import { useSlideContext } from "@slidev/client";
import useTheme from "../shared/useTheme";
import Base from "./base.vue";

const { $slidev } = useSlideContext();
const { $themeImg, $customThemeConfig } = useTheme;

const { slogonImg } = $themeImg($customThemeConfig($slidev.configs).themeName);
</script>

<template>
  <Base>
    <div class="absolute" :class="$style.content">
      <slot />
    </div>
    <img
      class="absolute bottom-[4%] right-[2%] w-[12%]"
      :src="slogonImg"
      alt="Slogon Image"
    />
  </Base>
</template>

<style module lang="postcss">
.content {
  @apply absolute top-[21%] left-[7%] w-[86%] h-[65%];
}

.content h1 {
  @apply hidden;
}

.content h1:first-child {
  @apply absolute -top-[18%] w-full h-[4rem] block text-center;
}
</style>
