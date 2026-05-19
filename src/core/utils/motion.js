export function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function onVisible(el, callback, options = {}) {
  if (!el || !window.IntersectionObserver) {
    callback()
    return () => {}
  }

  const observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      observer.disconnect()
      callback()
    }
  }, { rootMargin: '160px', threshold: 0.01, ...options })

  observer.observe(el)
  return () => observer.disconnect()
}

export function bindAnimationVisibility(el, anim) {
  if (!el || !anim || prefersReducedMotion()) {
    anim && anim.pause && anim.pause()
    return () => {}
  }

  const update = (visible) => {
    if (visible && !document.hidden) {
      anim.play && anim.play()
    } else {
      anim.pause && anim.pause()
    }
  }

  let isVisible = true
  const onVisibilityChange = () => update(isVisible)
  document.addEventListener('visibilitychange', onVisibilityChange)

  if (!window.IntersectionObserver) {
    update(true)
    return () => document.removeEventListener('visibilitychange', onVisibilityChange)
  }

  const observer = new IntersectionObserver((entries) => {
    isVisible = entries.some((entry) => entry.isIntersecting)
    update(isVisible)
  }, { threshold: 0.01 })

  observer.observe(el)
  return () => {
    observer.disconnect()
    document.removeEventListener('visibilitychange', onVisibilityChange)
  }
}
