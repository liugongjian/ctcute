<template>
  <div class="home-banner">
    <div class="home-banner-animations">
      <svg class="large shape" viewBox="0 0 96 96">
        <defs>
          <linearGradient id="circleGradient" x1="50%" y1="0%" x2="50%" y2="99.1942401%">
            <stop stop-color="#CDEAFD" offset="0%"></stop>
            <stop stop-color="#D6EAF6" offset="8.49854796%"></stop>
            <stop stop-color="#EEF3FD" offset="100%"></stop>
          </linearGradient>
        </defs>
        <circle
          cx="48"
          cy="48"
          r="28"
          stroke="none"
          stroke-width="1"
          fill-rule="evenodd"
          stroke-linecap="square"
          fill="url(#circleGradient)"
        />
      </svg>
      <svg class="large shape" viewBox="0 0 96 96">
        <defs>
          <linearGradient id="linearGradient-1" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop stop-color="#E4EBF3" offset="0%"></stop>
            <stop stop-color="#E8E6F0" offset="65.6428197%"></stop>
            <stop stop-color="#E5E5FB" offset="88.5044765%"></stop>
            <stop stop-color="#DCE9FE" offset="100%"></stop>
          </linearGradient>
        </defs>
        <polygon
          fill-rule="evenodd"
          stroke="none"
          stroke-width="1"
          points="48 17.28 86.4 80.11584 9.6 80.11584"
          stroke-linecap="square"
          fill="url(#linearGradient-1)"
        />
      </svg>
      <svg class="large shape" viewBox="0 0 96 96">
        <defs>
          <linearGradient id="rectGradient" x1="50%" y1="0.903405676%" x2="50%" y2="98.0599357%">
            <stop stop-color="#DAE8F2" offset="0%"></stop>
            <stop stop-color="#E2F1FC" offset="6.7736539%"></stop>
            <stop stop-color="#E8F3FD" offset="20.2253862%"></stop>
            <stop stop-color="#EAF0F5" offset="100%"></stop>
          </linearGradient>
        </defs>
        <rect
          width="24"
          height="24"
          x="24"
          y="24"
          fill-rule="evenodd"
          stroke-linecap="square"
          fill="url(#rectGradient)"
        />
      </svg>
      <svg class="small shape" viewBox="0 0 96 96">
        <defs>
          <linearGradient id="linearGradient-2" x1="50%" y1="0%" x2="50%" y2="99.186141%">
            <stop stop-color="#D1E5F3" offset="0%"></stop>
            <stop stop-color="#D0E3ED" offset="26.3907373%"></stop>
            <stop stop-color="#EBF5FB" offset="100%"></stop>
          </linearGradient>
        </defs>
        <circle
          cx="48"
          cy="48"
          r="24"
          stroke="none"
          stroke-width="1"
          fill-rule="evenodd"
          stroke-linecap="square"
          fill="url(#linearGradient-2)"
        />
      </svg>
      <svg class="small shape" viewBox="0 0 96 96">
        <defs>
          <linearGradient id="rectGradient1" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop stop-color="#DAE7F9" offset="0%"></stop>
            <stop stop-color="#D5E8F8" offset="39.4927552%"></stop>
            <stop stop-color="#E1E8FC" offset="100%"></stop>
          </linearGradient>
        </defs>
        <rect
          width="12"
          height="12"
          x="12"
          y="12"
          stroke="none"
          stroke-width="1"
          fill-rule="evenodd"
          stroke-linecap="square"
          fill="url(#rectGradient1)"
        />
      </svg>
      <svg class="x-small shape" viewBox="0 0 96 96">
        <defs>
          <linearGradient id="circleGradient-small" x1="50%" y1="0%" x2="50%" y2="98.8910382%">
            <stop stop-color="#D5E3EC" offset="0%"></stop>
            <stop stop-color="#E7EEF0" offset="34.9420721%"></stop>
            <stop stop-color="#ECF4F9" offset="100%"></stop>
          </linearGradient>
        </defs>
        <circle
          cx="48"
          cy="48"
          r="24"
          stroke="none"
          stroke-width="1"
          fill-rule="evenodd"
          stroke-linecap="square"
          fill="url(#circleGradient-small)"
        />
      </svg>
      <svg class="x-small shape" viewBox="0 0 96 96">
        <defs>
          <linearGradient id="rectGradient-small" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop stop-color="#DBECF7" offset="0%"></stop>
            <stop stop-color="#CBDEF2" offset="47.8345004%"></stop>
            <stop stop-color="#C8E0F2" offset="100%"></stop>
          </linearGradient>
        </defs>
        <rect
          width="12"
          height="12"
          x="12"
          y="12"
          stroke="none"
          stroke-width="1"
          fill-rule="evenodd"
          stroke-linecap="square"
          fill="url(#rectGradient-small)"
        />
      </svg>
      <svg class="x-small shape" viewBox="0 0 96 96">
        <defs>
          <linearGradient id="polygonGradient-small" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop stop-color="#E3EBEF" offset="0%"></stop>
            <stop stop-color="#D8E5EB" offset="100%"></stop>
          </linearGradient>
        </defs>
        <polygon
          fill-rule="evenodd"
          stroke="none"
          stroke-width="1"
          points="48 17.28 86.4 80.11584 9.6 80.11584"
          stroke-linecap="square"
          fill="url(#polygonGradient-small)"
        />
      </svg>
    </div>
    <div class="home-banner-center">
      <img src="./images/cutedesign.svg" alt="" />
      <p class="center-first">产品，UI，前端一体化标准技术解决方案</p>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import anime from 'animejs'
