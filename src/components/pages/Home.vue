<template>

  <div v-for="(section, s_index) in sections" class="flex" :key="s_index">
    <div v-for="(block, b_index) in section.blocks" :class="'w-' + block.width" :key="b_index">
      <div class="text-center">
        <button class="btn btn-warning my-2">Add Block</button>
      </div>
    </div>
  </div>


  <div id="sections-wrapper" class="text-center rounded border-dotted border-2 border-indigo-600 p-2 m-2">
    <h4><i class="fa fa-thumbs-down text-danger"></i> No Section Added</h4>
    <section-popper @updateChange="addSection"></section-popper>




  </div>
</template>

<script>

import SectionPopper from "@/components/SectionPopper";

export default {
  components: {
    SectionPopper,
  },
  data() {
    return {
      sections: [],
    }
  },
  methods: {
    addSection(section) {
      this.sections.push(section);
      console.log(this.sections);
    },
  },
};
</script>

<style>
h1 {
  font-size: 150px;
  line-height: 150px;
  font-weight: 700;
  color: #252932;
  text-shadow: rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px,
    rgba(61, 61, 61, 0.3) 3px 3px;
}
</style>
