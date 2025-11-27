<script lang="ts">
    import Dmodel from "../components/DModel.svelte";

</script>

<div class="content">
    <div>
        <Dmodel gltfPath={"src/lib/assets/3D/DragunovSniper.glb"} zoom={9}/>
    </div>
    <div>
        <Dmodel gltfPath={"src/lib/assets/3D/pistol.glb"} zoom={9}/>
    </div>
</div>


<style>
    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        height: 100%;
        width: 100%;
        gap: 1rem;
    }

    .content > div {
        width: 100%;
        max-width: 20rem;
        height: 20rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        border-radius: 0.5rem;
        overflow: hidden;
    }
</style>
