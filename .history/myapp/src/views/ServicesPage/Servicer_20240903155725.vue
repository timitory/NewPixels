<template>
<div>
<Services/>
<ProductLaunch/>
</div>

</template>
<script>
import Services from './Services.vue'
import ProductLaunch from './ProductLaunch.vue'
import Marketing from './Marketing.vue'
export default{
    name:'Service',
    components:{
        Services,
        ProductLaunch,
        Marketing
    }
}
</script>