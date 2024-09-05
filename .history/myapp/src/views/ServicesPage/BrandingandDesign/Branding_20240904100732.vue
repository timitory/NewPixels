<template>
    <div>
        <BrandingTitle/>
        <LogoDesign/>
    </div>
</template>
<script>
import BrandingTitle from './BrandingTitle.vue';
import LogoDesign from '../LogoDesign.vue';
import BGD from './BGD.vue';
export default{
    components:{
        BrandingTitle,LogoDesign,BGD
    }
}
</script>