@Component({
  name: 'HomeBanner',
})
export default class extends Vue {
  private mounted() {
    this.getAnimate()
  }
  private fitElement(el, padding) {
    let timeout = null

    function resize() {
      if (timeout) clearTimeout(timeout)
      anime.set(el, {
        scale: 1,
      })
      const pad = padding || 0
      const parentEl = el.parentNode
      const elOffsetWidth = el.offsetWidth - pad
      const parentOffsetWidth = parentEl.offsetWidth
      const ratio = parentOffsetWidth / elOffsetWidth
      timeout = setTimeout(
        anime.set(el, {
          scale: ratio,
        }),
        10
      )
    }
    resize()
    window.addEventListener('resize', resize)
  }
  private getAnimate() {
    const AnimationEls = document.querySelector('.home-banner-animations')
    const shapes = AnimationEls.querySelectorAll('.shape')
    const triangleEl = AnimationEls.querySelector('polygon')
    const trianglePoints = triangleEl.getAttribute('points').split(' ')
    const easings = ['easeInOutQuad', 'easeInOutCirc', 'easeInOutSine', 'spring']

    this.fitElement(AnimationEls, 1)

    function createKeyframes(value) {
      const keyframes = []
      for (let i = 0; i < 30; i++)
        keyframes.push({
          value: value,
        })
      return keyframes
    }

    function animateShape(el) {
      const circleEl = el.querySelector('circle')
      const rectEl = el.querySelector('rect')
      const polyEl = el.querySelector('polygon')

      const animation = anime
        .timeline({
          targets: el,
          duration: function () {
            return anime.random(1000, 5000)
          },
          easing: function () {
            return easings[anime.random(0, easings.length - 1)]
          },
          complete: function (anim) {
            animateShape(anim.animatables[0].target)
          },
        })
        .add(
          {
            translateX: createKeyframes(function (el) {
              return el.classList.contains('large') ? anime.random(-500, 450) : anime.random(-500, 450)
            }),
            translateY: createKeyframes(function (el) {
              return el.classList.contains('large') ? anime.random(-50, 50) : anime.random(-50, 50)
            }),
            rotate: createKeyframes(function () {
              return anime.random(-180, 180)
            }),
          },
          0
        )
      if (circleEl) {
        animation.add(
          {
            targets: circleEl,
            r: createKeyframes(function () {
              return anime.random(12, 52)
            }),
          },
          0
        )
      }
      if (rectEl) {
        animation.add(
          {
            targets: rectEl,
            width: createKeyframes(function () {
              return anime.random(34, 64)
            }),
            height: createKeyframes(function () {
              return anime.random(34, 64)
            }),
          },
          0
        )
      }
      if (polyEl) {
        animation.add(
          {
            targets: polyEl,
            points: createKeyframes(function () {
              const scale = anime.random(72, 130) / 100
              return trianglePoints
                .map(function (p: any) {
                  return p * scale
                })
                .join(' ')
            }),
          },
          0
        )
      }
    }

    for (let i = 0; i < shapes.length; i++) {
      animateShape(shapes[i])
    }
  }
}
</script>
<style lang="scss" scoped>
.home-banner {
  width: 100%;
  height: 450px;
  background: #f9fcfe;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &-animations {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1100px;
    height: 550px;
    margin: -275px 0 0 -550px;
  }

  &-animations .shape {
    position: absolute;
    top: 50%;
    overflow: visible;
    width: 150px;
    height: 150px;
    margin-top: -75px;
    stroke: transparent;
    stroke-width: 1px;
  }

  @media (min-width: 740px) {
    &-animations .shape {
      stroke-width: 0.5px;
    }
  }

  &-animations .small.shape {
    width: 76px;
    height: 76px;
    margin-top: -38px;
    stroke: currentcolor;
    fill: currentcolor;
  }

  &-animations .x-small.shape {
    width: 32px;
    height: 32px;
    margin-top: -16px;
    stroke: currentcolor;
    fill: currentcolor;
  }

  &-center {
    width: 1180px;
    text-align: center;
    align-items: center;
    margin-top: 50px;
    position: relative;

    img {
      display: inline-block;
    }

    .center-first {
      margin-top: 33.46px;
    }

    p {
      font-family: PingFangSC-Light;
      flex-wrap: wrap;
      width: 1180px;
      margin: 0 auto;
      text-align: center;
      font-size: 16px;
      color: $color-neutral-10;
      font-weight: 200;
      line-height: 40px;
    }
  }
}
</style>
