<template>
  <div class="item mt-8 flex relative lg:mt-0 lg:pt-[0.4rem] lg:pb-4 lg:pl-[calc(var(--section-gap)/2)]">
    <i
      class="flex items-center justify-center w-8 h-8 text-[color:var(--color-text)] lg:top-[calc(50%-25px)] lg:left-[-26px] lg:absolute lg:border lg:border-[color:var(--color-border)] lg:bg-[color:var(--color-background)] lg:rounded-lg lg:w-[50px] lg:h-[50px]">
      <slot name="icon"></slot>
    </i>

    <div class="details flex-1 ml-4">
      <h3 class="text-xl font-medium mb-1.5 text-[color:var(--color-heading)]">
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .item:before {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
