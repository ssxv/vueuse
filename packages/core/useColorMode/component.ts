import type { UseColorModeOptions } from './index'
import { defineComponent, reactive } from 'vue'
import { useColorMode } from './index'

export const UseColorMode = /* #__PURE__ */ defineComponent<UseColorModeOptions>({
  name: 'UseColorMode',
  props: ['selector', 'attribute', 'modes', 'onChanged', 'storageKey', 'storage', 'emitAuto'] as unknown as undefined,
  setup(props, { slots }) {
    const mode = useColorMode(props)
    const data = reactive({
      mode,
      system: mode.system,
      store: mode.store,
    })

    return () => {
      if (slots.default)
        return slots.default(data)
    }
  },
})
