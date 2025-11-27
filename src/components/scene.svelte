<script lang="ts">
    import { T } from "@threlte/core";
    import { OrbitControls, useGltf } from "@threlte/extras";
    import { Color, Folder, Pane, Slider } from "svelte-tweakpane-ui";

    export let gltfPath: string;
    export let position: [number, number, number] = [0, 0, 0];
    export let lightDirection: [number, number, number] = [0, 0, 0];
    export let container: HTMLDivElement;
    export let lightColor: string = "#ffffff";
    export let zoom: number = 30;
    export let disableDrag: boolean = false;

    let gunY = position[1];
    let rotation = 0;

    // Mouse drag logic for manual rotation
    let dragging = false;
    let lastX = 0;

    function onPointerDown(event: PointerEvent) {
        if(disableDrag) return;
        dragging = true;
        lastX = event.clientX;
    }

    function onPointerUp() {
        dragging = false;
    }

    function onPointerMove(event: PointerEvent) {
        if (dragging) {
            const deltaX = event.clientX - lastX;
            rotation += deltaX * 0.01; // adjust sensitivity as needed
            lastX = event.clientX;
        }
    }

    import { onMount } from "svelte";
    onMount(() => {
        container.addEventListener("pointerdown", onPointerDown);
        container.addEventListener("pointerup", onPointerUp);
        container.addEventListener("pointerleave", onPointerUp);
        container.addEventListener("pointermove", onPointerMove);
        return () => {
            container.removeEventListener("pointerdown", onPointerDown);
            container.removeEventListener("pointerup", onPointerUp);
            container.removeEventListener("pointerleave", onPointerUp);
            container.removeEventListener("pointermove", onPointerMove);
        };
    });

    function levitate() {
        const time = Date.now() / 1000;
        const speed = 1;
        const offset = 2;
        gunY = Math.cos(time * speed) + offset;
        requestAnimationFrame(levitate);
    }

    levitate();
</script>

<!-- Orthographic camera -->
<T.OrthographicCamera position={[40, -10, 50]} {zoom} makeDefault>
    <!-- Controls -->
    <OrbitControls
        enableDamping
        dampingFactor={0.5}
        enablePan={false}
        enableRotate={false}
    />
</T.OrthographicCamera>

<!-- Ambient light for ambience -->
<T.AmbientLight color="white" intensity={4} />

<!-- Main light --- position x, y, z -->
<T.RectAreaLight intensity={20} position={lightDirection} color={lightColor}/>


{#await useGltf(gltfPath) then pistol}
    <T
        is={pistol.scene}
        {position}
        position.y={gunY}
        scale={8}
        rotation={[0, rotation, 0]}
    />
{/await}
