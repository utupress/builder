<template>
  <div id="sections-wrapper" class="text-center rounded border-dotted border-2 border-indigo-600 p-2 m-2">

    <Popper>
      <button>Trigger element</button>
      <template #content>
        <div>This is the Popper content</div>
        <div>This is the Popper content</div>
        <div>This is the Popper content</div>
        <div>This is the Popper content</div>
        <div>This is the Popper content</div>
        <div>This is the Popper content</div>
        <div>This is the Popper content</div>
        
      </template>
    </Popper>

    <h4><i class="fa fa-thumbs-down text-danger"></i> No Section Added</h4>

    <div>
      <a class="btn btn-primary" href="index.html" @click="addSection">
        Add Section
      </a>
    </div>



  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";

export default {
  methods: {
    addSection() {
      alert('addSection');
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

#sections-wrapper .inline-block {
  display: inline-block;
}

#sections-wrapper .popper {
  transition: background 250ms ease-in-out;
  background: #ffffff;
  padding: 32px;
  color: #333333;
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  border-color: #eeeeee;
  box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
  z-index: 100;
}

#sections-wrapper .popper:hover,
#sections-wrapper .popper:hover>#arrow::before {
  background: var(--popper-theme-background-color-hover);
}

#sections-wrapper .inline-block {
  display: inline-block;
}

#sections-wrapper .fade-enter-active,
#sections-wrapper .fade-leave-active {
  transition: opacity 0.2s ease;
}

#sections-wrapper .fade-enter-from,
#sections-wrapper .fade-leave-to {
  opacity: 0;
}

#sections-wrapper #arrow,
#sections-wrapper #arrow::before {
  transition: background 250ms ease-in-out;
  position: absolute;
  width: calc(10px - var(--popper-theme-border-width, 0px));
  height: calc(10px - var(--popper-theme-border-width, 0px));
  box-sizing: border-box;
  background: var(--popper-theme-background-color);
}

#sections-wrapper #arrow {
  visibility: hidden;
}

#sections-wrapper #arrow::before {
  visibility: visible;
  content: "";
  transform: rotate(45deg);
}

/* Top arrow */
#sections-wrapper .popper[data-popper-placement^="top"]>#arrow {
  bottom: -5px;
}

#sections-wrapper .popper[data-popper-placement^="top"]>#arrow::before {
  border-right: var(--popper-theme-border-width) var(--popper-theme-border-style) var(--popper-theme-border-color);
  border-bottom: var(--popper-theme-border-width) var(--popper-theme-border-style) var(--popper-theme-border-color);
}

/* Bottom arrow */
#sections-wrapper .popper[data-popper-placement^="bottom"]>#arrow {
  top: -5px;
}

#sections-wrapper .popper[data-popper-placement^="bottom"]>#arrow::before {
  border-left: var(--popper-theme-border-width) var(--popper-theme-border-style) var(--popper-theme-border-color);
  border-top: var(--popper-theme-border-width) var(--popper-theme-border-style) var(--popper-theme-border-color);
}

/* Left arrow */
#sections-wrapper .popper[data-popper-placement^="left"]>#arrow {
  right: -5px;
}

#sections-wrapper .popper[data-popper-placement^="left"]>#arrow::before {
  border-right: var(--popper-theme-border-width) var(--popper-theme-border-style) var(--popper-theme-border-color);
  border-top: var(--popper-theme-border-width) var(--popper-theme-border-style) var(--popper-theme-border-color);
}

/* Right arrow */
#sections-wrapper .popper[data-popper-placement^="right"]>#arrow {
  left: -5px;
}
</style>
