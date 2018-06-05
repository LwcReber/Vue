<template>
  <div class="form-item">
    <label :for="prop" class="form-item-label" v-if="label">
      {{ label }}
    </label>
    <div class="form-item-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'form-item',
  computed: {
    form () {
      let parent = this.$parent
      while (parent.$options.componentName !== 'VForm') {
        parent = parent.$parent
      }
      return parent
    },
    fieldError () {
      if (!this.prop) {
        return ''
      }
      const formError = this.form.formError
      return formError[this.prop] || ''
    }
  },
  methods: {
    dispatchEvent (eventName, params) {
      // if ()
      // this.form.$emit
      if (typeof this.form !== 'object' && !this.form.$emit) {
        console.error('FormItem必须在Form组件内')
        return
      }
      this.form.$emit(eventName, params)
    }
  },
  props: {
    prop: String,
    label: String
  },
  mounted () {
    if (this.prop) {
      this.dispatchEvent('form.addField', {
        prop: this.prop,
        el: this.$el
      })
    }
  },
  beforeDestroy () {
    if (this.prop) {
      this.dispatchEvent('form.removeField', {
        prop: this.prop
      })
    }
  }
}
</script>
