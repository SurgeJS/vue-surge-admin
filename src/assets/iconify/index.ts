import AntDesignIconJson from '@iconify/json/json/ant-design.json'
import { addCollection } from '@iconify/vue'

// 图标集
const IconSet = [AntDesignIconJson]

// 将图标集添加到组件的图标存储中（离线使用菜单图标渲染和图标选择器）,会增加打包后的体积
IconSet.forEach(item => addCollection(item))

// 图标集前缀
export const iconSetPrefix = IconSet.map(item => item.prefix)
