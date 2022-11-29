<template>

    <Popper :class="theme" :show="showPopper">
        <button  class="btn btn-primary" @click="showPopper=!showPopper">Add Section</button>

        <template #content>

            <ul class="nav nav-pills bg-blue-500">
                <li class="nav-item">
                    <a class="nav-link text-white rounded-none"
                        :class="[icon_type == 'regular' ? 'bg-blue-700 active' : '']" href="#"
                        @click="icon_type = 'regular'">Regular</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white rounded-none"
                        :class="[icon_type == 'specialty' ? 'bg-blue-700 active' : '']" href="#"
                        @click="icon_type = 'specialty'">Specialty</a>
                </li>
            </ul>

            <div class="et-fb-columns-layout grid grid-cols-3 gap-2 p-2"
                :class="[icon_type == 'regular' ? '' : 'hidden']">
                <div class="column-block-wrapper" v-on:click="addSection('4_4', 'regular')">
                    <div class="column-block-wrap" style="width: 100%;">
                        <div class="column-block">4/4</div>
                    </div>
                </div>
                <div class="column-block-wrapper" v-on:click="addSection('1_2,1_2', 'regular')">
                    <div class="column-block-wrap" style="width: 50%;">
                        <div class="column-block">1/2</div>
                    </div>
                    <div class="column-block-wrap" style="width: 50%;">
                        <div class="column-block">1/2</div>
                    </div>
                </div>
                <div class="column-block-wrapper" v-on:click="addSection('1_3,1_3,1_3', 'regular')">
                    <div class="column-block-wrap" style="width: 33.3333%;">
                        <div class="column-block">1/3</div>
                    </div>
                    <div class="column-block-wrap" style="width: 33.3333%;">
                        <div class="column-block">1/3</div>
                    </div>
                    <div class="column-block-wrap" style="width: 33.3333%;">
                        <div class="column-block">1/3</div>
                    </div>
                </div>
                <div class="column-block-wrapper" v-on:click="addSection('1_4,1_4,1_4,1_4', 'regular')">
                    <div class="column-block-wrap" style="width: 25%;">
                        <div class="column-block">1/4</div>
                    </div>
                    <div class="column-block-wrap" style="width: 25%;">
                        <div class="column-block">1/4</div>
                    </div>
                    <div class="column-block-wrap" style="width: 25%;">
                        <div class="column-block">1/4</div>
                    </div>
                    <div class="column-block-wrap" style="width: 25%;">
                        <div class="column-block">1/4</div>
                    </div>
                </div>
                <div class="column-block-wrapper" v-on:click="addSection('1_5,1_5,1_5,1_5,1_5', 'regular')">
                    <div class="column-block-wrap" style="width: 20%;">
                        <div class="column-block">1/5</div>
                    </div>
                    <div class="column-block-wrap" style="width: 20%;">
                        <div class="column-block">1/5</div>
                    </div>
                    <div class="column-block-wrap" style="width: 20%;">
                        <div class="column-block">1/5</div>
                    </div>
                    <div class="column-block-wrap" style="width: 20%;">
                        <div class="column-block">1/5</div>
                    </div>
                    <div class="column-block-wrap" style="width: 20%;">
                        <div class="column-block">1/5</div>
                    </div>
                </div>
                <div class="column-block-wrapper" v-on:click="addSection('1_6,1_6,1_6,1_6,1_6,1_6', 'regular')">
                    <div class="column-block-wrap" style="width: 16.6667%;">
                        <div class="column-block">1/6</div>
                    </div>
                    <div class="column-block-wrap" style="width: 16.6667%;">
                        <div class="column-block">1/6</div>
                    </div>
                    <div class="column-block-wrap" style="width: 16.6667%;">
                        <div class="column-block">1/6</div>
                    </div>
                    <div class="column-block-wrap" style="width: 16.6667%;">
                        <div class="column-block">1/6</div>
                    </div>
                    <div class="column-block-wrap" style="width: 16.6667%;">
                        <div class="column-block">1/6</div>
                    </div>
                    <div class="column-block-wrap" style="width: 16.6667%;">
                        <div class="column-block">1/6</div>
                    </div>
                </div>
                <div class="column-block-wrapper" v-on:click="addSection('2_5,3_5', 'regular')">
                    <div class="column-block-wrap" style="width: 40%;">
                        <div class="column-block">2/5</div>
                    </div>
                    <div class="column-block-wrap" style="width: 60%;">
                        <div class="column-block">3/5</div>
                    </div>
                </div>
                <div class="column-block-wrapper" v-on:click="addSection('3_5,2_5', 'regular')">
                    <div class="column-block-wrap" style="width: 60%;">
                        <div class="column-block">3/5</div>
                    </div>
                    <div class="column-block-wrap" style="width: 40%;">
                        <div class="column-block">2/5</div>
                    </div>
                </div>
                <div class="column-block-wrapper" v-on:click="addSection('1_3,2_3', 'regular')">
                    <div class="column-block-wrap" style="width: 33.3333%;">
                        <div class="column-block">1/3</div>
                    </div>
                    <div class="column-block-wrap" style="width: 66.6667%;">
                        <div class="column-block">2/3</div>
                    </div>
                </div>
                <div class="column-block-wrapper" v-on:click="addSection('2_3,1_3', 'regular')">
                    <div class="column-block-wrap" style="width: 66.6667%;">
                        <div class="column-block">2/3</div>
                    </div>
                    <div class="column-block-wrap" style="width: 33.3333%;">
                        <div class="column-block">1/3</div>
                    </div>
                </div>
                <div class="column-block-wrapper" v-on:click="addSection('1_4,3_4', 'regular')">
                    <div class="column-block-wrap" style="width: 25%;">
                        <div class="column-block">1/4</div>
                    </div>
                    <div class="column-block-wrap" style="width: 75%;">
                        <div class="column-block">3/4</div>
                    </div>
                </div>
                <div class="column-block-wrapper" v-on:click="addSection('3_4,1_4', 'regular')">
                    <div class="column-block-wrap" style="width: 75%;">
                        <div class="column-block">3/4</div>
                    </div>
                    <div class="column-block-wrap" style="width: 25%;">
                        <div class="column-block">1/4</div>
                    </div>
                </div>
                <div class="column-block-wrapper" v-on:click="addSection('1_4,1_2,1_4', 'regular')">
                    <div class="column-block-wrap" style="width: 25%;">
                        <div class="column-block">1/4</div>
                    </div>
                    <div class="column-block-wrap" style="width: 50%;">
                        <div class="column-block">1/2</div>
                    </div>
                    <div class="column-block-wrap" style="width: 25%;">
                        <div class="column-block">1/4</div>
                    </div>
                </div>
                <div class="column-block-wrapper" v-on:click="addSection('1_5,3_5,1_5', 'regular')">
                    <div class="column-block-wrap" style="width: 20%;">
                        <div class="column-block">1/5</div>
                    </div>
                    <div class="column-block-wrap" style="width: 60%;">
                        <div class="column-block">3/5</div>
                    </div>
                    <div class="column-block-wrap" style="width: 20%;">
                        <div class="column-block">1/5</div>
                    </div>
                </div>
                <div class="column-block-wrapper" v-on:click="addSection('1_4,1_4,1_2', 'regular')">
                    <div class="column-block-wrap" style="width: 25%;">
                        <div class="column-block">1/4</div>
                    </div>
                    <div class="column-block-wrap" style="width: 25%;">
                        <div class="column-block">1/4</div>
                    </div>
                    <div class="column-block-wrap" style="width: 50%;">
                        <div class="column-block">1/2</div>
                    </div>
                </div>
                <div class="column-block-wrapper" v-on:click="addSection('1_2,1_4,1_4', 'regular')">
                    <div class="column-block-wrap" style="width: 50%;">
                        <div class="column-block">1/2</div>
                    </div>
                    <div class="column-block-wrap" style="width: 25%;">
                        <div class="column-block">1/4</div>
                    </div>
                    <div class="column-block-wrap" style="width: 25%;">
                        <div class="column-block">1/4</div>
                    </div>
                </div>
                <div class="column-block-wrapper" v-on:click="addSection('1_5,1_5,3_5', 'regular')">
                    <div class="column-block-wrap" style="width: 20%;">
                        <div class="column-block">1/5</div>
                    </div>
                    <div class="column-block-wrap" style="width: 20%;">
                        <div class="column-block">1/5</div>
                    </div>
                    <div class="column-block-wrap" style="width: 60%;">
                        <div class="column-block">3/5</div>
                    </div>
                </div>
                <div class="column-block-wrapper" v-on:click="addSection('3_5,1_5,1_5', 'regular')">
                    <div class="column-block-wrap" style="width: 60%;">
                        <div class="column-block">3/5</div>
                    </div>
                    <div class="column-block-wrap" style="width: 20%;">
                        <div class="column-block">1/5</div>
                    </div>
                    <div class="column-block-wrap" style="width: 20%;">
                        <div class="column-block">1/5</div>
                    </div>
                </div>
                <div class="column-block-wrapper" v-on:click="addSection('1_6,1_6,1_6,1_2', 'regular')">
                    <div class="column-block-wrap" style="width: 16.6667%;">
                        <div class="column-block">1/6</div>
                    </div>
                    <div class="column-block-wrap" style="width: 16.6667%;">
                        <div class="column-block">1/6</div>
                    </div>
                    <div class="column-block-wrap" style="width: 16.6667%;">
                        <div class="column-block">1/6</div>
                    </div>
                    <div class="column-block-wrap" style="width: 50%;">
                        <div class="column-block">1/2</div>
                    </div>
                </div>
                <div class="column-block-wrapper" v-on:click="addSection('1_2,1_6,1_6,1_6', 'regular')">
                    <div class="column-block-wrap" style="width: 50%;">
                        <div class="column-block">1/2</div>
                    </div>
                    <div class="column-block-wrap" style="width: 16.6667%;">
                        <div class="column-block">1/6</div>
                    </div>
                    <div class="column-block-wrap" style="width: 16.6667%;">
                        <div class="column-block">1/6</div>
                    </div>
                    <div class="column-block-wrap" style="width: 16.6667%;">
                        <div class="column-block">1/6</div>
                    </div>
                </div>
            </div>

            <ul class="et-fb-modules-list grid grid-cols-3 gap-2 p-2"
                :class="[icon_type == 'specialty' ? '' : 'hidden']">
                <li class="1_2,1_2 et_fb_specialty_layout_item" v-on:click="addSection('1_2,1_2', 'specialty', '1,0')">
                    <div class="et_pb_layout_column et_pb_column_layout_1_2 et_pb_variations et_pb_3_variations">
                        <div class="et_pb_variation et_pb_variation_full"></div>
                        <div class="et_pb_variation_row">
                            <div class="et_pb_variation et_pb_variation_1_2"></div>
                            <div class="et_pb_variation et_pb_variation_1_2"></div>
                        </div>
                        <div class="et_pb_variation_row">
                            <div class="et_pb_variation et_pb_variation_1_3"></div>
                            <div class="et_pb_variation et_pb_variation_1_3"></div>
                            <div class="et_pb_variation et_pb_variation_1_3"></div>
                        </div>
                    </div>
                    <div class="et_pb_layout_column et_pb_column_layout_1_2 et_pb_specialty_column"></div>
                </li>
                <li class="1_2,1_2 et_fb_specialty_layout_item" v-on:click="addSection('1_2,1_2', 'specialty', '0,1')">
                    <div class="et_pb_layout_column et_pb_column_layout_1_2 et_pb_specialty_column"></div>
                    <div class="et_pb_layout_column et_pb_column_layout_1_2 et_pb_variations et_pb_3_variations">
                        <div class="et_pb_variation et_pb_variation_full"></div>
                        <div class="et_pb_variation_row">
                            <div class="et_pb_variation et_pb_variation_1_2"></div>
                            <div class="et_pb_variation et_pb_variation_1_2"></div>
                        </div>
                        <div class="et_pb_variation_row">
                            <div class="et_pb_variation et_pb_variation_1_3"></div>
                            <div class="et_pb_variation et_pb_variation_1_3"></div>
                            <div class="et_pb_variation et_pb_variation_1_3"></div>
                        </div>
                    </div>
                </li>
                <li class="1_4,3_4 et_fb_specialty_layout_item" v-on:click="addSection('1_4,3_4', 'specialty', '0,1')">
                    <div class="et_pb_layout_column et_pb_column_layout_1_4 et_pb_specialty_column"></div>
                    <div class="et_pb_layout_column et_pb_column_layout_3_4 et_pb_variations et_pb_3_variations">
                        <div class="et_pb_variation et_pb_variation_full"></div>
                        <div class="et_pb_variation_row">
                            <div class="et_pb_variation et_pb_variation_1_2"></div>
                            <div class="et_pb_variation et_pb_variation_1_2"></div>
                        </div>
                        <div class="et_pb_variation_row">
                            <div class="et_pb_variation et_pb_variation_1_3"></div>
                            <div class="et_pb_variation et_pb_variation_1_3"></div>
                            <div class="et_pb_variation et_pb_variation_1_3"></div>
                        </div>
                    </div>
                </li>
                <li class="3_4,1_4 et_fb_specialty_layout_item" v-on:click="addSection('3_4,1_4', 'specialty', '1,0')">
                    <div class="et_pb_layout_column et_pb_column_layout_3_4 et_pb_variations et_pb_3_variations">
                        <div class="et_pb_variation et_pb_variation_full"></div>
                        <div class="et_pb_variation_row">
                            <div class="et_pb_variation et_pb_variation_1_2"></div>
                            <div class="et_pb_variation et_pb_variation_1_2"></div>
                        </div>
                        <div class="et_pb_variation_row">
                            <div class="et_pb_variation et_pb_variation_1_3"></div>
                            <div class="et_pb_variation et_pb_variation_1_3"></div>
                            <div class="et_pb_variation et_pb_variation_1_3"></div>
                        </div>
                    </div>
                    <div class="et_pb_layout_column et_pb_column_layout_1_4 et_pb_specialty_column"></div>
                </li>
                <li class="1_4,1_2,1_4 et_fb_specialty_layout_item"
                    v-on:click="addSection('1_4,1_2,1_4', 'specialty', '0,1,0')">
                    <div class="et_pb_layout_column et_pb_column_layout_1_4 et_pb_specialty_column"></div>
                    <div class="et_pb_layout_column et_pb_column_layout_1_2 et_pb_variations et_pb_3_variations">
                        <div class="et_pb_variation et_pb_variation_full"></div>
                        <div class="et_pb_variation_row">
                            <div class="et_pb_variation et_pb_variation_1_2"></div>
                            <div class="et_pb_variation et_pb_variation_1_2"></div>
                        </div>
                        <div class="et_pb_variation_row">
                            <div class="et_pb_variation et_pb_variation_1_3"></div>
                            <div class="et_pb_variation et_pb_variation_1_3"></div>
                            <div class="et_pb_variation et_pb_variation_1_3"></div>
                        </div>
                    </div>
                    <div class="et_pb_layout_column et_pb_column_layout_1_4 et_pb_specialty_column"></div>
                </li>
                <li class="1_2,1_4,1_4 et_fb_specialty_layout_item"
                    v-on:click="addSection('1_2,1_4,1_4', 'specialty', '1,0,0')">
                    <div class="et_pb_layout_column et_pb_column_layout_1_2 et_pb_variations et_pb_3_variations">
                        <div class="et_pb_variation et_pb_variation_full"></div>
                        <div class="et_pb_variation_row">
                            <div class="et_pb_variation et_pb_variation_1_2"></div>
                            <div class="et_pb_variation et_pb_variation_1_2"></div>
                        </div>
                        <div class="et_pb_variation_row">
                            <div class="et_pb_variation et_pb_variation_1_3"></div>
                            <div class="et_pb_variation et_pb_variation_1_3"></div>
                            <div class="et_pb_variation et_pb_variation_1_3"></div>
                        </div>
                    </div>
                    <div class="et_pb_layout_column et_pb_column_layout_1_4 et_pb_specialty_column"></div>
                    <div class="et_pb_layout_column et_pb_column_layout_1_4 et_pb_specialty_column"></div>
                </li>
                <li class="1_4,1_4,1_2 et_fb_specialty_layout_item"
                    v-on:click="addSection('1_4,1_4,1_2', 'specialty', '0,0,1')">
                    <div class="et_pb_layout_column et_pb_column_layout_1_4 et_pb_specialty_column"></div>
                    <div class="et_pb_layout_column et_pb_column_layout_1_4 et_pb_specialty_column"></div>
                    <div class="et_pb_layout_column et_pb_column_layout_1_2 et_pb_variations et_pb_3_variations">
                        <div class="et_pb_variation et_pb_variation_full"></div>
                        <div class="et_pb_variation_row">
                            <div class="et_pb_variation et_pb_variation_1_2"></div>
                            <div class="et_pb_variation et_pb_variation_1_2"></div>
                        </div>
                        <div class="et_pb_variation_row">
                            <div class="et_pb_variation et_pb_variation_1_3"></div>
                            <div class="et_pb_variation et_pb_variation_1_3"></div>
                            <div class="et_pb_variation et_pb_variation_1_3"></div>
                        </div>
                    </div>
                </li>
                <li class="1_3,2_3 et_fb_specialty_layout_item" v-on:click="addSection('1_3,2_3', 'specialty', '0,1')">
                    <div class="et_pb_layout_column et_pb_column_layout_1_3 et_pb_specialty_column"></div>
                    <div class="et_pb_layout_column et_pb_column_layout_2_3 et_pb_variations et_pb_3_variations">
                        <div class="et_pb_variation et_pb_variation_full"></div>
                        <div class="et_pb_variation_row">
                            <div class="et_pb_variation et_pb_variation_1_2"></div>
                            <div class="et_pb_variation et_pb_variation_1_2"></div>
                        </div>
                        <div class="et_pb_variation_row">
                            <div class="et_pb_variation et_pb_variation_1_4"></div>
                            <div class="et_pb_variation et_pb_variation_1_4"></div>
                            <div class="et_pb_variation et_pb_variation_1_4"></div>
                            <div class="et_pb_variation et_pb_variation_1_4"></div>
                        </div>
                    </div>
                </li>
                <li class="2_3,1_3 et_fb_specialty_layout_item" v-on:click="addSection('2_3,1_3', 'specialty', '1,0')">
                    <div class="et_pb_layout_column et_pb_column_layout_2_3 et_pb_variations et_pb_3_variations">
                        <div class="et_pb_variation et_pb_variation_full"></div>
                        <div class="et_pb_variation_row">
                            <div class="et_pb_variation et_pb_variation_1_2"></div>
                            <div class="et_pb_variation et_pb_variation_1_2"></div>
                        </div>
                        <div class="et_pb_variation_row">
                            <div class="et_pb_variation et_pb_variation_1_4"></div>
                            <div class="et_pb_variation et_pb_variation_1_4"></div>
                            <div class="et_pb_variation et_pb_variation_1_4"></div>
                            <div class="et_pb_variation et_pb_variation_1_4"></div>
                        </div>
                    </div>
                    <div class="et_pb_layout_column et_pb_column_layout_1_3 et_pb_specialty_column"></div>
                </li>
            </ul>

        </template>

    </Popper>
