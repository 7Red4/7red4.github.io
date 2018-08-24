var app = new Vue({
  el: '#app',
  data() {
    return {
      currentV: '',
      savedV: false,
      F: ''
    }
  },
  methods: {
    reset() {
      this.currentV = ''
      this.savedV = false
      this.F = ''
    },
    del() {
      if (this.F === 'Ans') {
        this.F = ''
      }
      let l = this.currentV.toString(10).length - 1
      this.currentV  = this.currentV.toString(10).slice(0, l)
      if (this.currentV == '') {
        this.F = ''
      }
    },
    num(val) {
      if (this.F === 'Ans') {
        this.reset()
        this.num(val)
      }else {
        this.currentV = this.currentV.toString(10) + val.toString(10)
      }
    },
    float() {
      if (this.F === 'Ans') {
        this.reset()
        this.float()
      } else {
      let check = this.currentV.toString(10)
      if (check.indexOf('.') != -1) {
      } else {
        this.currentV = this.currentV.toString(10) + '.'
      }
    }
    },
    cal() {
      this.currentV = Number(this.currentV)
      if (this.F === '+') {
        if (this.savedV == false) {
          this.savedV = this.currentV
        } else {
          this.currentV = this.savedV + this.currentV
          this.savedV = this.currentV
        }
      } else if (this.F === '-') {
        if (this.savedV == false) {
          this.savedV = this.currentV
        } else {
          this.currentV = this.savedV - this.currentV
          this.savedV = this.currentV
        }
      } else if (this.F === '*') {
        if (this.savedV == false) {
          this.savedV = this.currentV
        } else {
          this.currentV = this.savedV * this.currentV
          this.savedV = this.currentV
        }
      } else if (this.F === '÷') {
        if (this.savedV == false) {
          this.savedV = this.currentV
        } else {
          this.currentV = this.savedV / this.currentV
          this.savedV = this.currentV
        }
      } else if (this.F === 'Ans') {
        this.savedV = this.currentV
      } else {
        if (this.savedV == false) {
          this.savedV = this.currentV
        }
      }
    },
    fun(m) {
      this.cal()
      if (m === '+') {
        this.F = '+'
        this.currentV = ''
      } else if (m === '-') {
        this.F = '-'
        this.currentV = ''
      } else if (m === '*') {
        this.F = '*'
        this.currentV = ''
      } else if (m === '÷') {
        this.F = '÷'
        this.currentV = ''
      } else if (m === '=') {
        this.F = 'Ans'
        this.currentV = this.savedV
        this.savedV = false
      }
    }
  },
  computed: {
    result() {
      return this.currentV
    }
  }
});

