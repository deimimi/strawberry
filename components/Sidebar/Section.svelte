<section class="berry-sidebar-section sidebar-section">
    <div class="title">
        <slot name="title"/>
    </div>
    <div class="items">
        <slot name="items"></slot>
    </div>
</section>

<style>
    :global(*) + .sidebar-section {
        padding-top: var(--br-inner-gutter);
        padding-bottom: var(--br-inner-gutter);
    }
    .title {
        padding: var(--br-item-block-padding) var(--br-item-inline-padding) var(--br-inner-gutter);
        position: sticky;
        top: 0;
        text-transform: uppercase;
        color: var(--br-grey);
        font-size: 12.5px;
    }
    .items {
        padding-left: var(--br-outer-gutter);
    }
</style>