</template>
  
<script>

export default {
    name: 'SectionPopper',

    data() {
        return {
            icon_type: 'regular',
            showPopper: false,
        }
    },
    methods: {
        addSection(layout, type, ordering = '', column = '3') {
            alert('addSection');
            this.showPopper = !this.showPopper;
        },
    },
}

</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.inline-block {
    display: inline-block;
}

:root {
    --popper-theme-background-color: #ffffff;
    --popper-theme-background-color-hover: #ffffff;
    --popper-theme-text-color: #333333;
    --popper-theme-border-width: 1px;
    --popper-theme-border-style: solid;
    --popper-theme-border-color: #eeeeee;
    --popper-theme-border-radius: 6px;
    --popper-theme-padding: 32px;
    --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}

.popper {
    padding: 0px !important;
    width: 350px;
}

.popper #arrow::before {
    z-index: -1;
    background: #0d6efd !important;
}

.popper #arrow:hover::before {
    background: #0d6efd !important;
}

et-fb-columns-layout .column-block-wrapper {
    background: #fff;
    width: 29%;
    padding: 0;
    margin: 0 6.5% 6.5% 0;
    line-height: 26px;
    border-radius: 0;
}

.et-fb-columns-layout .column-block-wrapper .column-block-wrap .column-block {
    background: #29c4a9;
    display: block;
    font-size: 11px;
    text-align: center;
    text-indent: -9999em;
    padding: 2px 0;
    transition: background .2s ease;
    border-radius: 3px;
}

