<script setup>
import Default from "./default.vue";
import MultiChoice from "../components/MultiChoice.vue";
import { useSlideContext } from "@slidev/client";
import { ref } from "vue";

const { $frontmatter } = useSlideContext();
const isOffline = $frontmatter.isOffline || true;
const wsUrl = !isOffline ? ($frontmatter.wsUrl || 'ws://localhost:8000') : '';
const ans = $frontmatter.ans || 0;
</script>

<template>
  <Default>
    <div :class="$style.quiz">
      <MultiChoice :is-offline="isOffline" :ws-url="wsUrl" :ans="ans"><slot></slot></MultiChoice>
    </div>
  </Default>
</template>

<style module lang="postcss">
.quiz {
  @apply w-full h-full relative p-2;
}
</style>
