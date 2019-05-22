<template>
  <div class="has-padding-8">
    <h2 class="is-h1 is-uppercase">typo</h2>
    <typo/>
    <typo-paragraphs/>
    <typo-list/>
    <typo-modifier/>
  </div>
</template>

<script>
import Typo from '@/components/Typeface/Typo.vue';
import TypoParagraphs from '@/components/Typeface/Paragraphs.vue';
import TypoList from '@/components/Typeface/List.vue';
import TypoModifier from '@/components/Typeface/TypoModifier.vue';
export default {
  components: {
    Typo,
    TypoParagraphs,
    TypoModifier,
    TypoList,
  },
};
</script>
