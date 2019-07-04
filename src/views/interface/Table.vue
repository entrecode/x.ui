<template>
  <blocks-group :groups="sectionGroups" section-title="table"></blocks-group>
</template>

<script>
import BlocksGroup from '@/components/BlocksGroup.vue';

export default {
  name: 'Table',
  components: {
    BlocksGroup,
  },
  data: () => {
    return {
      sectionGroups: [
        {
          navTitle: 'default',
          title: '',
          id: 'table',
          groupItems: [
            {
              preview: `<table class="table">
  <thead>
    <tr>
      <th>title</th>
      <th>description</th>
      <th>date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title</td>
      <td>
        Gewiß. Aber was steht nicht alles - von Kinderfreund gar nicht zu reden
        - in Bibel und Katechismus, und die Leute wissen es doch nicht. Ich zum
        Beispiel.
      </td>
      <td>17-11-20</td>
    </tr>
  </tbody>
</table>`,
              markup: `<table class="table">
  <thead>
    <tr>
      <th>...</th>
      ...
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>...</td>
      ...
    </tr>
  </tbody>
</table>`,
              config: `$table-spacing: 0 0 16 0;
$table-border: 1 solid $base-divider-color;
$table-cell-padding: 8;`,
              previewCol: 12,
              markupCol: 12,
            },
          ],
        },
        {
          navTitle: 'bordered',
          title: '',
          id: 'table-bordered',
          groupItems: [
            {
              preview: `<table class="table table_bordered">
  <thead>
    <tr>
      <th>title</th>
      <th>description</th>
      <th>date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title</td>
      <td>
        Gewiß. Aber was steht nicht alles - von Kinderfreund gar nicht zu reden
        - in Bibel und Katechismus, und die Leute wissen es doch nicht. Ich zum
        Beispiel.
      </td>
      <td>17-11-20</td>
    </tr>
  </tbody>
</table>`,
              markup: `<table class="table table_bordered">
  <thead>
    <tr>
      <th>...</th>
      ...
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>...</td>
      ...
    </tr>
  </tbody>
</table>`,
              previewCol: 12,
              markupCol: 12,
            },
          ],
        },
        {
          navTitle: 'clear',
          title: '',
          id: 'table-clear',
          groupItems: [
            {
              preview: `<table class="table table_clear">
  <thead>
    <tr>
      <th>title</th>
      <th>description</th>
      <th>date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title</td>
      <td>
        Gewiß. Aber was steht nicht alles - von Kinderfreund gar nicht zu reden
        - in Bibel und Katechismus, und die Leute wissen es doch nicht. Ich zum
        Beispiel.
      </td>
      <td>17-11-20</td>
    </tr>
  </tbody>
</table>`,
              markup: `<table class="table table_bordered">
  <thead>
    <tr>
      <th>...</th>
      ...
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>...</td>
      ...
    </tr>
  </tbody>
</table>`,
              previewCol: 12,
              markupCol: 12,
            },
          ],
        },
        {
          navTitle: 'with data-col',
          title: '',
          id: 'table-grid',
          groupItems: [
            {
              preview: `<table class="table table_bordered">
  <thead>
    <tr data-flex>
      <th data-col="4">title</th>
      <th data-col="4">description</th>
      <th data-col="4">date</th>
    </tr>
  </thead>
  <tbody>
    <tr data-flex>
      <td data-col="4">title</td>
      <td data-col="4">
        Gewiß. Aber was steht nicht alles - von Kinderfreund gar nicht zu reden
        - in Bibel und Katechismus, und die Leute wissen es doch nicht. Ich zum
        Beispiel.
      </td>
      <td data-col="4">17-11-20</td>
    </tr>
  </tbody>
</table>`,
              markup: `<table class="table table_bordered">
  <thead>
    <tr>
      <th data-col="4">...</th>
      ...
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-col="4">...</td>
      ...
    </tr>
  </tbody>
</table>`,
              previewCol: 12,
              markupCol: 12,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
