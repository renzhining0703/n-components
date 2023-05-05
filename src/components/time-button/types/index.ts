// export interface Props {
//     second?: number
//     type?: string
//   }
import { PropType } from 'vue'

export const PropsDefine = {
  second: {
    type: Number as PropType<number>,
    default: 60
  },
  type: {
    type: String as PropType<string>,
    default: 'primary'
  }
} as const

export type Emit = (event: string, ...args: any[]) => void
