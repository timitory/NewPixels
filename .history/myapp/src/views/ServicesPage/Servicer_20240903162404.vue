<template>
<div>
<Services/>
<ProductLaunch/>
<Marketing/>
</div>

</template>
<script>
import Services from './Services.vue'
import ProductLaunch from './ProductLaunch.vue'
import Marketing from './Marketing.vue'
import Service
export default{
    name:'Service',
    components:{
        Services,
        ProductLaunch,
        Marketing
    }
}
</script>