.et-fb-columns-layout .column-block-wrapper:nth-child(odd) {
    clear: none !important;
}

.et-fb-columns-layout .column-block-wrapper {
    background: #fff;
    padding: 0;
    margin: 0 6.5% 6.5% 0;
    line-height: 26px;
    border-radius: 0;
}

.et-fb-columns-layout .column-block-wrapper {
    max-height: 80px;
    overflow: hidden;
    border: none !important;
    color: #4c5866;
    text-decoration: none;
    padding: 5px;
    line-height: 2.35em;
    font-size: 13px;
    text-align: center;
    display: inline-block;
    transition: all .3s;
    -moz-transition: all .3s;
    -webkit-transition: all .3s;
    margin: 2%;
    position: relative;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    font-weight: 600;
    background: #f1f5f9;
    border-radius: 3px;
    vertical-align: top;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
}

.et-fb-columns-layout .column-block-wrapper .column-block-wrap .column-block {
    background: #29c4a9;
    display: block;
    font-size: 11px;
    text-align: center;
    text-indent: -9999em;
    padding: 2px 0;
    transition: background .2s ease;
    border-radius: 3px;
}

.column-block-wrap {
    padding: 0 2px;
    float: left;
}



.et_fb_specialty_layout_item {
    padding: 0;
    margin: 0 20px 20px 0;
    background: #fff;
}

