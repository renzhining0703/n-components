import { App } from 'vue';
import {
  ElAside,
  ElAvatar,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElDatePicker,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElForm,
  ElFormItem,
  ElHeader,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  ElRadio,
  ElRow,
  ElCol,
  ElSelect,
  ElTabPane,
  ElTabs,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree,
  ElCard,
  ElColorPicker,
  ElDrawer,
  ElSubMenu,
  ElBadge,
  ElPopover,
  ElRadioGroup,
  ElUpload,
  ElProgress,
  ElRadioButton,
  ElTreeSelect,
  ElSwitch
} from 'element-plus';

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElCol,
  ElRow,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree,
  ElCard,
  ElColorPicker,
  ElDrawer,
  ElSubMenu,
  ElBadge,
  ElPopover,
  ElRadioGroup,
  ElUpload,
  ElProgress,
  ElRadioButton,
  ElTreeSelect,
  ElSwitch
];

export default function (vm: App): void {
  for (const component of components) {
    vm.component(component.name, component);
  }
}
