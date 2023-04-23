<template>
  <div :class="{ 'n-choose-icon-dialog-body-height': isScroll }">
    <el-dialog v-model="dialogVisible" v-bind="$attrs">
      <el-row>
      <template #default>
        <el-col v-bind="colLayout">
        <n-form
          ref="form"
          :options="options"
          label-width="100px"
          @on-change="onChange"
          @before-upload="beforeUpload"
          @on-preview="onPreview"
          @on-remove="onRemove"
          @before-remove="beforeRemove"
          @on-success="onSuccess"
          @on-exceed="onExceed"
        >
          <template #uploadArea>
            <slot name="uploadArea"></slot>
          </template>
          <template #uploadTip>
            <slot name="uploadTip"></slot>
          </template>
        </n-form>
        </el-col>
      </template>
      </el-row>
      <template #footer>
        <slot name="footer" :form="form"></slot>
      </template>
    </el-dialog>
  </div>
</template>

<script lang='ts' setup>
import { PropType, ref, watch } from 'vue'
import { FormOptions } from '../../form/src/types/types'
let props = defineProps({
  // 是否只在可视区域内滚动
  isScroll: {
    type: Boolean,
    default: false
  },
  visible: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6, // >1920px 4个
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24,
    }),
  },
  onChange: {
    type: Function
  },
  beforeUpload: {
    type: Function
  },
  onPreview: {
    type: Function
  },
  onRemove: {
    type: Function
  },
  beforeRemove: {
    type: Function
  },
  onSuccess: {
    type: Function
  },
  onExceed: {
    type: Function
  },
})
let emits = defineEmits(['update:visible'])

// 表单实例
let form = ref()

// 弹出框的显示与隐藏
let dialogVisible = ref<boolean>(props.visible)

watch(() => props.visible, val => {
  dialogVisible.value = val
})
watch(() => dialogVisible.value, val => {
  emits('update:visible', val)
})
</script>

<style lang='scss' scoped>
</style>