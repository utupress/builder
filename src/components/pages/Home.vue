<template>

  <div v-for="(section, s_index) in sections" class="flex" :key="s_index">
    <div v-for="(block, b_index) in section.blocks" :class="'w-' + block.width" :key="b_index">
      
      <component v-for="(tmp_component, c_index) in block.components" :key="c_index" :is="tmp_component" />
      
      <div class="text-center">
        <modal-popper :id_str="('s_' + s_index + '_' + b_index)" @updateChange="addComponent"></modal-popper>
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
import ModalPopper from "@/components/ModalPopper";

export default {
  components: {
    SectionPopper,
    ModalPopper,
  },
  data() {
    return {
      sections: [],
      components: []
    }
  },
  methods: {
    addComponent(component) {
      const id_str_arr = component.id_str.split("_");
      const id_1 = id_str_arr[1];
      const id_2 = id_str_arr[2];

      this.sections[id_1]['blocks'][id_2]['components'].push(this.$filters.fetchComponent(component.name));
    },
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
