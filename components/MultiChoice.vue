<script setup>
import { onMounted, watch, ref } from "vue";
import { useAsyncState } from "@vueuse/core";
import { useWsService } from "../shared/useWsService.js";
import { useQuiz } from "../shared/useQuiz.js";

const props = defineProps({
  isOffline: {
    type: Boolean,
    default: true,
  },
  wsUrl: {
    type: String,
    default: "ws://localhost:8000",
    validator(value, props) {
      if (props.isOffline) return true;
      try {
        return ["ws:", "wss:"].includes(new URL(value).protocol);
      } catch (e) {
        return false;
      }
    },
  },
  ans: {
    type: Number,
    default: 0,
  },
});

const { getData } = useQuiz();
const question_page = ref(getData());

const answer = ref(0);
const lock = ref(false);

/**
 *
 * @param {String} choice
 */
const chooseAnswer = (choice) => {
  if (!lock.value) {
    answer.value = choice;
    lock.value = true;
  }
};
</script>

<template>
  <h1>{{ question_page[0] }}</h1>
  <div class="w-full h-full p-2">
    <div class="border-2 rounded-md bg-stone-100 w-full h-full p-4">
      <div
        v-if="props.isOffline"
        class="flex h-full flex-col justify-center items-center gap-2"
      >
        <div class="w-full">
          <p
            v-for="(qd, idx) in question_page.slice(1, -1)"
            :key="idx"
            class="self-start py-0 leading-[2.5rem]"
          >
            {{ qd }}
          </p>
        </div>
        <div class="w-full h-full grid grid-cols-2 gap-4">
          <div
            v-for="(option, idx) in question_page[question_page.length - 1]"
            :key="option"
            class="w-full flex justify-center items-start flex-col rounded-lg border-2 hover:border-stone-600 shadow-lg cursor-pointer"
            :class="{
              'border-4 border-green-800 bg-green-400':
                lock && answer === idx + 1 && answer === ans,
              'border-4 border-red-800 bg-rose-400':
                lock && answer === idx + 1 && answer !== ans,
              'border-4 border-yellow-800 bg-yellow-400':
                lock && answer == idx + 1 && ans === 0,
            }"
            @click="chooseAnswer(idx + 1)"
          >
            <p class="text-lg">
              {{ String.fromCharCode(idx + "A".charCodeAt()) }}. {{ option }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
