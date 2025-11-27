<script lang="ts">
    import { Canvas } from "@threlte/core";
    import Scene from "./scene.svelte";
    import { Color, Folder, Pane, Slider } from "svelte-tweakpane-ui";

    export let gltfPath: string;
    export let zoom: number;
    

    let showPane = false;
    let container: HTMLDivElement

    let showGun = false;
    let x = -4;
    let y = -5;
    let z = 5;
    let lightColor = "#ffffff";
    
</script>

<div>
    {#if showPane}
        <Pane title="Adjustments" >
            <Folder title="DirectionalLight">
                <Slider label="X" min={-10} max={10} step={0.1} bind:value={x} />
                <Slider label="Y" min={-10} max={10} step={0.1} bind:value={y} />
                <Slider label="Z" min={-10} max={10} step={0.1} bind:value={z} /> 
                <Color label="Color" bind:value={lightColor} />
            </Folder>
        </Pane>
        
    {/if}

    <div bind:this={container} >
        <button class="canvas" on:click={() => (showGun = !showGun)}>
            <Canvas>
                <Scene {gltfPath} position={[0, 0, 0]} lightDirection={[x, y, z]} {container} {lightColor} {zoom}/>
            </Canvas>
        </button>
    </div>
</div>


<style>
    .canvas {
        all:unset;
        cursor:pointer;
        width: 100%;
        height: 100%;
    }
</style>
