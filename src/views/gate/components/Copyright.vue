<template>
  <div class="copyright">© {{ $appName }} 2017-2023</div>
</template>

<script>
export default {
  name: 'Copyright'
}
</script>

<style lang="scss" scoped>
.copyright {
  text-align: center;
  padding: 25px;
  font-size: 16px;
  color: var(--sub-color);
}
</style>
