import { ref, computed } from "vue";

/**
 *
 * @param { import('vue').ComputedRef<number> } courseLevel
 * @returns { import('vue').ComputedRef<string> } css bg-image url string
 */
const $themeBg = (courseLevel) => {
  const courseLevelBg = ref([
    "../assets/lv1-bg.svg",
    "../assets/lv2-bg.svg",
    "../assets/lv3-bg.svg",
  ]);

  return computed(() => `url(${courseLevelBg.value[courseLevel.value]})`);
};

/**
 * 根據主題名稱取得對應的主題圖片資源
 *
 * @param { import('vue').ComputedRef<string> } themeName - 主題名稱（支援 "isip.hs" 或 "fhsh"）
 * @returns { {logo: Promise<any>, sectionImg: Promise<any>, slogonImg: Promise<any>} } 包含 logo、sectionImg、slogonImg 等圖片資源的物件
 */
const $themeImg = (themeName) => {
  const imgs = import.meta.glob("../assets/{fhsh,isip.hs}/*.{png,svg}", {
    eager: true,
  });
  const imgNames = ref(["logo.png", "section-img.png", "slogon.svg"]);
  const theme = computed(() =>
    imgNames.value.map((img) => `../assets/${themeName.value}/${img}`)
  );

  return {
    logo: imgs[theme.value[0]].default,
    sectionImg: imgs[theme.value[1]].default,
    slogonImg: imgs[theme.value[2]].default,
  };
};

/**
 *
 * @param {Object | null} headmatters
 * @returns { {courseLevel: import('vue').ComputedRef<number>, themeName: import('vue').ComputedRef<string>} }
 */
const $customThemeConfig = (headmatters) => {
  return {
    courseLevel: computed(() => headmatters?.courseLevel || 0),
    themeName: computed(() => headmatters?.themeName || "fhsh"),
  };
};

export default {
  $themeBg,
  $themeImg,
  $customThemeConfig,
};
