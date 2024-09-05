<template>
    <div>
        <BrandingTitle/>
        <LogoDesign/>
        <BGD/>
    </div>
</template>
<script>
import BrandingTitle from './BrandingTitle.vue';
import LogoDesign from '../LogoDesign.vue';
import BGD from './BGD.vue';
import PrintDesign from './PrintDesign.vue';
export default{
    components:{
        BrandingTitle,LogoDesign,BGD,PrintDesign
    }
}
</script>