.et_fb_specialty_layout_item {
    max-height: 80px;
    overflow: hidden;
    border: none !important;
    color: #4c5866;
    text-decoration: none;
    padding: 10px;
    line-height: 2.35em;
    font-size: 13px;
    text-align: center;
    display: inline-block;
    transition: all .3s;
    -moz-transition: all .3s;
    -webkit-transition: all .3s;
    margin: 0 4% 4% 0;
    position: relative;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    font-weight: 600;
    background: #f1f5f9;
    border-radius: 3px;
    vertical-align: top;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.et_pb_variations {
    background: 0 0;
}

.et_pb_column_layout_1_2 {
    width: 46%;
}

.et_pb_layout_column {
    float: left;
    height: 40px;
    margin-right: 6%;
    position: relative;
}


.et-fb-modules-list ul {
    padding: 0 !important;
    margin: 0;
}

.et-fb-modules-list li {
    max-height: 80px;
    overflow: hidden;
    border: none !important;
    color: #4c5866;
    text-decoration: none;
    padding: 10px;
    line-height: 2.35em;
    font-size: 13px;
    text-align: center;
    display: inline-block;
    transition: all .3s;
    -moz-transition: all .3s;
    -webkit-transition: all .3s;
    margin: 2%;
    position: relative;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    font-weight: 600;
    background: #f1f5f9 !important;
    border-radius: 3px;
    vertical-align: top;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.et-fb-modules-list li:nth-child(2n) {
    margin-right: 0;
}

.et-fb-modules-list li:nth-child(odd) {
    clear: both;
}

.et-fb-modules-list li:hover {
    background: #e1e7ec;
    color: #23282d;
    cursor: pointer;
    transition: all .3s;
    -moz-transition: all .3s;
    -webkit-transition: all .3s;
}

.et-fb-modules-list ul>li:before {
    font-family: etbuilder;
    speak: none;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    content: "!";
    display: block;
    margin-bottom: 5px;
    color: #2b87da;
}

.et-fb-modules-list .et-fb-settings-options ul {
    padding: 0;
}

.et-fb-modules-list .et_fb_specialty_layout_item {
    padding: 2px;
    background: #fff;
    height: 70px;
}

.et-fb-modules-list .et_fb_specialty_layout_item:nth-of-type(3n) {
    margin-right: 0 !important;
}

.et-fb-modules-list .et_fb_specialty_layout_item:before {
    display: none;
}

.et-fb-modules-list li.et_fb_specialty_layout_item:hover {
    background: #fff;
    transition: background .5s;
}

.et-fb-modules-list li.et_fb_specialty_layout_item:hover .et_pb_variation {
    background: #24ab93;
}

.et-fb-modules-list li.et_fb_specialty_layout_item:hover .et_pb_specialty_column {
    background: #e09a5b;
}

.et-fb-modules-list .et_pb_layout_column {
    float: left;
    height: 40px;
    margin-right: 6%;
    position: relative;
}

.et-fb-modules-list .et_pb_specialty_column {
    background: #ff9232;
    border-radius: 3px;
    transition: background .5s;
}

.et-fb-modules-list .et_pb_layout_column:before {
    position: absolute;
    top: 28px;
    left: 0;
    color: #fff;
    font-size: 16px;
    width: 100%;
    text-align: center;
}

.et-fb-modules-list .et_pb_layout_column:last-child {
    margin-right: 0;
}

.et-fb-modules-list .et_pb_column_layout_1_2 {
    width: 46%;
}

.et-fb-modules-list .et_pb_column_layout_1_3 {
    width: 28.6%;
}

.et-fb-modules-list .et_pb_column_layout_1_4 {
    width: 20%;
}

.et-fb-modules-list .et_pb_column_layout_2_3 {
    width: 63%;
}

.et-fb-modules-list .et_pb_column_layout_3_4 {
    width: 72%;
}

.et-fb-modules-list .et_pb_variation {
    height: 17px;
    float: left;
    margin-bottom: 5px;
    background: #00c3aa;
    margin-right: 8%;
    border-radius: 3px;
    transition: background .5s;
}

.et-fb-modules-list .et_pb_variation_full {
    width: 100%;
    float: none;
    margin-right: 0;
}

.et-fb-modules-list .et_pb_variations {
    background: 0 0;
}

.et-fb-modules-list .et_pb_variation_1_2 {
    width: 46%;
}

.et-fb-modules-list .et_pb_variation_1_3 {
    width: 28%;
}

.et-fb-modules-list .et_pb_variation_1_4 {
    width: 19%;
}

.et-fb-modules-list .et_pb_variation_1_2:last-child,
.et-fb-modules-list .et_pb_variation_1_3:last-child,
.et-fb-modules-list .et_pb_variation_1_4:last-child {
    margin-right: 0;
}

.et-fb-modules-list .et_pb_specialty_column:before,
.et-fb-modules-list .et_pb_variations:before {
    content: "";
}
</style>
  