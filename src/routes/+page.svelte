<script lang="ts">
    import Dmodel from "../components/DModel.svelte";


const imgSrc = 'https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=450&h=190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


</script>
<div class="content">
    <div class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 card-hover divide-surface-200-800 block max-w-md divide-y overflow-hidden">
        <header>
            <div class="card-header">
                <Dmodel gltfPath={"src/lib/assets/3D/DragunovSniper.glb"} zoom={9}/>
            </div>
        </header>
        <article class="space-y-4 p-4">
            <div>
                <h3 class="h3">SVD Dragunov</h3>
            </div>
            <p class="opacity-60">
                SVD Dragunov is a semi-automatic designated marksman rifle/sniper rifle chambered in the 7.62×54mmR cartridge, developed in the Soviet Union
            </p>
        </article>
        <footer class="flex items-center justify-between gap-4 p-4">
            <small class="opacity-60">Manufacturer: Kalashnikov Concern Norinco
    </small>
            <small class="opacity-60">Designed on 1958-1963</small>
        </footer>
    </div>

    <div class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 card-hover divide-surface-200-800 block max-w-md divide-y overflow-hidden">
        <header>
            <div class="card-header">
                <div>
                    <Dmodel gltfPath={"src/lib/assets/3D/pistol-black.glb"} zoom={9}/>
                </div>
            </div>
        </header>
        <article class="space-y-4 p-4">
            <div>
                <h3 class="h3">Revolver</h3>
            </div>
            <p class="opacity-60">
                A revolver is a type of repeating handgun with a revolving cylinder that holds multiple chambers, each containing a cartridge
            </p>
        </article>
        <footer class="flex items-center justify-between gap-4 p-4">
            <small class="opacity-60">Manufacturer: Samuel Col
    </small>
            <small class="opacity-60">Designed on 1835</small>
        </footer>
    </div>
</div>







<style>
    .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        padding: 2rem;
        margin-top: 3rem;
    }

    .card-header {
        height: 100%;
        width: 100%;
        background: linear-gradient(135deg, #0A0A63, #00A6C7);
    }
</style>
