<script setup>
import { computed } from "vue";
import { useSlideContext } from "@slidev/client";
import useTheme from "../shared/useTheme";

const { $slidev } = useSlideContext();
const { $themeBg, $themeImg, $customThemeConfig } = useTheme;

const skipPageNumber = () => {
  return (
    $slidev?.configs.skipPageNumberLayouts?.includes(
      $slidev.nav.currentLayout
    ) || false
  );
};

// bg
const bgImg = $themeBg($customThemeConfig($slidev.configs).courseLevel);

// rt logo
const { logo } = $themeImg($customThemeConfig($slidev.configs).themeName);
</script>

<template>
  <div class="slidev-layout relative" :class="$style['slidev-bg']">
    <slot />
    <div
      v-if="!skipPageNumber()"
      class="absolute bottom-[5%] left-[7%] w-[86%]"
    >
      <p class="text-[1rem] text-center">
        {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
      </p>
    </div>
    <div class="absolute left-[2%] top-[3.5%] w-[3.2rem]">
      <img :src="logo" alt="Logo" />
    </div>
  </div>
</template>

<style module>
.slidev-bg {
  background-image: v-bind(bgImg);
}
</style>
