<script>
    import { createPopper } from "@popperjs/core";

    /**
     * Where to position the popup relative to the dropdown button.
     * @type {"top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" }
     */
    export let placement = "bottom-start";
    /**
     * Whether the popup is visible
     * @type {boolean}
     */
    export let visible = false;

    function createPopup(popup, _) {
        const reference = popup.previousElementSibling;
        const popperInstance = createPopper(reference, popup, {
            placement,
            modifiers: [{
                name: "offset",
                options: { offset: [0, 5]},
            }],
        });

        return {
            update(visible) {
                if (visible) popperInstance.update();
            },
            destroy() {
                popperInstance.destroy();
            },
        };
    }

    function handleDocumentClick(popup) {
        const reference = popup.previousElementSibling;

        document.addEventListener("click", hideIfExternalClick, true);

        function hideIfExternalClick(event) {
            const [target] = event.path
                || (event.composedPath && event.composedPath());
            const isContained = reference.contains(target);
            if (isContained) {
                visible = !visible;
            } else if (visible) {
                visible = false;
            }
        }

        return {
            destroy: () => {
                document.removeEventListener("click", hideIfExternalClick);
            },
        };
    }
</script>

<!--
    Any element that can respond to the click MouseEvent.
    When the element is clicked the dropdown popup will be shown.
-->
<slot name="button"/>
<div class="berry-dropdown-menu" use:createPopup={visible}
    use:handleDocumentClick class:visible>
    <!--
        One or more Dropdown.Item or Dropown.Link components to
        be shown when the Dropdown[slot=button] is clicked.
    -->
    <slot></slot>
</div>

<style>
    .berry-dropdown-menu {
        display: none;
        background-color: var(--br-white);
        border-radius: var(--br-border-radius);
        outline: none;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        z-index: 100;
        overflow: hidden;
    }
    .berry-dropdown-menu.visible {
        display: block;
    }
</style>
