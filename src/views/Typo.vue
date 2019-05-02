<template>
  <div>
    <h2 class="is-h1 is-uppercase">typo</h2>
    <typo/>
    <typo-paragraphs/>
    <typo-list/>
    <typo-headings/>
    <typo-modifier/>
  </div>
</template>

<script>
import Typo from '@/components/Typeface/Typo.vue';
import TypoParagraphs from '@/components/Typeface/Paragraphs.vue';
import TypoList from '@/components/Typeface/List.vue';
import TypoModifier from '@/components/Typeface/TypoModifier.vue';
import TypoHeadings from '@/components/Typeface/Headings.vue';
export default {
  components: {
    Typo,
    TypoParagraphs,
    TypoHeadings,
    TypoModifier,
    TypoList,
  },
};
</script>
